import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../_interfaces/question';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-Questionnaire',
  templateUrl: './Questionnaire.component.html'
})
export class QuestionnaireComponent implements OnInit {
  questionnaire: Question;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.questionnaire = data.questionnaire;
    });
  }
}
