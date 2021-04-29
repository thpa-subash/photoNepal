import { Photos } from './../models/photos';
import { Photo } from './../models/photo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  apiUrl =
    'https://pixabay.com/api/?key=21335042-992c2d1f6f4940691aba03dd0&q=man+laptop&image_type=photo';
  constructor(public http: HttpClient) {}
  // https://jsonplaceholder.typicode.com/albums/1/photos
  getPhotos() {
    return this.http.get<Photos<Photo>>(this.apiUrl);
  }
}
