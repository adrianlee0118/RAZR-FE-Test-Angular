import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  
  @Input() sidelen: number;
  @Input() angle: number;

  constructor() { }

  ngOnInit(): void {
  }

}
