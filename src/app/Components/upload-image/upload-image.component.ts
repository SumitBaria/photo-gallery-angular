import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  image;

  constructor(private http: HttpClient, private form: FormBuilder) { }

  ngOnInit(): void {
  }

  selectImage(event) {
    if(event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image = file;
    }
  }

  selectCaption(event) {
    const caption = event.target.value;
  }

  

}
