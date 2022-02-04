import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  msg:string = "";
  page:string = "";
  isOverlayOpen:boolean = false;
  access:boolean = false;

  taskFormControl = new FormControl('', );

  constructor() {
    this.page="cart";
  }

  onSubmit(form:NgForm) {
    console.log(form)
    if (form.value.user == "admin" && form.value.password == "admin") {
      console.log("access > " +this.access);
      this.access = true;
      this.isOverlayOpen = false;
    } else {
      console.log("access else > " +this.access)
      this.msg = "Incorrect user name and password"
    }
  }

  togglePage(selection:string) {
    this.page = selection
  }



}
