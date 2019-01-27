import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';
    isChecked =false;
    onChange($event){
    console.log("log ");
    }

    expenses =[]=
    [
    {id:1 , name :'morgage'},
    {id:2 , name :'food expense'},
    {id:3 , name :'gas '},
    {id:4 , name :'utility '}
   ]

    incomes =[]=
    [
    {id:1 , name :'yilak pay check'},
    {id:2 , name :'Tibebe pay check'}
   
   ]
}
