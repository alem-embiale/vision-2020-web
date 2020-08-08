import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/order.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private service: OrderService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm) {
    if(form = null)
      form.resetForm();
    this.service.formData = {
      orderId: null,
      orderNo: Math.floor(1000000 + Math.random() * 900000).toString(),
      customerId:0,
      paymentMethod:'',
      grandTotal:0
    }
  }

}
