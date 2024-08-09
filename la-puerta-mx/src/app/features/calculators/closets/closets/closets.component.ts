import { Component } from '@angular/core';

@Component({
  selector: 'app-closets',
  templateUrl: './closets.component.html',
  styleUrl: './closets.component.css'
})
export class ClosetsComponent {
  entrepanerias = [''];

  addEntrepeneria(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    if (selectElement.value) {
      this.entrepanerias.push('');
    }
  }
}
