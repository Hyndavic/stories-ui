import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";
import {Story} from "../modals/story.modal";
import {ExportAsConfig, ExportAsService} from "ngx-export-as";
import {HttpClient} from "@angular/common/http";
// @ts-ignore
import { Chart } from "chart.js";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-story',
  templateUrl: './view-story.component.html',
  styleUrls: ['./view-story.component.scss']
})
export class ViewStoryComponent {
  story: Story;
  base64 = 'data:image/png;base64,'
  isModal = false;
  exportAsConfig: ExportAsConfig = {
    type: 'png', // the type you want to download
    elementIdOrContent: 'story', // the id of html/table element
  }
  constructor(private router: Router, private dataService: DataService,private exportAsService: ExportAsService) {
    this.story = this.dataService.currentStory;
    const req = JSON.parse(JSON.stringify(this.story));
    req.views = req.views + 1;
    this.dataService.updateStory(req).subscribe(val=>{
    })
  }

  onMenuItem(url: string){
    this.router.navigateByUrl(url);
  }

  public chart: Chart;
  viewChart() {
    this.chart = new Chart("canvas", {
      type: "bar",
      data: {
        labels: ["Views", "Download"],
        datasets: [
          {
            label: "# of Stories",
            data: [this.story.views + 1, this.story.downloads],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }



  export() {
    // download the file using old school javascript method
    this.exportAsService.save(this.exportAsConfig, this.story.title).subscribe(() => {
      // save started
      console.log('saved')
      const req = JSON.parse(JSON.stringify(this.story));
      req.downloads = req.downloads + 1;
      this.dataService.updateStory(req).subscribe(val=>{
        this.story.downloads = this.story.downloads+1;
      })
    });

  }


}
