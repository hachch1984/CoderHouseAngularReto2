import { Component } from '@angular/core';
import { Persona_MOCK_DATA } from 'src/data/MOCK_DATA';
import { Persona } from 'src/data/Persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent {



  personas: Persona[] = []
  


  mostrarListadoOnClick() {

    this.personas = this.personas.length === 0 ? [...Persona_MOCK_DATA] : [];
  }

}
