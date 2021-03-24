import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { PipesModule } from './../pipes/pipes.module';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SlideshowBackdropComponent, SlideshowPosterComponent],
  exports: [SlideshowBackdropComponent, SlideshowPosterComponent],
  imports: [CommonModule, PipesModule, IonicModule],
})
export class ComponentsModule {}
