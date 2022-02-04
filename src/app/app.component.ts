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
  isOpen:boolean = false;
  access:boolean = false;

  taskFormControl = new FormControl('', );

  constructor() {
    this.page="cart";
  }

  onSubmit(form:NgForm) {
    console.log(form)

    console.log("Form user > " +form.value.user)

    if (form.value.user == "admin" && form.value.user == "admin") {
      console.log("access > " +this.access)
      this.access = true
    } else {
      console.log("access else > " +this.access)
      // this.msg = "Incorrect user name and password"
      this.msg = "I failed, for some reason I cannot get this form to save user and password properly in the background"
    }
  }

  togglePage(selection:string) {

  }



}
