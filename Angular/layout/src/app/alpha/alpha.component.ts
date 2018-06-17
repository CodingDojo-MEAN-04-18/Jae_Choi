import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  alphaCompData = "AlphaComponent Data";
  
  constructor() { }

  ngOnInit() {
  }

}
