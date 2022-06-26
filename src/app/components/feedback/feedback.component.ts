import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // var feedbacks;

    // let name = document.getElementById('name');
    // let address = document.getElementById('address');
    // let email = document.getElementById('email');
    // let city = document.getElementById('city');
    // let gender = document.getElementById('gender');
    // let feedback = document.getElementById('feedback');

    // function saveFeedback(feedback) {
    //   feedbacks = JSON.parse(localStorage.getItem('feedbacks'));
    //   if (!feedbacks) feedbacks = [];
    //   feedbacks.push(feedback);
    //   localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
    // }

    // function sendFeedback() {
    //   const feedbackObj = {
    //     name: name.value,
    //     address: address.value,
    //     email: email.value,
    //     city: city.value,
    //     gender: gender.value,
    //     feedback: feedback.value,
    //   };
    //   saveFeedback(feedbackObj);
    //   resetFeedback();
    //   setTimeout(() => {
    //     alert('Feedback Submited!');
    //   }, 10);
    // }

    // function resetFeedback() {
    //   name.value = '';
    //   address.value = '';
    //   email.value = '';
    //   city.value = '';
    //   gender.value = '';
    //   feedback.value = '';
    // }
  }

}
