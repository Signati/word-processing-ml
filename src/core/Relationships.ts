import { XmlRelations, XmlRelationShipAttr } from '../types/RelationShip.type';
import { DeclarationAttributes, js2xml } from 'xml-js';

export class Relationships {
    xml: XmlRelations = {
        '_declaration': {
            _attributes: {
                version: '1.0',
                encoding: 'utf-8',
                standalone: 'yes'
            }
        },
    } as XmlRelations

    constructor(data?: DeclarationAttributes) {
        this.restart();
        if (data) {
            this.xml._declaration = {
                _attributes: data
            }
        }
    }

    restart() {
        this.xml = {
            '_declaration': {
                _attributes: {
                    version: '1.0',
                    encoding: 'utf-8',
                    standalone: 'yes'
                }
            },
        } as XmlRelations
    }

    relationShip(data: XmlRelationShipAttr) {
        if (!this.xml['Relationship']) {
            this.xml['Relationship'] = []
        }
        this.xml.Relationship.push({
            _attributes: data
        })
    }

    public getJson(): XmlRelations {
        return this.xml

    }

    public getXml(): string {
        const options = {compact: true, ignoreComment: true, spaces: 4};
        const xmlContents = js2xml({...this.xml}, options);
        this.restart();
        return xmlContents
    }
}
