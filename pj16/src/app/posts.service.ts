import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Post } from "./post.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PostService {
  constructor(private readonly httpClient: HttpClient) {}

  createAndStorePost(newPost: Post) {
    // Send Http request
    this.httpClient
      .post<{ name: string }>(
        "https://angular-bd89f-default-rtdb.firebaseio.com/posts.json",
        newPost
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  fetchPosts(): Observable<Post[]> {
    return this.httpClient
      .get<{ [key: string]: Post }>(
        "https://angular-bd89f-default-rtdb.firebaseio.com/posts.json"
      )
      .pipe(
        map((responseData) => {
          const postArray: Array<Post> = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...responseData[key], id: key });
            }
          }
          return postArray;
        })
      );
  }
}
