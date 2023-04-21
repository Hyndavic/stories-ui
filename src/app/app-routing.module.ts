import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StoriesViewComponent} from "./stories-view/stories-view.component";
import {AddStoryComponent} from "./add-story/add-story.component";
import {ViewportScroller} from "@angular/common";
import {ViewStoryComponent} from "./view-story/view-story.component";

const routes: Routes = [{
  path: '',
  component: StoriesViewComponent
},
  {
    path: 'add-story',
    component: AddStoryComponent
  },
  {
    path: 'view-story',
    component: ViewStoryComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
