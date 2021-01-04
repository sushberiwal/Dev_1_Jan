// fs module => file system module
const fs = require("fs");

// get files of a directory
let folderPath = "./testFolder";

let files = fs.readdirSync(folderPath);
// console.log(files);
// console.log(files);

for(let i=0 ; i<files.length ; i++){
    sortFolder(files[i])
}

// asfnajksfa.jpg

function getExtension(file){
    // asjkbajksf.txt
    return file.split(".")[1];
}

function checkExtensionFolder(ext){
    // txt , pdf , doc , word => Documents
    // jpg , jpeg , gif , png => Images
    // mp4 , mkv => Video
    if(ext == "txt" || ext == "pdf" || ext=="doc"){
        // documents folder
        //"./testFolder/Documents"
        let extFolderPath = `${folderPath}/Documents`;
        return fs.existsSync(extFolderPath);
    }
    else if(ext =="jpg" || ext =="gif" || ext=="png" || ext == "jpeg"){
        // images folder
        let extFolderPath = `${folderPath}/Images`;
        return fs.existsSync(extFolderPath);
    }
}
function moveFile(file , ext){
    if(ext == "txt" || ext == "pdf" || ext=="doc"){
        // documents folder
        //"./testFolder/Documents"
        let sourceFile = `${folderPath}/${file}`;
        let destinationFile = `${folderPath}/Documents/${file}`;
        fs.copyFileSync(sourceFile , destinationFile);
        fs.unlinkSync(sourceFile);
    }
    else if(ext =="jpg" || ext =="gif" || ext=="png" || ext == "jpeg"){
        // images folder
        let sourceFile = `${folderPath}/${file}`;
        let destinationFile = `${folderPath}/Images/${file}`;
        fs.copyFileSync(sourceFile , destinationFile);
        fs.unlinkSync(sourceFile);
    }
    
}
function createExtensionFolder(ext){
    if(ext == "txt" || ext == "pdf" || ext=="doc"){
        // documents folder
        //"./testFolder/Documents"
        let extFolderPath = `${folderPath}/Documents`;
        fs.mkdirSync(extFolderPath);
    }
    else if(ext =="jpg" || ext =="gif" || ext=="png" || ext == "jpeg"){
        // images folder
        let extFolderPath = `${folderPath}/Images`;
        fs.mkdirSync(extFolderPath);
    }
}


function sortFolder(file){
    // console.log(file);    
    let ext = getExtension(file);
    console.log(ext);
        let folderExist = checkExtensionFolder(ext);
        // // falsy values => null , undefined , 0 , "" , false
        console.log(folderExist);
        if(folderExist){
            // true
            moveFile(file , ext);
        }
        else{
            // false
            createExtensionFolder(ext);
            moveFile(file , ext);
        }
}

