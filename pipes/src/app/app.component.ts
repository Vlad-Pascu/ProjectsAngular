import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConvertPipe } from "./convert.pipe";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, ConvertPipe]
})
export class AppComponent {
  name:string='';
  date:string='';
  amount:number=0;
  height:number=0;
  miles:number=0;

  car={
    make:'Toyota',
    model:'Camry',
    year:2000
  };
  onNameChange(value:string){
    this.name=value;
  }

  onDateChange(value:string){
    this.date=value;
  }
  
  onAmountChange(value:string){
    this.amount=parseFloat(value);
  }

  onHeightChange(value:string){
    this.height=parseFloat(value);
  }

  onMilesChange(value:string){
    this.miles=parseFloat(value);
  }
}
