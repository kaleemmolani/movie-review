import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  public movies: any;
  public posters: any;
  constructor() { 
  this.movies = [{name:'Why Cheat India',
                  poster:'Why_Cheat_India.jpg',
                  rating:6.7},

                 {name:'URI',
                 poster:'URI.jpg',
                 rating:8.5},

                 {name:'The Accidental Prime Minister',
                 poster:'The_Accidental_Prime_Minister_film.jpg',
                 rating:5.8},

                 {name:'Student of The Year',
                 poster:'student-of-the-year-2.jpg',
                 rating:8.5},

                 {name:'simmba',
                 poster:'Simmba-Movie.jpg',
                 rating:6.5},
                 
                 {name:'Photograph',
                 poster:'photograph.jpg',
                 rating:7.6},

                 {name:'Notebook',
                 poster:'notebook.jpg',
                 rating:7.3},

                 {name:'Luka Chuppi',
                 poster:'luka-chuppi.jpg',
                 rating:6.8},
                 
                 {name:'Hum Chaar',
                 poster:'Hum-Chaar.jpg',
                 rating:7.4},
                 
                 {name:'Fraud Saiyyan',
                 poster:'Fraud_Saiyyan.jpg',
                 rating:8.1},
                 
                 {name:'Fanney Khan',
                 poster:'Fanney Khan.jpg',
                 rating:6.3},
                 
                 {name:'Chhalawa',
                 poster:'chalawa.jpg',
                 rating:7.1},
                 
                 {name:'Blackmail',
                 poster:'black-mail.jpg',
                 rating:5.9},
                 
                 {name:'Batla House',
                ppposter:'batlahouse.jpg',
                rating:7.6}];
  
  }

ngOnInit(){

}
}
