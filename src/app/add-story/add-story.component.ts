import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DataService} from "../services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.scss']
})
export class AddStoryComponent implements OnInit {
  storyForm!:FormGroup;

  constructor(private dataService: DataService, private router: Router) {
    this.storyForm = new FormGroup({
      'title':new FormControl(null,[Validators.required]),
      'description':new FormControl(null,[Validators.required]),
      'image':new FormControl(null,[Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  onMenuItem(url: string){
    this.router.navigateByUrl(url);
  }


  public onFileChanged(event: any) {
    if(event.target.files[0]){
      this.storyForm.controls['image'].setValue(event.target.files[0]);
    }
  }


  onSubmit(){

    const value = this.storyForm.value;

    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('file', value.image, value.image.name);
    const req = {
      "title": value.title,
      "description": value.description,
      "views": 0,
      "downloads": 0,
      "imagepath": "",
      id: 0
    }
    uploadImageData.append('story', JSON.stringify(req));
    this.dataService.saveStory(uploadImageData);
  }
}
