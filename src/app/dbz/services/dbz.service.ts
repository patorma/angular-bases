

import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

//@Injectable le dioce a la clase que se comporte como servicio es un decorador
@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    name:'Krillin',
    power: 1000
  },
{
  id: uuid(),
  name: 'Goku',
  power: 9500
},
{
  id: uuid(),
  name: 'Vegeta',
  power:7500
}];
//onDeleteCharacter(index: number)
//  this.characters.splice(index,1)
deleteCharacterById(id: string){
  //remover por id es tarea
  // console.log(id)
 this.characters = this.characters.filter(character => character.id != id)
//  this.characters ? console.log(this.characters): console.log('iguales')
}
addCharacter(character : Character): void {
  //...character digo toma todas sus propiedades y esparcelas en este nuevo objeto que estoy cerando
   const newCharacter: Character = {id: uuid(), ...character}

   this.characters.push(newCharacter)
}

  constructor() { }

}
