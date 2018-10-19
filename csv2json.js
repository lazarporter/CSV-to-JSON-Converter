//Count the commas until you hit the first newLine, adding them to keyArray. 
//now you know an array of the keys.
//You can iterate through the file, each time you hit a comma you know you are at the next value
//every time you hit keyArray.length commas, you have completed a row.

const fs = require('fs')
const path = require('path')
const csv = require('csvtojson')
const filePath = path.join(__dirname, 'src', 'customer-data.csv')
const outputFile = path.join(__dirname, 'src', 'outputfile.json')

var buffer = ''
var counter = 0
csv().fromFile(filePath).then( (csvRow)=>{
    buffer += csvRow;
    fs.writeFile(outputFile, JSON.stringify(csvRow), ()=>{
        console.log(`file ${++counter} written to file`)
    })
})

console.log(JSON.stringify(buffer))
