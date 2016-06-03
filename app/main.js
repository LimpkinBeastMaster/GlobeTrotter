import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';

let history = createBrowserHistory(); //makes it so /asdf instead of /#/asdf

// URL listener and render the application when it changes
ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById('app'));


//React Router bootstraps the routes from routes.js file, matches them against a URL, 
//and then executes the appropriate callback handler, which in this case means 
//rendering a React component into <div id="app"></div>