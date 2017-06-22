import { TodoState } from './todo.reducer';

// redux
import { combineReducers, Action } from 'redux';
// core
// import { counterReducer } from './counter.reducer';
import { todoReducer } from './todo.reducer';


export class IAppState {
  count?: number;
  todos?: TodoState;
  currentFillter?: 'SHOW_ALL';
};

export const rootReducer = combineReducers<IAppState>({

    // counter: combineReducers({
    //     count: counterReducer,
    // }),

    todos: combineReducers({
        todo: todoReducer,
    })
//   app: combineReducers({
//     timeouts: timeoutReducer,
//   }),
//   dashboard: combineReducers({
//     tiles: dashboardTilesReducer,
//     tilesContent: dashboardTilesContentReducer,
//     tilesDetails: dashboardTilesDetailsReducer,
//   }),
//   timeline: combineReducers({
//     timelineEvents: timelineEventsReducer,    
//     }),
//   sidebarLeft: combineReducers({
//     filterList: filterListReducer,
//     entitySummaryList: entitySummaryListReducer
//   }),
//   mainEntity: mainEntityReducer,
//   currentUser: currentUserReducer
});