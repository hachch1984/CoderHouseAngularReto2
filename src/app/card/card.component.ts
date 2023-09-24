import { Component, Input } from '@angular/core';
import { Persona } from 'src/data/Persona';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input()
  persona!: Persona;

  @Input()
  index: number = 0;


gifVisible: boolean =true;

onLoad(){
  this.gifVisible=false;
}



}
