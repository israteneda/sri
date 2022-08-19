interface DocumentType {}

interface IssueType {}

interface Document {
    issueDate: Date;  // ddmmaaaa
    type: DocumentType;
    ruc: string;
    series: string;
    sequential: string;
    numericCode: string;
    issueType: string;
    checkDigit: number;
}