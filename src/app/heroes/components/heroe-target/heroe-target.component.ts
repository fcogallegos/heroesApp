import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroe-target',
  templateUrl: './heroe-target.component.html',
  styles: [`
  mat-card {
      margin-top: 20px
    }
  `
  ]
})
export class HeroeTargetComponent implements OnInit {

  @Input () heroe!: Heroe;

  constructor() { }

  ngOnInit(): void {
  }

}
