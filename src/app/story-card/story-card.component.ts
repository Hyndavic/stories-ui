import {Component, Input, OnInit} from '@angular/core';
import {Story} from "../modals/story.modal";
import {Router} from "@angular/router";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.scss']
})
export class StoryCardComponent implements OnInit {
  @Input() story!: Story;
  hostUrl = 'http://localhost:8080/generated-images/'
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
  }

  getDescription(story: Story){
    return story?.description ?  (story?.description.length<=100 ? story?.description : story?.description.substring(0,100)+'...') : '';
  }

  viewStory(story: Story){
    this.dataService.currentStory = story;
    this.router.navigateByUrl('view-story');
  }
}
