import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {UserseviceService} from '../../Amine/service/usersevice.service';
import {User} from '../../Amine/model/user.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public user: User;
  form: FormGroup = new FormGroup({
    firstname: new FormControl('',Validators.required),
    lastename:new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
  
  constructor(private userservice:UserseviceService,private router:Router) { }

  ngOnInit(): void {
  }
  regist() {
    const formValue = this.form.value;
    const newUser = new User(null,
      formValue['lastname'],
      formValue['firstname'],
      formValue['email'],
    );
    console.log(newUser);
    this.userservice.addUser(newUser);
    this.router.navigate(['amine']);
  }
  

}
