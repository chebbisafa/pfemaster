import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userServise:UserService) { }
  temp_users:any;
  ngOnInit() {
    return this.userServise.getAlluserdetails().subscribe(data=>this.temp_users =data.response)
  }


}
