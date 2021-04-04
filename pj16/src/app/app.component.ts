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

  constructor(private readonly postService: PostService) {
    this.fetchPosts();
  }

  ngOnInit() {
    this.fetchPostsAsSubject();
    // this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    this.postService.createAndStorePost(postData);
  }

  onFetchPosts() {
    this.postService.fetchPostsAsSubject();
    // this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.isFetching = true;
    this.postService.fetchPosts().subscribe((posts) => {
      this.isFetching = false;
      this.loadedPosts = posts;
    });
  }

  private fetchPostsAsSubject() {
    this.postService
      .getPostSubjects()
      .subscribe((posts) => (this.loadedPosts = posts));
  }
}
