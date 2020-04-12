import { DeclarationAttributes, ElementCompact } from 'xml-js';

export interface XmlRelations extends ElementCompact {
    '_declaration': XmlDeclaration;
    'Relationship': XmlRelationShip[]
}

export interface XmlDeclaration {
    '_attributes': DeclarationAttributes;
}


export interface XmlRelationShip {
    _attributes: XmlRelationShipAttr;
}

export interface XmlRelationShipAttr {
    Id: string;
    Type: string;
    Target: string;
}
