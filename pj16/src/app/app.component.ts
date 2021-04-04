import { PostService } from "./posts.service";
import { Post } from "./post.model";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  loadedPosts: Array<Post> = [];
  isFetching = false;

  constructor(private readonly postService: PostService) {}

  ngOnInit() {
    // this.fetchPostsAsSubject();
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    this.postService.createAndStorePost(postData);
  }

  onFetchPosts() {
    // this.postService.fetchPostsAsSubject();
    this.fetchPosts();
  }

  onClearPosts() {
    this.postService.deletePosts().subscribe(() => this.fetchPosts());
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
