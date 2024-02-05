import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, CardComponent, CommonModule],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'Nature',
      content: 'I saw a neet tree today',
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'Mountainlover',
      content: 'Here is a picture of a snowy mountain',
    },
    {
      title: 'Mountain biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'Biking1222',
      content: 'I did some biking today',
    },
    {
      title: 'Mountain biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'Biking1222',
      content: 'I did some biking today',
    },
  ];
}
