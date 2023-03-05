import { CharactersRemainingPipe } from './characters-remaining.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [CharactersRemainingPipe],
  imports: [CommonModule],
  exports: [CharactersRemainingPipe],
})
export class PipesModule {}
