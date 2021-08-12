import { Component, OnInit } from '@angular/core';
import { PaymentDetailsService } from '../shared/payment-details.service';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetails } from '../shared/payment-details.model';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service:PaymentDetailsService,public toastr:ToastrService) {} 

  /*
  convert json data into objects,which can be used in ngFor loop
  link --> https://www.cloudhadoop.com/angular-convert-json-object-parse/
  */
  
  ngOnInit() :void{

    this.service.refreshList()
      /*
      try-1
      this.arr = {name:"Alexis",surname:"Debeauvais",location:"Paris"};   
      this.arr = this.service.list;
      this.karr=Object.keys(this.arr);
      */
  }
 
  populateForm(selectedRecord:PaymentDetails)
  {

    this.service.formData=Object.assign({},selectedRecord);
  }

  //call delete api method
  onDelete(id:number) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deletePaymentDetails(id)
        .subscribe(
          res =>
          {
          //this.refreshPage();
          this.service.refreshList();
          this.toastr.error('Deleted Successfully','PaymentDetails Register'); 
          },
          err => 
          {
             console.log(err);
          });
    }
  }
/*
  //refresh a page
  refreshPage(): void {
    window.location.reload();
}*/
  

  

}
