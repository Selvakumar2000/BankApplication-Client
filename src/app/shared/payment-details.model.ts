export class PaymentDetails {
    //similar to asp.net core project models file...both must have same attributes
    //camel casing into pascal casing convertion is done by asp.net core

    PaymentDetailId:number=0;
    CardOwnerName:string='';
    CardNumber:string='';
    ExpirationDate:string='';
    SecurityCode:string='';
}
