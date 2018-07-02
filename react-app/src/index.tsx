import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import Scopes from './scopes/scopes';
import { About } from './About';
import { NotFound } from './common/components/not-found.component';
import AddScope from './scopes/add-scope.component';
import EditScope from './scopes/edit-scope.component';
import { Home } from './Home';

import store from './stores/store';

ReactDom.render((
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/scopes/:scopeId' component={EditScope} />
                    <Route path='/scopes' component={Scopes} />
                    <Route path='/add-new-scope' component={AddScope} />
                    <Route path='/about' component={About} />
                    <Route path='*' component={NotFound} />
                </Switch>
            </App>
        </Router>
    </Provider>
), document.getElementById('app'));
