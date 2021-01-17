const { fchmod } = require("fs");
const $ = require("jquery");


$(function(){

    let db;
    let lsc;
    let sheetId = 1;
    // console.log("document is loaded !!!");
    // cell pe lagao click event and run function

    $('.cell').on("click" , function(){
        console.log("cell clicked !!!!");
        let rowId = Number($(this).attr("rowid")); // 1 => 2
        let colId = Number($(this).attr("colid")); // 1 => B
        let address = String.fromCharCode(colId+65) + (rowId+1);
        let cellObject = db[rowId][colId];
        $("#address").val(address);
        $("#formula").val(cellObject.formula);
        // console.log(db);
    })

    // sheets logic

    $(".add-sheet").on("click" , function(){
        // dynamically html add to dom
        sheetId++;
        // 2                                               
        let sheetToBeAdded = `<div class="sheet" sid="${sheetId-1}">Sheet ${sheetId}</div>`;
        $(".sheets-list").append(sheetToBeAdded);


        // 2 element dom .sheet class
        // console.log($(`div[sid=${sheetId-1}]`));
        
        $(`div[sid=${sheetId-1}]`).on("click" , function(){
            // console.log("click event added on new sheet !!");
            let isActive = $(this).hasClass("active-sheet");
            if(!isActive){
            // remove active-sheet
            $(".active-sheet").removeClass("active-sheet");
            // add active-sheet to this
            $(this).addClass("active-sheet");
           }
        })
    })


    // if not active then add active-sheet class
    $(".sheet").on("click" , function(){
        let isActive = $(this).hasClass("active-sheet");
        if(!isActive){
            // remove active-sheet
            $(".active-sheet").removeClass("active-sheet");
            // add active-sheet to this
            $(this).addClass("active-sheet");

        }
    })




    $(".cell").on("blur" , function(){
        // set last selected cell
        lsc = this;
        console.log("cell blurred !!!");
        let rowId = $(this).attr("rowid");
        let colId = $(this).attr("colid");
        let cellObject = db[rowId][colId];

        // ui wali value
        let value = $(this).text();
        if(value && cellObject.value != value){
            if(cellObject.formula){
                deleteFormula(cellObject);
                $("#formula").val("");
            }
            // db update
            cellObject.value = value;
            // console.log(db);
            // db.cellobject.childrens update hojao
            updateChildrens(cellObject);
        }
        // value typed in cell
        // should be set in cellobject.value
    })



    $("#formula").on("blur" , function(){
        let formula = $(this).val();
        // console.log(formula);
        // get last selected cell ka object
        let rowId = $(lsc).attr("rowid");
        let colId = $(lsc).attr("colid");
        let cellObject = db[rowId][colId];
        if(formula && cellObject.formula != formula){
            // 4. formula to formula
            if(cellObject.formula){
                deleteFormula(cellObject);
            }

            cellObject.formula = formula;
            let value = solve(formula , cellObject);
            // db update
            cellObject.value = value;
            // ui update
            $(lsc).text(value);
            // update childrens
            updateChildrens(cellObject);
            // console.log(db);
        }
    })

    function deleteFormula(cellObject){
        cellObject.formula = "";
        for(let i=0; i<cellObject.parents.length ; i++){
            // A1 // A2
            let parentName = cellObject.parents[i];
            let {rowId , colId} = getRowIdColIdFromAddress(parentName);
            let parentCellObject = db[rowId][colId];
            //{name:"A1" , value="10" , formula:"" , childrens:["B1" , "A23" , "Z100"] , parents:[]};
            let childrens = parentCellObject.childrens;
            let newChildrens = childrens.filter( function(child){
                return child != cellObject.name;
            });
            // ["A23" , "Z100"];
            parentCellObject.childrens = newChildrens;
        }
        cellObject.parents = [];
    }

    function updateChildrens(cellObject){
        let childrens = cellObject.childrens;
        // A1
        // childrens = ["B1"];
        for(let i=0 ; i<childrens.length ; i++){
            let {rowId , colId} = getRowIdColIdFromAddress(childrens[i]);
            let childrenCellObject = db[rowId][colId];
            //{name:"B1" , value:"30" , formula:"( A1 + A2 )" , childrens:[]};
            let newValue = solve(childrenCellObject.formula);
            // db update
            childrenCellObject.value = newValue;
            // ui update
            $(`div[rowid=${rowId}][colid=${colId}]`).text(newValue);
            // if childrenCellObject have atleast 1 children
            if(childrenCellObject.childrens.length){
                updateChildrens(childrenCellObject);
            }
        }

    }


    function solve(formula , cellObject){
        // {
        // name:"B1"
        // value:""
        // formula:""
        // }

        // "( 10 + 20 )"

        let fComps = formula.split(" ");
        // ["(" , "A1" , "+" , "A2" , ")"];
        for(let i=0 ; i<fComps.length ; i++){

            if( fComps[i][0] >= "A" && fComps[i][0] <= "Z" ){
                // A1 // A2
                let {rowId , colId} = getRowIdColIdFromAddress(fComps[i]);
                let cellObjectOfFComp = db[rowId][colId]; // A1
                // add self to childrens of A1 and A2

                if(cellObject){
                    cellObjectOfFComp.childrens.push(cellObject.name);
                    cellObject.parents.push(fComps[i]);
                }

                formula = formula.replace(fComps[i] , cellObjectOfFComp.value);
            }
        }
        // stack infix evaluation
        let value = eval(formula);
        return value;
    }


    // utility functions
    function getRowIdColIdFromAddress(address){
        // A1
        let rowId = Number(address.substring(1))-1;
        let colId = address.charCodeAt(0) - 65;
        return {
            rowId,
            colId
        }
    }

    // db initialize
    function initDB(){
        db = [];
        for(let i=0 ; i<100 ; i++){
            let row = [];
            for(let j=0 ; j<26 ; j++){
                let name = String.fromCharCode(j+65) + (i+1);
                let cellObject = {
                    name:name,
                    value:"",
                    formula:"",
                    childrens:[],
                    parents:[]
                }
                row.push(cellObject);
            }
            db.push(row);
        }
        console.log(db);
    }

    initDB();
})