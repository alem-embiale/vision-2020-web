import { Order } from './order.model'
import { Item } from './item.model'

export class OrderItem {
    orderItemId : number;
    quantity : number;
    orderId : number;
    itemId : number;
}
