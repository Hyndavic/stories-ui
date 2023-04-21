import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {Story} from "../modals/story.modal";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-stories-view',
  templateUrl: './stories-view.component.html',
  styleUrls: ['./stories-view.component.scss']
})
export class StoriesViewComponent implements OnInit {

  stories: Story[] =[];
  constructor(private dataService: DataService, private router: Router) { }
  onMenuItem(url: string){
    this.router.navigateByUrl(url);
  }
  ngOnInit(): void {
    this.dataService.getStories().subscribe((val: any)=>{
      this.stories = val;
    })
  }

}
