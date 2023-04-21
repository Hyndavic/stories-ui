import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStoryComponent } from './add-story.component';
import {DataService} from "../services/data.service";
import {of} from "rxjs";
import {HttpClientModule} from "@angular/common/http";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('AddStoryComponent', () => {
  let component: AddStoryComponent;
  let fixture: ComponentFixture<AddStoryComponent>;
  let dataService: DataService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ AddStoryComponent ],
      providers: [DataService],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    dataService = TestBed.inject(DataService);
    fixture = TestBed.createComponent(AddStoryComponent);
    component = fixture.componentInstance;
    spyOn(dataService, "saveStory");
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
