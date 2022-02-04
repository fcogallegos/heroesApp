import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from "rxjs/operators";

import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `
  ]
})
export class AddComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  };

  constructor( private heroesService: HeroesService,
               private activatedRoute: ActivatedRoute,
               private router: Router,
               private snackBar: MatSnackBar,
               public dialog: MatDialog ) { }

  ngOnInit(): void {

    if( !this.router.url.includes( 'edit' ) ) {
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.heroesService.getHeroeById(id) )
      )
      .subscribe( heroe => this.heroe = heroe );

  }

  saveHeroe() {
    if( this.heroe.superhero.trim().length === 0 ) {
      return;
    } 

    if( this.heroe.id ) {
      //update
      this.heroesService.updateHeroe(this.heroe)
        .subscribe( heroe => this.showSnackbar('Register updated') );
    } else {
      //crate new register
      this.heroesService.addHeroe( this.heroe )
      .subscribe( heroe => {
        this.router.navigate(['/heroes/edit', heroe.id]);
        this.showSnackbar('Register created');
      })
    }
  }

  deleteHeroe() {
    
    this.dialog.open( ConfirmComponent, {
      width: '250px'
    });

    //this.heroesService.deleteHeroe( this.heroe.id! )
    //  .subscribe( resp => {
        
    //    this.router.navigate(['/heroes']);

      //})
  }

  showSnackbar(message: string) {
    this.snackBar.open(message, 'ok!', {
      duration: 2500
    });
  }
}
