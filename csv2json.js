const fs = require('fs')
const path = require('path')
const csv = require('csvtojson')
const filePath = path.join(__dirname, 'src', 'customer-data.csv')
const outputFile = path.join(__dirname, 'src', 'outputfile.json')

//read all data from the file into memory
csv().fromFile(filePath).then( (allData)=>{
    //This code only runs one time. This callback is called when the whole CSV is loaded into memory.    
    fs.writeFile(outputFile, JSON.stringify(allData), ()=>{
        console.log(allData)
        console.log(`Converted to JSON and written to ${outputFile}`)
    })
})

