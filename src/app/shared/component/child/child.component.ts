import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
 @Input() msgFromParent!: string;
 msg: string = `yes i will study hard!!!`;
 @Output() msgToParent  : EventEmitter<string> = new EventEmitter<string>();
 msgFromChild !: string;
  constructor() { }

  ngOnInit(): void {
    // this.msgToParent.emit(this.msg)
    
  }

  sendMsgToParent(){
    this.msgToParent.emit(this.msg)
    this.msgFromChild
  }

}
