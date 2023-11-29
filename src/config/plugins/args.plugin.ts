import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs( hideBin( process.argv ) )
    .option( 'b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multiplication table base'
    } )
    .option( 'l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplication Table'
    } )
    .option( 's', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show multiplicaiton table.'
    } )
    // Check don't seem t work findout
    // .check( ( argv, options ) => {
    //     if ( argv.b < 1 ) throw 'Error: base must be a positive number or 0.';
    // } )
    .parseSync();
