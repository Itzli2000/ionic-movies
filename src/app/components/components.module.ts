import { DetailsComponent } from './details/details.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { PipesModule } from './../pipes/pipes.module';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowParesComponent,
    DetailsComponent,
  ],
  exports: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowParesComponent,
    DetailsComponent,
  ],
  imports: [CommonModule, PipesModule, IonicModule],
})
export class ComponentsModule {}
