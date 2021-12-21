import { Component, OnInit } from '@angular/core';
import { Post } from './post.modele';
import { posts } from './posts-list';
import { PostesService } from "src/app/services/postes.service";
@Component({
  selector: 'app-help-me',
  templateUrl: './help-me.component.html',
  styleUrls: ['./help-me.component.css']
})
export class HelpMeComponent implements OnInit {

  public postList: any = [];

  constructor(
    private postesService: PostesService
  ) { }

  ngOnInit(): void {
    this.postesService.GetAllposts().subscribe(
      res=>this.postList = res
    )
    console.log(this.postList)
  }

}
