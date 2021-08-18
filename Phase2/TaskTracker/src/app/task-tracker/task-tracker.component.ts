import { Component, OnInit } from '@angular/core';
import { ToDoList } from '../model.class';
import { NgForm } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';



@Component({
  selector: 'app-task-tracker',
  templateUrl: './task-tracker.component.html',
  styleUrls: ['./task-tracker.component.css']
})
export class TaskTrackerComponent implements OnInit {

  isTableVisible: boolean = false;
  notVisibil:string="Show to do list";
  ToDoList:Array<ToDoList>=new Array();

constructor() { }

  ngOnInit(): void {
  }
  // addTask(taskRef:NgForm){}

  showTable() {
  if(this.isTableVisible == false){
  this.isTableVisible=true
  this.notVisibil="Hide to do list"
  }else{
    this.isTableVisible=false
    this.notVisibil="Show to do list"

  }
}

  AddToDo(empId:any,empName:any,empTask:any,empDeadline:any){
    let Empployeid =empId.value;
    let EmployeeName =empName.value;
    let task =empTask.value;
   let deadline =empDeadline.value;
    let x = new ToDoList(Empployeid,EmployeeName,task,deadline)
    this.ToDoList.push(x)
    alert("new task added")

  }

    }