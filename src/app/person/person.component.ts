import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DemoService} from '../services/service';
import {MaterializeAction} from 'angular2-materialize';

declare var Materialize: any;

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
public person: Object = {};
  constructor(private route: ActivatedRoute, private router: Router,private _demoService: DemoService) {
    this.route.params.subscribe(res =>{
     console.log(res.id);
     this._demoService.getPerson(res.id).subscribe(
       data => {
         console.log(data);
         this.person = data;
       },
       error => console.error(error),
       () => console.log('person complente')
     )
    });
  }

  ngOnInit() {

  }

  sendMeHome() {
    this.router.navigate(['']);
  }
}
