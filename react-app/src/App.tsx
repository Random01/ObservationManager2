import * as React from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Header } from './Header';

export default class App extends React.Component {

  public render() {
    return (
      <div>
        <CssBaseline />
        <Header />
        <div>
          <ul>
            <li><Link to='/scopes'>Scopes</Link></li>
            <li><Link to='/add-new-scope'>Add New Scope</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
