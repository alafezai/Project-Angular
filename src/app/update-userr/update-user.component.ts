import { Component, OnInit } from '@angular/core';
import {User} from "./../services/user.model";
import { UserService } from './../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  _id: any ;
  user: User= new User;
  constructor(private route: ActivatedRoute,private router: Router, private userService:UserService) { }

 
  ngOnInit(): void {
    this.user = new User();

    this._id = this.route.snapshot.params['_id'];
    
    this.userService.getUser(this._id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
  }

  updateUser() {
    this.userService.updateUser(this._id, this.user)
      .subscribe(data => {
        console.log(data);
        this.user = new User();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateUser();    
  }

  gotoList() {
    this.router.navigate(['/usercrud']);
  }
}
