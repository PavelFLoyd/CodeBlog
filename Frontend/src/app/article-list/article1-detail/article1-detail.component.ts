import { Component } from '@angular/core';

@Component({
  selector: 'app-article1-detail',
  templateUrl: './article1-detail.component.html',
  styleUrls: ['./article1-detail.component.scss'],
})
export class Article1DetailComponent {
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
        username: '', // НИК ЮЗЕРА ЗАРЕГИСТРИРОВАННОГО
        text: this.newComment,
      });
      this.newComment = '';
    }
  }
}
