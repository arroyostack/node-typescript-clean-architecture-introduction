import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-files.use.case";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
}

export class ServerApp {
    static run( { base, limit, showTable }: RunOptions ) {
        console.log( 'Server running' );

        const table = new CreateTable().execute( { base, limit } );
        const wasCreated = new SaveFile().execute( {
            fileContent: table,
            destination: `outputs/table-${base}`
        } );

        wasCreated ? console.log( 'File Crated.' ) : console.log( 'Fail to create file.' );
    }
}