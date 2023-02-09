import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/mainComponent';
// import { ConfigureStore } from './store/configureStore';
// import { Provider } from 'react-redux';

// const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      // <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      // </Provider> 
      
      
    );
  }
  
}

export default App;
