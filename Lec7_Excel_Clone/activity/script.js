const { fchmod } = require("fs");
const $ = require("jquery");


$(function(){

    let db;
    let lsc;
    // console.log("document is loaded !!!");
    // cell pe lagao click event and run function

    $('.cell').on("click" , function(){
        console.log("cell clicked !!!!");
        let rowId = Number($(this).attr("rowid")); // 1 => 2
        let colId = Number($(this).attr("colid")); // 1 => B
        let address = String.fromCharCode(colId+65) + (rowId+1);
        $("#address").val(address);
        console.log(db);
    })


    $(".cell").on("blur" , function(){
        // set last selected cell
        lsc = this;
        console.log("cell blurred !!!");
        let rowId = $(this).attr("rowid");
        let colId = $(this).attr("colid");
        let cellObject = db[rowId][colId];

        let value = $(this).text();
        if(value && cellObject.value != value){
            cellObject.value = value;
            console.log(db);
        }
        // value typed in cell
        // should be set in cellobject.value
    })



    $("#formula").on("blur" , function(){
        let formula = $(this).val();
        console.log(formula);
        // get last selected cell ka object
        let rowId = $(lsc).attr("rowid");
        let colId = $(lsc).attr("colid");
        let cellObject = db[rowId][colId];
        if(formula && cellObject.formula != formula){
            cellObject.formula = formula;
            let value = solve(formula);
            // db update
            cellObject.value = value;
            // ui update
            $(lsc).text(value);
        }
    })


    function solve(formula){
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
                    formula:""
                }
                row.push(cellObject);
            }
            db.push(row);
        }
        console.log(db);
    }

    initDB();
})