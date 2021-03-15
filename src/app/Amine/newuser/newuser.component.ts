import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user.model';
import { UserseviceService } from '../service/usersevice.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss']
})
export class NewuserComponent implements OnInit {

  public user: User;
  form: FormGroup = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastename: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor(private service: UserseviceService) { }

  ngOnInit(): void {
  } 
  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
  regist() {
    const formValue = this.form.value;
    const newUser = new User(this.service.ELEMENT_DATA.length+1,
      formValue['lastname'],
      formValue['firstname'],
      formValue['email'],
    );
    console.log(newUser);
    this.service.addUser(newUser);
  }
}
