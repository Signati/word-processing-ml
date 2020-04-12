import { DeclarationAttributes, ElementCompact } from 'xml-js';

export interface XmlRelations extends ElementCompact {
    '_declaration': XmlDeclaration;
    'Types': XmlRelationShip
}

export interface XmlDeclaration {
    '_attributes': DeclarationAttributes;
}


export interface XmlRelationShip {
    _attributes: XmlRelationShipAttr;
    Default: XmlDefault[];
    Override: XmlOverride[]
}

export interface XmlRelationShipAttr {
    xmlns: string;
}

export interface XmlDefault {
    _attributes: XmlDefaultAttributes
}

export interface XmlDefaultAttributes {
    Extension: string;
    ContentType: string;
}

export interface XmlOverride {
    _attributes: XmlOverrideAttribute
}

export interface XmlOverrideAttribute {
    PartName: string;
    ContentType: string
}
