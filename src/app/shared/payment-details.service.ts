import { Injectable } from '@angular/core';
import { PaymentDetails } from './payment-details.model';
import {HttpClient} from '@angular/common/http'; 
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailsService {

  constructor(private http:HttpClient) { 
    
  }

  readonly baseURL='https://localhost:5001/api/PaymentDetails';
  formData:PaymentDetails=new PaymentDetails(); //model class and it will return the properties with its value
  list:PaymentDetails[];
  
  //post form data into database
  postPaymentDetails()
  {
    //parameters => URL,object
    return this.http.post(this.baseURL,this.formData);
  }

  refreshList() { 
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as PaymentDetails[]);
  }

  ////put form data into database
  putPaymentDetails() {
    return this.http.put(`${this.baseURL}/${this.formData.PaymentDetailId}`,this.formData);
  }

  //delete a record based on id
  deletePaymentDetails(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

}

/*to make http request from angular to asp.net , we need to import HttpClient*/
