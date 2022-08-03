import { Pipe, PipeTransform } from '@angular/core';

import { Product } from 'src/app/models/product';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {
  transform(value: Product[], ...args: unknown[]): Product[] {
    return [];
  }
}
