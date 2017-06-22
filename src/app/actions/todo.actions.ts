import { Injectable } from '@angular/core';
import { ADD_TODO, DELETE_TODO, EDIT_TODO } from '../constants/index';
import { Action } from 'redux';

import * as types from '../constants';

@Injectable()

export class TodoAction{

   addTodo(text){ return { type: types.ADD_TODO, text}}

   deleteTodo(id) { return { type: types.DELETE_TODO, id}}

}

export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text })
