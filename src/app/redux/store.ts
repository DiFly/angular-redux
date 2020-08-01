  import { createStore } from 'redux';
  import mathApp from './reducers';

  const store = createStore(mathApp);
  // const store = createStore(mathApp, something.state_from_server);

//console.log(store.getState());

export default store;