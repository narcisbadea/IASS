import { CharactersRemainingPipe } from './characters-remaining.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PairsPipe } from './pairs.pipe';
@NgModule({
  declarations: [CharactersRemainingPipe, PairsPipe],
  imports: [CommonModule],
  exports: [CharactersRemainingPipe, PairsPipe],
})
export class PipesModule {}
