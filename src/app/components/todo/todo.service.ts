import { Http, Response } from "@angular/http";
import { Injectable } from '@angular/core';

@Injectable()
export class TodoServices {

    constructor(private http: Http) {

    }


    displayTodo() {
        return this.http.get('http://localhost:3000/todos')
            .map((res: Response) => res.json());

    }
}