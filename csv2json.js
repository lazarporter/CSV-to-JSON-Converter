const fs = require('fs')
const path = require('path')
const csv = require('csvtojson')
const filePath = path.join(__dirname, 'src', 'customer-data.csv')
const outputFile = path.join(__dirname, 'src', 'outputfile.json')

converter = csv({
    //options object.  "trim:true" would trim off spaces surrounding column content
    trim:false,
});

//read all data from the file into memory
converter.fromFile(filePath).then( (allData)=>{
    //This code only runs one time. This callback is called when all converted data is ready in memory    
    
    //without JSON.stringify the output is just [object] [object] [object]..why?
    fs.writeFile(outputFile, JSON.stringify(allData), ()=>{
        
        //this, without JSON.stringify, logs the objects printed beautifully..is that a functionality built into console.log?
        console.log(allData)
        console.log(`Converted to JSON and written to ${outputFile}`)
    })
})

//implement diff-ing the output and the solution data
