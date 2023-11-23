import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
})
export class AdminPanelComponent {
  dropsvg: string = '/assets/addphoto.svg';
  @ViewChild('fileInput') fileInput!: ElementRef;

  handleFileInputClick(): void {
    this.fileInput.nativeElement.click();
  }

  handleFileInputChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      console.log('Выбранный файл:', file);
    }
  }
}
