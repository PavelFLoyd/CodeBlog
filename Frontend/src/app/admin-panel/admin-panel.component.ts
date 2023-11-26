// admin-panel.component.ts
import { Component, ViewChild, ElementRef } from '@angular/core';
import { YourApiService } from '../your-api.service';
import { Article } from '../article.model';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
})
export class AdminPanelComponent {
  dropsvg: string = '/assets/addphoto.svg';
  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor(private apiService: YourApiService) {}

  handleFileInputClick(): void {
    this.fileInput.nativeElement.click();
  }

  handleFileInputChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const nameInput = document.querySelector('.put-name') as HTMLInputElement;
      const descriptionInput = document.querySelector(
        '.put-small-desc'
      ) as HTMLInputElement;

      const name = nameInput.value;
      const description = descriptionInput.value;

      // Проверка наличия данных
      if (!name || !description) {
        console.error('Заполните все обязательные поля');
        return;
      }

      const articleData: Article = {
        title: name,
        description: description,
        smallPhoto: 'Путь к маленькому баннеру',
        createDate: new Date().toISOString(),
      };

      this.apiService.createArticle(articleData).subscribe(
        (response: Article) => {
          // Успешно создана новая статья, можно обновить интерфейс админ-панели
          console.log('Новая статья:', response);
          // Добавьте логику для обновления интерфейса админ-панели
        },
        (error: any) => {
          console.error('Ошибка при создании статьи', error);
          // Более подробное логирование ошибки
        }
      );
    }
  }
}
