import * as actions from '../actions/index';

import type { Action } from '../actions/index';

export type AuthTokenState = boolean;

export function authToken(
  state = localStorage[`${process.env.PROJECT_ID}-idToken`] || null,
  action,
) {
  switch (action.type) {
    case actions.SET_TOKEN:
      return action.authToken;
    default:
      return state;
  }
}