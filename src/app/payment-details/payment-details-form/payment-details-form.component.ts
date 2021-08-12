import { Component, OnInit } from '@angular/core';
import { PaymentDetailsService } from 'src/app/shared/payment-details.service';
import { NgForm } from '@angular/forms';
import { PaymentDetails } from 'src/app/shared/payment-details.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details-form',
  templateUrl: './payment-details-form.component.html',
  styleUrls: ['./payment-details-form.component.css']
})
export class PaymentDetailsFormComponent implements OnInit {
//dependency injection..service property can access in anywhere
  constructor(public service:PaymentDetailsService,private toastr:ToastrService) {}

  ngOnInit(): void {
  }

  //call post api method - submitting form data into asp.net core api
  onSubmit(form:NgForm)
  {
    if(this.service.formData.PaymentDetailId==0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
    
  }

  insertRecord(form:NgForm)
  {
    this.service.postPaymentDetails().subscribe(
      //we can define the form output here
      res =>
      {
        this.service.refreshList();
        //Toastr is a JavaScript library which is used to create a notification popup.
        this.toastr.success('Submitted Successfully','Payment Details Register'); //pm.=?msg,title
        this.resetForm(form);
        //this.refreshPage();
      },
      err =>
      {
         console.log(err); 
      }
    );
  }

  updateRecord(form:NgForm)
  {
    this.service.putPaymentDetails().subscribe(
      //we can define the form output here
      res =>
      {
        this.service.refreshList();
        //Toastr is a JavaScript library which is used to create a notification popup.
        this.toastr.info('Updated Successfully','Payment Details Register'); //pm.=?msg,title
        this.resetForm(form);
        //this.refreshPage();
      },
      err =>
      {
         console.log(err); 
      }
    );

  }

  //reset form data
  resetForm(form:NgForm)
  {
    form.form.reset();
    this.service.formData=new PaymentDetails();
  }
/*
  //refresh a page
  refreshPage(): void {
    window.location.reload();
}
*/

}
