import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  @ViewChild('feedbackForm') feedbackForm: NgForm;
  message

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() { }

  sendFeedback() {
    this.dataService.sendFeedback(this.feedbackForm.form.value).subscribe((response: any) => {
      this.feedbackForm.reset();
      this.message = 'Feedback submitted successfully'
    });
  }

  resetFeedback() {
    this.feedbackForm.reset();
  }
}
