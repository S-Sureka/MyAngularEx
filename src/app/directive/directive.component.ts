import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  showPassword= false;
  secretPassword='Tuna';
  btnClk:number[]=[];
  // btnClk=0;
  // noofbtnClks:Date[]=[];
  
onClk()
{
this.showPassword=!this.showPassword;
 this.btnClk.push(this.btnClk.length + 1);
// this.btnClk++;
// this.noofbtnClks.push(new Date());
}
}