const fs = require('fs')
const path = require('path')
const csv = require('csvtojson')
const filePath = path.join(__dirname, 'src', 'customer-data.csv')
const outputFile = path.join(__dirname, 'src', 'outputfile.json')

converter = csv({
    //options object.  "trim:true" would trim off spaces surrounding column content
    trim: false,
});

//read all data from the file into memory
converter.fromFile(filePath).then((allData) => {
    //This code only runs one time. This callback is called when all converted data is ready in memory    

    //without JSON.stringify the output is just [object] [object] [object]..why?
    fs.writeFile(outputFile, (JSON.stringify(allData)), () => {
        // console.log(allData) //works fine, prints as an array with JSON pretty format inside
        // allData.forEach(element => {
        //     console.log(element) //works fine, prints as JSON pretty format
        // });

    })
})
//implement diff-ing the output and the solution data