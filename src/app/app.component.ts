import { Component, OnInit } from '@angular/core';
import { ShapesService } from './shapes.service';
import { Shape } from './shape';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  shapes:Shape[] = [];
  angle:number = 0;

  constructor(private shapesService: ShapesService) {
  }

  ngOnInit(): void {
    this.shapes = this.shapesService.getSortedShapes();
    this.spin();
  }

  spin(): void {
    setInterval(() => { 
      this.angle = this.angle === 89? 0 : this.angle + 1 
    }, 50);
  }
}
