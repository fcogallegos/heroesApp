import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../../pages/heroe/interfaces/heroe.interface';

@Component({
  selector: 'app-heroe-target',
  templateUrl: './heroe-target.component.html',
  styles: [
  ]
})
export class HeroeTargetComponent implements OnInit {

  @Input () heroe!: Heroe;

  constructor() { }

  ngOnInit(): void {
  }

}
