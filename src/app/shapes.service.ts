import { Injectable } from '@angular/core';
import { NumbersService } from './numbers.service';
import { Shape } from './shape';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShapesService {

  constructor(private numbersService: NumbersService) { }

  getSortedShapes(): Shape[] {
    this.numbersService.getNumbers().subscribe(data => {
      const numbers = data.trim().split(/\r?\n/).map(num => parseInt(num));
      return this.makeSortedShapes(numbers);
    });
  }

  makeSortedShapes(numbers:number[]): Shape[] {
    console.log(numbers);
    let shapeList:Shape[] = [];
    for (let i = 0; i < numbers.length; i++) {
      let shape:Shape = new Shape();
      shape.key = i;
      shape.type = i < 50 ? "Circle" : "Square";
      shape.crossdim = numbers[i];
      shape.area = this.calculateArea(i < 50? "Circle" : "Square", numbers[i]);
      shapeList = [...shapeList, shape];
    }
    return shapeList.sort((a, b) => b.area - a.area);;
  }

  calculateArea(type:string,crossdim:number):number {
    return type === "Circle"
      ? Math.PI * (crossdim / 2) ** 2
      : crossdim ** 2;
  }
}
