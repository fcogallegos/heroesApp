import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroe.interface';
import { switchMap } from 'rxjs/operators';
import { HeroesService } from '../../services/heroes.service';
 


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService ) { }

  ngOnInit(): void {
     
     //const heroId = this.activatedRoute.snapshot.paramMap.get('id');
     //console.log(heroId);
  
     
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.heroesService.getHeroeById(id))
    )
    .subscribe( heroe => this.heroe = heroe );
    




  }

}
