import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() control:any;
  @Input() label:string="";
  showErrors(){
    const {dirty,touched,errors}=this.control;
    return dirty && touched && errors;
  }
}
