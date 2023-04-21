import { Injectable } from '@angular/core';
import {BehaviorSubject, map, take} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {stories} from "../constants/default-data.constants";
import {Router} from "@angular/router";
import {Story} from "../modals/story.modal";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  hostUrl = 'http://localhost:8080/'
  getStoriesUrl = 'getStories'
  postStaticStories = 'saveStoriesToTest';
  saveStoryUrl = 'saveStory';
  updateStoryUrl = 'updateStory';
  currentStory!: Story;


  menuClick = new BehaviorSubject(false);

  constructor(private http: HttpClient, private router: Router) {
    this.getStories().subscribe((val: any)=>{
      if(val.length === 0){
        this.http.post(this.hostUrl + this.postStaticStories, stories).subscribe(val=>{
          console.log('static data created')
        })
      }
    })

  }

  getStories(){
    return this.http.get(this.hostUrl + this.getStoriesUrl)
  }

  saveStory(request: any){
    this.http.post(this.hostUrl + this.saveStoryUrl, request).subscribe(val=>{
    this.router.navigateByUrl('/');
    })
  }

  updateStory(request: any){
   return this.http.put(this.hostUrl + this.updateStoryUrl, request);
  }

}
