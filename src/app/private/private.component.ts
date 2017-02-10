import { Component, OnInit } from '@angular/core';
import { AuthService}          from './auth.service';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css'],
   providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class PrivateComponent implements OnInit {

      errorMessage: string;
      heroes: String[];
      mode = 'Observable';
      code : string;
      constructor (private authService: AuthService, location: Location) {
        console.info(location.path());
//        this.code = location.path().split('code=')[1].split('\&')[0];

      }
      ngOnInit() { this.getHeroes(this.code); }
      getHeroes(code: string) {
        this.authService.getHeroes(code)
                         .subscribe(
                           heroes => this.heroes = heroes,
                           error =>  this.errorMessage = <any>error);
      }
}
