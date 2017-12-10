import { Component, OnInit } from '@angular/core';
import {DemoService} from '../services/service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public people;
  public limitedpeople: Array<Object>= [];
  public peoplelist: Array<Object>= [];
  loading = false;
  total = 0;
  pages= 0;
  page = 1;
  limit = 5;
  constructor(private _demoService: DemoService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.getPeople();
    }

  getPeopleList(limit, page, totalobj, arr){
    this.limitedpeople = [];
    this.peoplelist = [];
    const min = ((limit * page) - limit) + 1;

    let max = limit * page ;
    if (max > totalobj) {
      max = totalobj;
    }
    arr.forEach(element => {
      if(min <= element.id && element.id < max){
        this.limitedpeople.push(element);
      }
    });
    this.peoplelist = this.limitedpeople;
  }
  pickUser(ev){
    this.router.navigate(['person/' + ev]);
  }
  getPeople(){
    this.loading = true;
    this._demoService.getPeopleList().subscribe(
      // the first argument is a function which runs on success
      data => { this.people = data;
        this.total = this.people.length;
        this.pages = this.total / this.page;
        this.getPeopleList(this.limit, this.page, this.pages, this.people);
      },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => {
        this.loading = false; 
        console.log('done loading people')
    }
    );
  }
  goToPage(n: number): void {
    this.page = n;
    this.getPeopleList(this.limit, this.page, this.pages, this.people);
  }

  onNext(): void {
    this.page++;
    this.getPeopleList(this.limit, this.page, this.pages, this.people);
  }

  onPrev(): void {
    this.page--;
    this.getPeopleList(this.limit, this.page, this.pages, this.people);
  }
  }

