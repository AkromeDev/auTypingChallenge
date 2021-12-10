import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  happyTrees = require('bob-ross-lipsum');
  randomText = this.happyTrees();
  result = 'blablaResult';

  constructor() { }

  ngOnInit(): void {
  }

}
