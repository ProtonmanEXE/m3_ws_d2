import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Item } from '../shared/item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  form: FormGroup;

  cart:Item[] = [];
  inv:Item[] = [];
  displayPrice:number = 0;
  totalPrice:number = 0;
  index:number = 0;
  apple:Item = new Item("Apple", "Mildly sweet and vanilla-like with a flora aroma",
    4.35, 1);
  orange:Item = new Item("Orange", "Delicious and juicy, good for juicing and contains an impressive list of essential nutrients",
    4.01, 1)
  pineapple:Item = new Item("Pineapple", "A perfect balance of sweetness and acidity, it can be added into various recipes or salads or eaten fresh by itself",
    2.85, 1);
  grapes:Item = new Item("Grapes", "Seedless grapes are available all year round, and they all have a firm, crisp texture despite the thin skin",
    13.00, 1);

  qtyControl = new FormControl('', [Validators.required, Validators.min(1)]);

  constructor(private fb: FormBuilder) {
    this.inv = [ this.apple, this.orange, this.pineapple, this.grapes ]
    this.form = this.fb.group({
      qty: this.qtyControl,
    })
  }

  ngOnInit(): void {
  }

  addCartItem(item:Item) {
    if (this.cart.includes(item)) {
      this.index = this.cart.indexOf(item);
      this.cart[this.index].qty++
    } else {
      this.cart.push(item)
    }
  }

  changeCartQty(event:Event, i:number) {
    if ((<HTMLInputElement>event.target).valueAsNumber < 1) {
      this.cart[i].qty = 1
    } else {
      this.cart[i].qty = (<HTMLInputElement>event.target).valueAsNumber
    }
  }

  removeCartItem(i:number) {
    this.cart[i].qty = 1;
    this.cart.splice(i, 1)
  }

  sumOfCart() {
    this.totalPrice = 0;
    for (let i = 0; i < this.cart.length; i++) {
      this.totalPrice = this.totalPrice + this.cart[i].qty*this.cart[i].price;
      console.log("total price loop > " +this.totalPrice);
    }
    console.log("total price final > " +this.totalPrice);
  }

}
