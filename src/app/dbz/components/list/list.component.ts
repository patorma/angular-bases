import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

 @Input()
 public characterList: Character[]=[{
  name:'Trunks',
  power:10
 }]

 @Output()
 public onDeleteOneCharacter: EventEmitter<string> = new EventEmitter();
 //onDelete  = Index value (evento a emitir acá)


 //tarea recibir el index aca
//  onDeleteCharacter(index: number):void{
//     // Emitir el ID del personaje
//     console.log({index})
//  }

emitCharacterId(id: string ) : void {

   this.onDeleteOneCharacter.emit(id)

}

}
