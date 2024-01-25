import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../../models/listResponseModel';
import { CarService } from '../../services/car.service';
import { response } from 'express';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService:CarService) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.carService.getCarDetails().subscribe(response=>{
      this.cars=response.data
    });
  }
}
