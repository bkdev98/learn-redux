var redux = require('redux');

console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

//  Subcribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('New state', store.getState());

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="'+ state.map.url +'" target="_blank">View Your Location</a>'
  }
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());
store.dispatch(actions.changeName('Sung Hokage'));
store.dispatch(actions.addMovie('Dr Strange', 'Fiction'));
store.dispatch(actions.addHobby('Play games'));
store.dispatch(actions.addHobby('Vovinam'));
store.dispatch(actions.removeHobby(1));
store.dispatch(actions.changeName('Maru Rin'));
store.dispatch(actions.addMovie('BvS', 'Fiction'));
store.dispatch(actions.removeMovie(2));
