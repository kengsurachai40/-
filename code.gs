//Database : https://docs.google.com/spreadsheets/d/1C21Ne5IoCM3bxCjmOtKGCLsnxBlsv6Om2pklRrJVoHU/edit#gid=0/copy

function doGet() {
  return HtmlService.createTemplateFromFile('index')
  .evaluate()
  .setTitle('FormSubmit')
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
}

function saveData(obj){
    let ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Data')
        ss.appendRow([
        new Date(),
        obj.firstname,
        obj.idLine,
        obj.gender,

        ])
    
     data = ss.getRange(ss.getLastRow(),1,1,ss.getLastColumn()).getDisplayValues()[0]

   return data
  }


function setStatus(){
  let ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('status')
  let data = ss.getDataRange().getDisplayValues()
  let sta = data.map(r => r[1])
  return sta
}
