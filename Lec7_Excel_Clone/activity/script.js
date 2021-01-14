const $ = require("jquery");


$(document).ready(function(){

    let db;
   
    // console.log("document is loaded !!!");

    // cell pe lagao click event and run function

    $('.cell').on("click" , function(){
        console.log("cell clicked !!!!");
        let rowId = Number($(this).attr("rowid")); // 1 => 2
        let colId = Number($(this).attr("colid")); // 1 => B
        let address = String.fromCharCode(colId+65) + (rowId+1);
        $("#address").val(address);
    })


    $(".cell").on("blur" , function(){
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


    function initDB(){
        db = [];
        for(let i=0 ; i<100 ; i++){
            let row = [];
            for(let j=0 ; j<26 ; j++){
                let name = String.fromCharCode(j+65) + (i+1);
                let cellObject = {
                    name:name,
                    value:""
                }
                row.push(cellObject);
            }
            db.push(row);
        }
        console.log(db);
    }

    initDB();





})