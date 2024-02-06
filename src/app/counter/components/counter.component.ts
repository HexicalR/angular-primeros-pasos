import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template:` 
    <h1>Mi segunda chamba.</h1>
    <h3>Contador = {{Counter}}</h3>
   
<button (click)="decreaseBy(1)">-1</button>
<button (click)="reset()">Reset</button>
<button (click)="increaseBy(1)">+1</button>
    `
})

export class CounterComponent {

  public Counter:number = 10;

  increaseBy(value:number):void{
    this.Counter +=1;
    }

  decreaseBy(value:number):void{
   this.Counter -=1;
    }

    reset():void{
      this.Counter =10;
       } 
}