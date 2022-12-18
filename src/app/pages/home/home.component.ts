import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = new FormControl('');
  email = new FormControl('');
  subject = new FormControl('');
  message = new FormControl('');

 
  constructor() { }

  ngOnInit(): void {
  }

  send_message(){
    if (this.name.value == "" || this.email.value == "" || this.subject.value == "" || this.message.value == ""){
      // show warning popup "Please fill the field"
      window.alert("Please fill the field")
    }else{
      // show sucess popup "Message has been sent"
      window.alert("Message has been sent")
      // blank all field
      this.name.setValue("")
      this.email.setValue("")
      this.subject.setValue("")
      this.message.setValue("")
    }


    console.log(this.name.value,this.email.value,this.subject.value,this.message.value)
  }

}
