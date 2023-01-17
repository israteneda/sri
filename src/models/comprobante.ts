/*
* Estos campos son parte de la clave de acceso
*
* Fecha de emision: Date;  // ddmmaaaa
* Tipo de comprobante: DocumentType;
* Numero de Ruc: string;
* Tipo de ambiente: string;
* Serie: string; // 001001
* Numero de comprobante (secuencial) // 000000001
* Codigo numerico: string;
* Tipo de emision: string = 1;
* Digito Verificador: number;
*
* Estado del documento
* En procesamiento = PPR
* Autorizado = AUT
* No autorizado = NAT
*/

interface Comprobante {
    secuencial: number;
    razonSocial: string;
    identificacion: string;
    codigoNumerico: number;
    digitoVerificador: number;
}

interface Factura extends Comprobante {
    guiaRemision: number;
    fechaEmision: Date;
}

interface GuiaRemision extends Comprobante {
    direccionPartida: string;
    direccionDestino: string;
    // O identificacion del remitente
    identificacionTransportista: string;
    placa: string;
    descripcionMercaderia: string;
    cantidadMercaderia: string;
    motivoTraslado: string;
    fechaInicioTransporte: Date;
    fechaTerminacionTransporte: Date;
}



