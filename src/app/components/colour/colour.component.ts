import { Component, OnInit } from '@angular/core';
import { Colour } from '../../models/colour';
import { ColourService } from '../../services/colour.service';
import { response } from 'express';

@Component({
  selector: 'app-colour',
  templateUrl: './colour.component.html',
  styleUrl: './colour.component.css'
})
export class ColourComponent implements OnInit{
   colours:Colour[]=[];
  
   constructor(private colourService:ColourService){}
  
   ngOnInit(): void {
    this.getColours();
  }

  getColours(){
    this.colourService.getColours().subscribe(response=>{
      this.colours=response.data
    });
  }
} 
