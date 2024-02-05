import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrl: './mods-home.component.css',
})
export class ModsHomeComponent {
  modalOpen = false;
  items = [
    { title: 'Why is the sky blue?', content: 'Because it is' },
    { title: 'Why does an orange taste like?', content: 'Like an orange' },
    { title: 'What color is that cat?', content: 'Orange color' },
  ];
  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
