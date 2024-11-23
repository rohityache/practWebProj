import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true
})
export class TemperaturePipe implements PipeTransform {

  transform(value: string | number) {
    if(typeof value === 'string'){
      return value+' °F';                   
    }
    return value+' °C';
  }

}
