import { TodoState } from './todo.reducer';
import { FETCH_TODOS, ADD_TODO, EDIT_TODO, DELETE_TODO, TOGGLE_TODO, } from '../constants/index';
import { Action } from 'redux';
import { Todo } from '../components/todo/todo.interface';
import { TodoServices } from './../components/todo/todo.service';
export interface TodoState extends Array<Todo>{};

export const INITIAL_STATE:TodoState=[]

export const getNextId = (todos) =>{
    todos.reduce ((maxId,todo) => Math.max(todo.id, maxId),-1) + 1

}  



// export let getNextId:number=1;

export  function todoReducer(state: TodoState = INITIAL_STATE, action){


switch(action.type){  
    case FETCH_TODOS:
        // return [...state,
        //   TodoServices.displayTodo()
        // ];
        return action.payload;

    case ADD_TODO:
    // console.log('State',state);
    // console.log('Payload',action.payload);
    return [
         ...state,
            action.payload
    ]

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, text: action.text } :
          todo
      )

    case DELETE_TODO:
        return state.filter(todo => 
    todo.id!==action.id
    )
    
    case TOGGLE_TODO:
     
        return state.map(todo => {
           
            if(todo.id !==action.id)
            {
                return todo;
            }

            return {
                ...todo,
                completed: !todo.completed
            };
        })

    
    default:
    return state;
}
};