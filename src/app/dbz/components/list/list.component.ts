import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

@Input()
public characterList: Character[] = [{
  name: 'Trunks',
  power: 10
}]

@Output()
public onDelete: EventEmitter<number> = new EventEmitter();

onDeleteCharacter(index:number) : void {

this.onDelete.emit(index);


}

@Output()
public onDeleteId: EventEmitter<string> = new EventEmitter<string>();

deleteCharacterById(id?:string) : void {
if(!id) return;
this.onDeleteId.emit(id);

}
}
