import { Photos } from './../../models/photos';
import { Photo, Tags } from './../../models/photo';
import { PhotoService } from './../../services/photo.service';
import { Component, OnInit } from '@angular/core';
import { NzSelectSizeType } from 'ng-zorro-antd/select';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css'],
})
export class AddPhotoComponent implements OnInit {
  photosList: Photo[] = [];
  editPhoto: Photo = <any>{};
  // photoTags = <any>{};
  photoTags = <any>{};
  selectedTags = <any>[];
  defaultOption = [...this.selectedTags];
  validateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private msg: NzMessageService,
    private photo: PhotoService
  ) {
    this.getPhotos();
    this.validateForm = this.fb.group({
      tag: [''],
      user: [''],
      largeImageURL: [''],
    });
  }

  ngOnInit(): void {}
  loading = false;
  avatarUrl?: string;
  fileList: NzUploadFile[] = [];
  previewImage: string | undefined = '';
  previewVisible = false;
  size: NzSelectSizeType = 'default';
  listOfOption = [
    { label: 'subash', value: 'subash' },
    { label: 'thapa', value: 'subash1' },
  ];
  editId: string | null = null;

  uploadText(id: any) {
    console.log('add the text' + id);
    this.editId = id;
  }
  beforeUpload = (file: NzUploadFile, _fileList: NzUploadFile[]) => {
    return new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng =
        file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.msg.error('You can only upload JPG file!');
        observer.complete();
        return;
      }
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error('Image must smaller than 2MB!');
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });
  };
  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
    console.log(img);
  }
  handleChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
        });
        break;
      case 'error':
        this.msg.error('Network error');
        this.loading = false;

        break;
    }
  }
  getPhotos() {
    this.photo.getPhotos().subscribe((data) => {
      this.photosList = data.hits;
    });
  }
  photoDetails(id: number) {
    this.editPhoto = this.photosList.filter((n) => n.id == id)[0];
    const tagees = this.editPhoto.tags.split(',');
    this.selectedTags = tagees;
    this.photoTags = tagees.map((name) => ({ name }));
    console.log(this.editPhoto);

    console.log(this.selectedTags);
    console.log(this.photoTags);
  }
}
