import { CharactersRemainingPipe } from './characters-remaining.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PairsPipe } from './pairs.pipe';
import { InitialsPipe } from './initials.pipe';
@NgModule({
  declarations: [CharactersRemainingPipe, PairsPipe, InitialsPipe],
  imports: [CommonModule],
  exports: [CharactersRemainingPipe, PairsPipe, InitialsPipe],
})
export class PipesModule {}
