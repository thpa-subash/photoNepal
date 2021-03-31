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
    'https://pixabay.com/api/?key=20927576-00711b1e848ff430be284c195&q=yellow+flowers&image_type=photo&pretty=true';
  constructor(public http: HttpClient) {}
  // https://jsonplaceholder.typicode.com/albums/1/photos
  getPhotos() {
    return this.http.get<Photos<Photo>>(this.apiUrl);
  }
}
