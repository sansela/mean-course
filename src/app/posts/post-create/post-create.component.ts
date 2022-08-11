import { Component } from "@angular/core";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {
  postContent = 'Enter the message';
  newPost = 'NO CONTENT';

  onPostAdd() {
    this.newPost = this.postContent;
  }
}
