import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute,  ) { }

  ngOnInit(): void {
     
     const heroId = this.activatedRoute.snapshot.paramMap.get('id');
     console.log(heroId);
    
     /*
    this.activatedRoute.params
      .subscribe( ({id}) => console.log(id) );
    */
  }

}
