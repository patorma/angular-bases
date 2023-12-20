import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
// EventEmitter es un generico en este caso se agrega el tipo que fluye en este objeto
// se crea una instancia EventEmitter

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

   public character: Character={
    name: '',
    power: 0
   }

   emitCharacter(): void{

    // debugger;

    //si es igual a cero no hago nada
    if(this.character.name.length === 0 && this.character.power === 0) return
    if(this.character.power === null) return
    this.onNewCharacter.emit(this.character)
    this.character = {name: '',power: 0};
}
}
