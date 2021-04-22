import { Component, OnInit } from '@angular/core';
import User from 'src/app/Models/user';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user = new User('first_name','isckjd','disaet5aasMLQM','fvnrijfnvjn');

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  login(){
    this.apiService.authUser(this.user).subscribe((data: User) => this.user  = {
      first_name: data.first_name,
      last_name: data.last_name,
      email_id: data.email_id,
      password: data.password
    });
  }

}
