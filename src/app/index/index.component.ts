import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
   starImage:string="assets/star.png";
   movies:any[]=[];
   movie:any=[];
   filteredMovies: any[] = [];

   constructor(public service:MovieService,public router:Router){
    this.movie={name:"",image:"",rating:"",date:"",trailer:""}
    this.movies=[{name:"Hanuman",image:"assets/hanuman.jpeg",rating:"9.2",date:"2024-01-14",trailer:"https://www.youtube.com/embed/Oqvly3MvlXA?si=m-z8A0YKwQcq1bgQ"},
    {name:"salaar",image:"assets/salaar.jpg",rating:"9.4",date:"2023-12-23",trailer:"https://www.youtube.com/embed/4GPvYMKtrtI?si=sF0rwQ28dWiV9JEW"},
    {name:"Animal",image:"assets/animal.jpg",rating:"8.3",date:"2023-12-26",trailer:"https://www.youtube.com/embed/OM6Sgf-Q4Ow?si=qyReSsacA4JooLcp"},
    {name:"Guntur Karam",image:"assets/gunturKaram.jpg",rating:"7.8",date:"2024-01-14",trailer:"https://www.youtube.com/embed/DYLG65xz55U?si=nT6R7UD4iXwje6eu"},
    {name:"Baahubali:The Beginning",image:"assets/baahubali1.jpg",rating:"",date:"2015-07-10",trailer:"https://www.youtube.com/embed/sOEg_YZQsTI?si=PkWKkSXp5bC2tzDi"},
    {name:"Pushpa:The Rise-Part-1",image:"assets/pushpa1.jpg",rating:"7.6",date:"2021-12-17",trailer:"https://www.youtube.com/embed/Q1NKMPhP8PY?si=1OiRYfLp0ZFZJsHX"},
    {name:"Mayabazr",image:"assets/mayabazar.jpg",rating:"9.5",date:"1957-03-27",trailer:"https://www.youtube.com/embed/jaRa8HO2qmY?si=Egx7ZurEfZFfAfBU"}]

   }
   filterMovie(form:any){
    let fromDateObject = new Date(form.fromDate);
    // console.log(fromDateObject);
    let toDateObject = new Date(form.toDate);

    this.filteredMovies = this.movies.filter(movie => {
      const [year, month, day] = movie.date.split('-').map(Number);
      const formattedDate = new Date(year, month - 1, day);

       return formattedDate >= fromDateObject && formattedDate <= toDateObject;
    });
  // }



    // const[year,month,day]=form.fromDate.split('-').map(Number);
    // const fromDa=new Date(year,month-1,day);
    // console.log(fromDa);


    // let timeStamp=Date.parse(form.fromDate);
    
    // let dateObject=new Date(form.fromDate);
    
    // console.log(dateObject);
    // let year=dateObject.getFullYear();
    // console.log(year);
    // const fromDate:Date = new Date(form.fromDate);
    // console.log(fromDate)
    // const toDate = new Date(form.toDate);
    
    // for(let movie of this.movies){
    //   const[year,month,day]=movie.date.split('-').map(Number);
    //   const formattedDate=new Date(year,month-1,day);
    //   // console.log(formattedDate);
    //   if(dateObject>=formattedDate ){
    //     console.log(dateObject);
    //     this.filteredMovies.unshift(movie);
    //     console.log(this.filteredMovies);
    //   }
    // }

   }
   playTrailer(movie:any){
    this.service.movie=movie;
    console.log(movie);
    this.router.navigate(['/trailer']);
   }
}
