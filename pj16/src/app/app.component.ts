import { Subscription } from "rxjs";
import { PostService } from "./posts.service";
import { Post } from "./post.model";
import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Array<Post> = [];
  isFetching = false;
  error = null;
  private errorSubscription: Subscription;

  constructor(private readonly postService: PostService) {}

  ngOnInit() {
    // this.fetchPostsAsSubject();
    this.errorSubscription = this.postService
      .getErrorSubjects()
      .subscribe((error) => (this.error = error));
    this.fetchPosts();
  }

  ngOnDestroy() {
    this.errorSubscription.unsubscribe();
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
    this.postService.fetchPosts().subscribe(
      (posts) => {
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      (error: Error) => {
        this.error = error.message;
      }
    );
  }

  private fetchPostsAsSubject() {
    this.postService
      .getPostSubjects()
      .subscribe((posts) => (this.loadedPosts = posts));
  }
}
