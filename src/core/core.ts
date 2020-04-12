import * as Zip from 'adm-zip';
import { Relationships } from './Relationships';

export class Core {
    zip: Zip = new Zip();

    constructor() {
        const relations = new Relationships();
        relations.relationShip({Id: 'we', Target: 'asdsad', Type: 'asdasd'})
        const xml = relations.getXml()
        this.zip.addFile('_rels/.rels', Buffer.alloc(xml.length, xml))
        // or write everything to disk
        this.zip.writeZip(/*target file name*/"/home/misael/Documentos/misproyectos/signati/office/WordProcessingML/example/files.zip");
    }
}
