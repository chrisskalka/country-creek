import { Component, OnInit } from '@angular/core';
import { Question } from './faq.model';
import { FaqService } from './faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  questions: Question[] = [];

  constructor(private faqSvc: FaqService) { }
  ngOnInit(): void {
    this.getQuestions();
  }



  getQuestions() {
    this.faqSvc.getFaqs().subscribe(resp => {
      this.questions = [];
      resp.forEach(faq => {
        var newQuestion = new Question();
        newQuestion.question = faq.Question;
        newQuestion.answer = faq.Answer;
        newQuestion.id = faq.Id;
        this.questions.push(newQuestion);
      });

    })
  }
}
