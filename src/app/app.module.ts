import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainContentComponent } from './main-content/main-content.component';
import { StoriesViewComponent } from './stories-view/stories-view.component';
import { StoryCardComponent } from './story-card/story-card.component';
import {HttpClientModule} from "@angular/common/http";
import { AddStoryComponent } from './add-story/add-story.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ViewStoryComponent } from './view-story/view-story.component';
import {ExportAsModule} from "ngx-export-as";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainContentComponent,
    StoriesViewComponent,
    StoryCardComponent,
    AddStoryComponent,
    ViewStoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ExportAsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
