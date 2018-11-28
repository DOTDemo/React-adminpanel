export const SET_TOKEN = 'SET_TOKEN';

export type SetTokenAction = {
    +type: 'SET_TOKEN',
    +authToken: string,
  };
  
  export const setToken = (authToken: string) => ({
    type: SET_TOKEN,
    authToken,
  });