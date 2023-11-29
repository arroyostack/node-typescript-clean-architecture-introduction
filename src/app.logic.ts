import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

const { b: base, l: limit, s: showTable } = yarg;

let outputMessage = '';
const headerMessage = `
===========================
Tabla del ${base}
===========================
`;

for ( let i = 0;i <= limit;i++ ) {
    outputMessage += `${base} x ${i} = ${base * i} \n`;
}

outputMessage = headerMessage + outputMessage;

// The fs function will make a new folder called outputs.
const outputPath = `outputs`;
fs.mkdirSync( outputPath, { recursive: true } );

// File system will write a tableX.txt in outputs, if outputs folder not found will use the function above.
fs.writeFileSync( `outputs/table-${base}.txt`, outputMessage );

if ( showTable ) {
    console.log( outputMessage );
}