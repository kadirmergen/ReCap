import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Colour } from '../models/colour';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColourService {
  apiUrl="https://localhost:44306/api/colours/getall"
  
  constructor(private httpClient:HttpClient) { }

  getColours():Observable<ListResponseModel<Colour>>{
    return this.httpClient.get<ListResponseModel<Colour>>(this.apiUrl)
  }
} 
