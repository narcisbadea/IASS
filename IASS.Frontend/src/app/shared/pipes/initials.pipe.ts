import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'initials' })
export class InitialsPipe implements PipeTransform {
  transform(value: string): string {
    if (value) {
      return value
        .match(/(^\S\S?|\s\S)?/g)
        .map((v) => v.trim())
        .join('')
        .match(/(^\S|\S$)?/g)
        .join('');
    }

    return 'N/A';
  }
}
