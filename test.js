import {createDataTable} from 'country-ip-spoofer/dataTableCreator'
 
const csfFile = './ip-spoofer/IP2LOCATION-LITE-DB1.CSV';
const outputFile = './ip-spoofer/';
 
createDataTable(csfFile, outputFile)
    .then(() => {
        console.log('done');
    });