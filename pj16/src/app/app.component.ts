import { HttpClient, HttpResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.httpClient
      .post<HttpResponse<any>>(
        "https://angular-bd89f-default-rtdb.firebaseio.com/posts.json",
        postData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.httpClient
      .get<HttpResponse<any>>(
        "https://angular-bd89f-default-rtdb.firebaseio.com/posts.json"
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }
}
