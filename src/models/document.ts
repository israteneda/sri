// These fields are part of the access key
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
    companyName: string;
    identification: string;
    numericCode: number;
    checkDigit: number;
}

interface Invoice extends Document {
    waybillNumber: number;
    issueDate: Date;
}

interface Waybill extends Document{
    startingPoint: string;
    destinationAddress: string;
    sender: string;
    plateNumber: string;
    goodsDescription: string;
    goodsQuantity: string;
    transferReason: string;
    transportStartDate: Date;
    transportEndDate: Date;
}



