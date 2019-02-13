import { Component } from '@angular/core';
import { Ecategoria } from './ecategoria.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Serviços 24 Help';


  options : string[];
  myValue: Ecategoria;
  Ecategoria : typeof Ecategoria = Ecategoria;
 // ESTETICABELEZA: boolean;
 // isOffline : bool;
  
  ngOnInit() {
    var x = Ecategoria;
    var options = Object.keys(Ecategoria);
   // this.options = options.slice(options.length / 2);
  }
  
  parseValue(value : string) {
    this.myValue = Ecategoria[value];
   // this.ESTETICABELEZA = this.myValue == Ecategoria.ESTETICABELEZA;
  }

}
