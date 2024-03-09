import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istudent } from './shared/const/std';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // msgFromParent = `msg sent from parent to child`
  title = 'IO';
  msg = `work hard and party hard!!!`;
  msgFromChild !: string;
  skillsArray: Array<string> = ["html", "css"];
  @ViewChild('todo') todoRef ! : ElementRef;


  studentArray: Array<Istudent> = [
    {
      fname: 'jhon',
      lname: 'doe',
      email: 'jd@email.com',
      contact: 7868687343
    }
  ]

  constructor(){

  };
  ngOnInit(): void {
   
  };
  onAddStudent(fname:HTMLInputElement, lname:HTMLInputElement, email:HTMLInputElement, contact:HTMLInputElement){
    let obj: Istudent = {
      fname: fname.value,
      lname: lname.value,
      email: email.value,
      contact: +contact.value
    }
    console.log(obj);
    this.studentArray.push(obj)
    fname.value = '';
    lname.value = '';
    email.value = '';
    contact.value = '';
  }

  onAddSkills(skill: string){
  console.log(skill);
  this.skillsArray.push(skill)
  }
}
