// These fields are part of the claveAcceso
// 
// issueDate: Date;  // ddmmaaaa
// type: DocumentType;
// ruc: string;
// series: string;
// sequential: string;
// numericCode: string;
// issueType: string = 1;
// checkDigit: number;

// State of a Document
// being processing = PPR
// Authorized = AUT
// Unathorized = NAT

interface Document {
    sequentialNumber: number;
    company_name: string;
    identification: string;
    issueDate: Date;
}

