// <xsd:enumeration value="other"/>
// <xsd:enumeration value="broad band"/>
// <xsd:enumeration value="narrow band"/>
// <xsd:enumeration value="O-III"/>
// <xsd:enumeration value="H-beta"/>
// <xsd:enumeration value="H-alpha"/>
// <xsd:enumeration value="color"/>
// <xsd:enumeration value="neutral"/>
// <xsd:enumeration value="corrective"/>
// <!-- New in V1.7: filter type for solar filters -->
// <xsd:enumeration value="solar"/>

export enum FilterType {
    BroadBand = 'broad band',
    NarrowBand = 'narrow band',
    OIII = 'O-III',
    Hbeta = 'H-beta',
    Halpha = 'H-alpha',
    Color = 'color',
    Neutral = 'neutral',
    Corrective = 'corrective',
    Solar = 'solar'
}
