import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';

import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { HeroeTargetComponent } from './components/heroe-target/heroe-target.component';

import { HeroePipe } from './pipes/heroe.pipe';





@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    HeroeComponent,
    HomeComponent,
    ListComponent,
    HeroeTargetComponent,
    HeroePipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
