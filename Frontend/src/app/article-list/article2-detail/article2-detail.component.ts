import { Component } from '@angular/core';

@Component({
  selector: 'app-article2-detail',
  templateUrl: './article2-detail.component.html',
  styleUrls: ['./article2-detail.component.scss'],
})
export class Article2DetailComponent {
  sendsvg: string = '/assets/sendsvg.svg';
  comments: { username: string; text: string }[] = [
    {
      username: 'p1nkf1oyd',
      text: 'Крутая статья Крутая статья Крутая статья Крутая статья Крутая статья Крутая статья Крутая статья',
    },
  ];

  newComment: string = '';

  addComment(): void {
    if (this.newComment.trim() !== '') {
      this.comments.push({
        username: '',
        text: this.newComment,
      });
      this.newComment = '';
    }
  }
}
