import { DeclarationAttributes, ElementCompact } from 'xml-js';

export interface XmlContentTypes extends ElementCompact {
    '_declaration': XmlDeclaration;
    'Types': XmlTypes
}

export interface XmlDeclaration {
    '_attributes': DeclarationAttributes;
}


export interface XmlTypes {
    _attributes: XmlTypesAttributes;
    Default: XmlDefault[];
    Override: XmlOverride[]
}

export interface XmlTypesAttributes {
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
