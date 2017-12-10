import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DemoService {

    constructor(private http: HttpClient) {
    }

    // NOTE: all API calls in this file use simple endpoints served by
    // an Express app in the file app.js in the repo root. See that file
    // for all back-end code.
    // Uses http.get() to load data from a single API endpoint
    getPeopleList() {
        return this.http.get('http://demopeople.exolever.com/api/consultants/');
    }

    // send a POST request to the API to update a data object
    addComment(params) {
        let body = JSON.stringify(params);
        return this.http.post('http://demopeople.exolever.com/api/comment/', params);
    }

    // send a DELETE request to the API to delete a data object
    getPerson(pk) {
        return this.http.get('http://demopeople.exolever.com/api/consultants/' + pk + '/');
    }

}