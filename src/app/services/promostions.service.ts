import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class PromostionsService {

  constructor(private http: HttpClient) { }

private apiUrl ='http://localhost:3000/api/promostions/';

/**
 * Get all posts
 */

GetAllpromostions(){
return this.http.get(this.apiUrl);
}


/**
 * Get cour by ID
 * @param id
 */
FindPoromistion(id: string){

}



/**
 * insert cour
 * @param post
 */
CreatePromostion(promostion: any){
return this.http.post<any>(this.apiUrl,promostion)
.pipe(map((res:any)=>{
  return res;
}));
}


/**
 * Update Post by ID
 * @param id
 * @param post
 */
updatepromostion(id: string , post: any){

}

/**
 * Delete post by ID
 * @param id
 */
DeletePromostion(id:any){
  return this.http.delete<any>('http://localhost:3000/api/promostions/'+id);
}


}
