import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'points'
})
export class PointsPipe implements PipeTransform {

  transform (points: number): any {
    return points > 0 ? points : null;
  }

}
