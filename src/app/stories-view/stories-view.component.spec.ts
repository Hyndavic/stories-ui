import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesViewComponent } from './stories-view.component';
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "../services/data.service";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('StoriesViewComponent', () => {
  let component: StoriesViewComponent;
  let fixture: ComponentFixture<StoriesViewComponent>;
  let dataService: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ StoriesViewComponent ],
      providers: [DataService],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    fixture = TestBed.createComponent(StoriesViewComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
