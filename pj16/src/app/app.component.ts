import { PostService } from "./posts.service";
import { Post } from "./post.model";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  loadedPosts: Array<Post> = [];
  isFetching = false;

  constructor(
    private readonly postService: PostService,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.postService.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postService.createAndStorePost(postData);
  }

  onFetchPosts() {
    this.postService.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }
}
