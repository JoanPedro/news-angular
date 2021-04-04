import { Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Post } from "./post.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PostService {
  private postSubjects: Subject<Array<Post>> = new Subject<Array<Post>>();
  private errorSubjects: Subject<string> = new Subject<string>();

  constructor(private readonly httpClient: HttpClient) {}

  public createAndStorePost(newPost: Post) {
    this.httpClient
      .post<{ name: string }>(
        "https://angular-bd89f-default-rtdb.firebaseio.com/posts.json",
        newPost
      )
      .subscribe(
        (responseData) => {
          console.log(responseData);
        },
        (error: Error) => this.errorSubjects.next(error.message)
      );
  }

  public fetchPosts(): Observable<Post[]> {
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

  public fetchPostsAsSubject() {
    this.fetchPosts().subscribe((posts) => {
      console.log(posts);
      this.postSubjects.next(posts);
    });
  }

  public getPostSubjects(): Subject<Array<Post>> {
    return this.postSubjects;
  }

  public getErrorSubjects(): Subject<string> {
    return this.errorSubjects;
  }

  public deletePosts(): Observable<any> {
    return this.httpClient.delete<any>(
      "https://angular-bd89f-default-rtdb.firebaseio.com/posts.json"
    );
  }
}
