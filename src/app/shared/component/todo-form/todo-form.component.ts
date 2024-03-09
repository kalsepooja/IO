import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
@ViewChild('todo') todo!: ElementRef;
@Output() todoEmmiter: EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  };

  addSkills(){
    let ref = this.todo.nativeElement
    if(ref.value){
      this.todoEmmiter.emit(ref.value)
      ref.value = '';
     
    }
    
  }

}
