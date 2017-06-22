
import { getNextId } from './../../store/todo.reducer';
import { Action } from 'redux';
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, FETCH_TODOS, EDIT_TODO } from './../../constants/index';
import { Todo } from './todo.interface';
import { rootReducer, IAppState } from './../../store/index';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { TodoAction } from './../../actions/todo.actions';
import { Component, Inject, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { AsyncPipe } from '@angular/common';



@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  isCompleted: boolean = false;
  todos$: {};
  id: number = 1;
  todo: string = '';
  input: string;
  display: any;
  totalTodos: number;

  constructor(private ngRedux: NgRedux<IAppState>, private http: Http) {
    this.input = 'input';
  }

  ngOnInit() {
    this.display = this.displayTodo();
  }

     displayTodo() {
    this.http.get('http://172.17.2.162:3000/todos')
      .map((res: Response) => res.json())
      .subscribe((res) => {
        console.log('FETCH_TODOS',res);
        this.ngRedux.dispatch({
          type: 'FETCH_TODOS',
          payload: res
        });
         this.todos$=res;
         this.totalTodos=res.length;
      });
  }

   addTodo(todo) {
    if (this.todo && this.todo.length > 0) {
      this.http.post('http://172.17.2.162:3000/todos', { id: getNextId, text: todo, completed: this.isCompleted }).map((res: Response) => res.json())
        .subscribe((res) => {
          console.log('TEST', res);
          this.ngRedux.dispatch({
            type: 'ADD_TODO',
            paylod: res
          });
          this.todo = '';
          this.displayTodo();
        });
    }
  }

  editTodo(todo){
  console.log(todo);
  this.todo=todo.text;
 this.http.put('http://172.17.2.162:3000/todos/' + todo.id, { id: todo.id, text: todo.text, completed: todo.completed }).map((res: Response) => res.json())
      .subscribe(res => {
        if(todo && todo.id>=0)
        {
        console.log('ResponsefromEdit', res);
        this.ngRedux.dispatch({
          type: 'EDIT_TODO',
          payload: res
        });
        this.displayTodo();
        }
      });

  }

  deleteTodo(id: number) {
    console.log(id);
    this.http.delete('http://172.17.2.162:3000/todos/' + id).map((res: Response) => res.json())
      .subscribe((res) => {
        console.log('Delete', res);
        this.ngRedux.dispatch({ type: 'DELETE_TODO', payload: res });
        this.displayTodo();
      });

  }

  toggleTodo(todo) {
    console.log('update', todo.id);
    this.http.put('http://172.17.2.162:3000/todos/' + todo.id, { id: todo.id, text: todo.text, completed: !todo.completed }).map((res: Response) => res.json())
      .subscribe(res => {
        if(todo && todo.id>=0)
        {
        console.log('ResponsefromToggle', res);
        this.ngRedux.dispatch({
          type: 'TOGGLE_TODO',
          payload: res
        });
        this.displayTodo();
        }
      });
  }
}
