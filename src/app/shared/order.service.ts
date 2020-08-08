import { Injectable } from '@angular/core';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  formData = {
    orderId: null,
    orderNo: '',
    customerId:0,
    paymentMethod:'',
    grandTotal:0
  }

  constructor() { }
}
