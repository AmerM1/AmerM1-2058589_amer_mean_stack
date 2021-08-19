import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { quiz } from './exam-q.model';
@Injectable({
  providedIn: 'root'
})
export class ExamQService {

  constructor(public http:HttpClient) { }


  QuestionBank():Observable<quiz[]> {
    return this.http.get<quiz[]>("/assets/quiz.json");
}

}
