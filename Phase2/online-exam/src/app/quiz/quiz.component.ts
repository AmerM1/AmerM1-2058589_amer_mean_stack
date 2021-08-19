import { Component, OnInit,inject } from '@angular/core';
import { FormBuilder, FormGroup,NgForm  } from '@angular/forms';
import { quiz } from '../exam-q.model';
import { ExamQService } from '../exam-q.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  examq:Array<quiz> = [];
  myForm:FormGroup;
  selectedAnswers:string[]=[]
  output:string = "";
  constructor(public form:FormBuilder, public questionSer:ExamQService) { 
    this.myForm = form.group({});
  }

  ngOnInit(): void {
        this.questionSer.QuestionBank().subscribe(data=> {
       for (let q of data) {
       this.myForm.addControl(q.question, this.form.control(''));
        this.examq.push(q);

      }
    });
  }

  reset(){
    this.selectedAnswers = [];
    this.output = "";
    window.location.reload();

  }
  submit() {
    Object.keys(this.myForm.value).forEach((key)=> this.selectedAnswers.push(this.myForm.value[key]));
    let quizGrade:number = 0;
    for(let i = 0; i < this.examq.length; i++) 
    {

      let Canswer=this.examq[i].correctAns;
      if(this.examq[i].ans1==Canswer){
        document.getElementById(this.examq[i].ans1)!.setAttribute('style', 'color:lightgreen');
        document.getElementById(this.examq[i].ans1)!.append(" Correct Answer");    }
      else if(this.examq[i].ans2==Canswer){
        document.getElementById(this.examq[i].ans2)!.setAttribute('style', 'color:lightgreen');
        document.getElementById(this.examq[i].ans2)!.append(" Correct Answer");    }
      else if(this.examq[i].ans3==Canswer){
        document.getElementById(this.examq[i].ans3)!.setAttribute('style', 'color:lightgreen');
        document.getElementById(this.examq[i].ans3)!.append(" Correct Answer");    }
        else if(this.examq[i].ans4==Canswer){
          document.getElementById(this.examq[i].ans4)!.setAttribute('style', 'color:lightgreen');
          document.getElementById(this.examq[i].ans4)!.append(" Correct Answer");

        }
      if(this.examq[i].correctAns == this.selectedAnswers[i])
      {
       
        quizGrade++;
  
      } else {
        let Wanswer=this.selectedAnswers[i];
        if(this.examq[i].ans1==Wanswer){
          document.getElementById(this.examq[i].ans1)!.setAttribute('style', 'color:red');
          document.getElementById(this.examq[i].ans1)!.append(" Your Answer is wrong");
        }
        else if(this.examq[i].ans2==Wanswer){
          document.getElementById(this.examq[i].ans2)!.setAttribute('style', 'color:red');
          document.getElementById(this.examq[i].ans2)!.append(" Your Answer is wrong");   }
        else if(this.examq[i].ans3==Wanswer){
          document.getElementById(this.examq[i].ans3)!.setAttribute('style', 'color:red');
          document.getElementById(this.examq[i].ans3)!.append(" Your Answer is wrong");   }
          else if(this.examq[i].ans4==Wanswer){
            document.getElementById(this.examq[i].ans4)!.setAttribute('style', 'color:red');
            document.getElementById(this.examq[i].ans4)!.append(" Your Answer is wrong");   }
      }
      this.myForm.disable()

    }
    this.output = "<h2>" + quizGrade + "/10 ";
    if(quizGrade < 7) {
      this.output += "You Failed.</h2>" 
    } else {
      this.output += "You Passed!</h2>"
    }
  
 }

  
  }