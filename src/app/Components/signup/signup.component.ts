import { Component, OnInit } from '@angular/core';
import  User  from 'src/app/Models/user';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  user = new User('sumit', 'baria', 'sumibaria@gmail.com', '123456789')

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  register_user(){
    this.apiService.postUser(this.user).subscribe((data: User) => this.user  = {

      first_name: data.first_name,
      last_name: data.last_name,
      email_id: data.email_id,
      password: data.password
    });
    
  }

}
