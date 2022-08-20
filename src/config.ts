export interface Config {
    /** 
    * Save config information.
    * 
    * apiEnvironment:
    *   development = 1
    *   production = 2
    * 
    * documentsReceptionUrl:
    *   development = https://celcer.sri.gob.ec/comprobantes-electronicos-ws/RecepcionComprobantesOffline?wsdl 
    *   production = https://cel.sri.gob.ec/comprobantes-electronicos-ws/RecepcionComprobantesOffline?wsdl
    * 
    * documentsAuthorizationUrl:
    *   development = https://celcer.sri.gob.ec/comprobantes-electronicos-ws/AutorizacionComprobantesOffline?wsdl
    *   production = https://cel.sri.gob.ec/comprobantes-electronicos-ws/AutorizacionComprobantesOffline?wsdl
    */
    apiEnvironment: string;
    documentsReceptionUrl: string;
    documentsAuthorizationUrl: string;
}