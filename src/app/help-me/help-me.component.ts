import { Component, OnInit } from '@angular/core';
import { Post } from './post.modele';
import { posts } from './posts-list';
import { PostesService } from "src/app/services/postes.service";
import { PostModel } from './post';

import { FormBuilder,FormGroup } from "@angular/forms";
@Component({
  selector: 'app-help-me',
  templateUrl: './help-me.component.html',
  styleUrls: ['./help-me.component.css']
})
export class HelpMeComponent implements OnInit {
  public formvalue !:FormGroup;
  public postList: any = [];
  public postMaodel: PostModel = new PostModel();

  constructor(
    private formBuilber : FormBuilder,
    private postesService: PostesService
  ) { }

  ngOnInit(): void {
    this.formvalue = this.formBuilber.group({
      sujet : ['']
    });
    this.postesService.GetAllposts().subscribe(
      res=>this.postList = res
    )
    console.log(this.postList)
  }


  savePost(){
   // this.postMaodel.sujet = this.formvalue.value.sujet;
    this.postMaodel.user=[];
    this.postMaodel.comments=[];
    this.postMaodel.datePost ="";
    this.postMaodel.nbComent=0;
    this.postMaodel.nbJaime=0;
    this.postMaodel.sujet="";
    this.postesService.CreatePost(this.postMaodel)
    .subscribe(res=>{
      alert("Post is saved succsuful");
    },
    err=>{
      console.log(err.mesage);
    })
  }


}
