import * as React from 'react';
import * as ReactDom from 'react-dom';
import App from './App';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Scopes } from './scopes/scopes';
import { About } from './About';
import { NotFound } from './common/components/not-found.component';
import { AddScope } from './scopes/add-scope.component';

ReactDom.render((
    <Router>
        <App>
            <Switch>
                <Route path='/scopes' component={Scopes} />
                <Route path='/add-new-scope' component={AddScope} />
                <Route path='/about' component={About} />
                <Route path='*' component={NotFound} />
            </Switch>
        </App>
    </Router>
), document.getElementById('app'));
