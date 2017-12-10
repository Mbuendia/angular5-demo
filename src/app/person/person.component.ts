import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DemoService} from '../services/service';
import {MaterializeAction} from 'angular2-materialize';
import * as moment from 'moment';

declare var Materialize: any;

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  
  actions = new EventEmitter<string|MaterializeAction>();
public person: Object = {};
public comments: Array<any> = [];
newcomment="";
  constructor(private route: ActivatedRoute, private router: Router,private _demoService: DemoService) {
    this.route.params.subscribe(res =>{
     console.log(res.id);
     this._demoService.getPerson(res.id).subscribe(
       data => {
         this.person = data;
         this.comments =   this.getLastComments(data['comments']);
       },
       error => console.error(error),
       () => console.log('person complente')
     )
    });
  }
  openModal() {
    this.actions.emit({action:"modal",params:['open']});
  }
  changevalue(key){
      this.newcomment+=key.target.value;
  }
  getLastComments(comments:Array<Object>){
    let lasttree= [];
    var i = comments.length;
    while (i--) {
      if(i>=(comments.length-3)){
        lasttree.push(comments[i])
      }
    };
    return lasttree;
  }
  
  addComment(person, newcomment){
    const params= {
      "subject":  person.full_name+ ' new commment',
      "body": this.newcomment,
      "status": 'N',
      "rating": 0,
      "user": person.short_name,
      "consultant": person.id
  }
    this._demoService.addComment(params).subscribe(
      data => {
        this.comments.push(data)
      },
      error => console.error(error),
      () => console.log('coment added')
    )
   
  }
  ngOnInit() {

  }

  sendMeHome() {
    this.router.navigate(['']);
  }
}
