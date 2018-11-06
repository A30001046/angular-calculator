import { Component, OnInit } from '@angular/core';
import { Calculation } from '../calculation';
import { CALCULATIONS } from '../mock-calculations';
@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.css']
})
export class CalculationsComponent implements OnInit {
 
  calculations = CALCULATIONS;

  selectedCalculation: Calculation;
  onSelect(calculation: Calculation): void {
  this.selectedCalculation = calculation;
  }
  
  
  
  
  
  
  
  
  constructor() { }

  ngOnInit() {
  }

}

