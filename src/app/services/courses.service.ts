import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

import { Post } from "src/app/help-me/post.modele";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

/**
 * Get all posts
 */

GetAllposts(){

}


/**
 * Get cour by ID
 * @param id 
 */
FindPost(id: string){

}



/**
 * insert cour
 * @param post 
 */
CreatePost(post: any){

}


/**
 * Update Post by ID
 * @param id 
 * @param post 
 */
updateCour(id: string , post: any){

}

/**
 * Delete post by ID
 * @param id 
 */
DeletePost(id:string){

}


}
