import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export class Header extends React.PureComponent {
    public render() {
        return (
            <div>
                <AppBar position='static' color='default'>
                    <Toolbar>
                        <IconButton color='inherit' aria-label='Menu'>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant='title' color='inherit'>
                            OM
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

