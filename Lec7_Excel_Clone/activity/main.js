// in activity folder
// npm init -y
// npm i electron

// in package.json
// "start":"electron ."

// electron code 

const electron = require("electron");
const ejse = require("ejs-electron");

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true, // node enabled !,
        enableRemoteModule:true // to use dialog object
      }
    })
  
    win.loadFile('index.ejs').then(function(){
        win.maximize();
        win.webContents.openDevTools();
    })
}
  
app.whenReady().then(createWindow)
  