import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'home', 
  template : `
  <b>Using Ovservebales</b>

  <button (click)="get()">Get data</button>

  <h3>Vale</h3>
  <div *ngFor="let value of values"> {{ value }}</div>

  <h3>errors </h3>
  <div  > {{ anyErrors }}</div>

  <h3>finishd</h3>
  <div  > {{ finished }}</div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message : string = "Home page";
  
  data : Observable<number[]>;
  values : number[]=[];
  anyErrors : boolean;
  finished :boolean;


  get(){

      this.data = new Observable((observer : any) => {

        setTimeout(()=>{
          observer.next(10);

        },1000)

        setTimeout(()=>{
          observer.next(20);
          
        },2000)

        setTimeout(()=>{
          observer.next(30);
          
        },3000)

        setTimeout(()=>{
          observer.complete(0);
          
        },4000)
      });


      let subScription = this.data.subscribe(
        value => this.values.push(value),
        //value => console.log(value),
        error => this.anyErrors=true,
        //error => console.log(error),
        () => this.finished = true
      );

      console.log(subScription);

  }

  constructor() { }

  ngOnInit() {
  }

}
