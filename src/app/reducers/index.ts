import { state } from '@angular/core';
import { voteAngular, voteReact, voteVueJs } from './../actions/index';
import { Action } from 'redux';

export const initialState = {
    angular: 0,
    react: 0,
    vuejs: 0
}

export default (state = initialState, action: Action) => {
    switch (action.type) {
        case 'VOTE_ANGULAR':
            return {angular: state.angular+1};
        case 'VOTE_REACT':
            return {react: state.react+1};
        case 'VOTE_VUEJS':
            return {vuejs: state.vuejs+1};    
        default:
            return state;

    }

}
