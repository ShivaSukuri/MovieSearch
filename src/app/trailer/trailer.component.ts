import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css']
})
export class TrailerComponent {
  // movie:String="";
  movie: SafeResourceUrl = "";
  constructor(public service:MovieService, private sanitizer: DomSanitizer){

  }

ngOnInit():void{
this.movie=this.service.movie.trailer;
this.movie = this.sanitizer.bypassSecurityTrustResourceUrl(this.service.movie.trailer);
console.log(this.movie)
}
}
