// <!--angle units used in this schema -- >
//    <xsd:simpleType name= "angleUnit" >
//        <xsd:restriction base= "xsd:string" >
//        <xsd:enumeration value= "arcsec" />
//        <xsd:enumeration value= "arcmin" />
//        <xsd:enumeration value= "deg" />
//        <xsd:enumeration value= "rad" />
//    </xsd:restriction>
// < /xsd:simpleType>

export class AngleType {
    public static Arcsec = 'arcsec';
    public static Arcmin = 'arcmin';
    public static Deg = 'deg';
    public static Rad = 'rad';

    static getAll = () => [
        AngleType.Arcsec,
        AngleType.Arcmin,
        AngleType.Deg,
        AngleType.Rad
    ];
}
