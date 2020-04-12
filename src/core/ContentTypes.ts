import { XmlRelations, XmlRelationShipAttr } from '../types/RelationShip.type';
import { DeclarationAttributes, js2xml } from 'xml-js';
import {
    XmlContentTypes,
    XmlDefaultAttributes,
    XmlOverrideAttribute,
    XmlTypes,
    XmlTypesAttributes
} from '../types/ContentTypes.type';

export class ContentTypes {
    private xml: XmlContentTypes = {
        '_declaration': {
            _attributes: {
                version: '1.0',
                encoding: 'utf-8',
                standalone: 'yes'
            }
        },
        Types: {
            _attributes: {
                xmlns: 'http://schemas.openxmlformats.org/package/2006/content-types'
            }
        }
    } as XmlContentTypes;

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
            Types: {
                _attributes: {
                    xmlns: 'http://schemas.openxmlformats.org/package/2006/content-types'
                }
            }
        } as XmlContentTypes;
    }

    types(data: XmlTypesAttributes) {
        this.xml.Types = {
            _attributes: data
        } as XmlTypes
    }

    default(data: XmlDefaultAttributes) {
        if (!this.xml.Types.Default) {
            this.xml.Types.Default = []
        }
        this.xml.Types.Default.push({
            _attributes: data
        })
    }

    override(data: XmlOverrideAttribute) {
        if (!this.xml.Types.Override) {
            this.xml.Types.Override = []
        }
        this.xml.Types.Override.push({
            _attributes: data
        })
    }

    public getJson(): XmlContentTypes {
        return this.xml

    }

    public getXml(): string {
        const options = {compact: true, ignoreComment: true, spaces: 4};
        const xmlContents = js2xml({...this.xml}, options);
        this.restart();
        return xmlContents
    }
}
