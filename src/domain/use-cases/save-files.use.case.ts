import fs from 'fs';

export interface SaveFileUSeCase {
    execute: ( options: Options ) => boolean;
}

export interface Options {
    fileContent: string;
    destination?: string;
    filename?: string;
}

export class SaveFile implements SaveFileUSeCase {
    constructor(
        // & Storage repo.
    ) { }

    execute( { fileContent, destination = 'outputs', filename = 'table' }: Options ): boolean {

        fs.mkdirSync( destination, { recursive: true } );

        // File system will write a tableX.txt in outputs, if outputs folder not found will use the function above.
        fs.writeFileSync( `${destination}/${filename}.txt`, fileContent );

        return true;

        console.log( 'File Created' );
    };

}