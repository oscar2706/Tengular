import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'susspended'
})
export class SusspendedPipe implements PipeTransform {

  transform (susspended: boolean): string {
    return susspended ? 'Suspendido' : null;
  }

}
