import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostesService {

  constructor(private http: HttpClient) { }

private apiUrl ='http://localhost:3000/api/postes';

/**
 * Get all posts
 */

GetAllposts(){
return this.http.get(this.apiUrl);
}


/**
 * Get post by ID
 * @param id
 */
FindPost(id: string){

}



/**
 * insert post
 * @param post
 */
CreatePost(post: any){
return this.http.post(this.apiUrl,post)
.pipe(map((res:any)=>{
  return res;
}));
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
