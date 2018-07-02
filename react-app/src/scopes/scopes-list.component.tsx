import * as React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';

import { Link } from 'react-router-dom';

import Scope from '../common/models/equipment/scope.model';

export interface ScopesListProps {
    scopes: Scope[];
}

export class ScopesList extends React.Component<ScopesListProps> {

    public render() {
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Model</TableCell>
                            <TableCell numeric>Aperture (mm)</TableCell>
                            <TableCell numeric>Focal Length (mm)</TableCell>
                            <TableCell>Vendor</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.scopes.map(scope => {
                            return (
                                <TableRow key={scope.id}>
                                    <TableCell
                                        component='th'
                                        scope='row'>
                                        <Link to={`/scopes/${scope.id}`}>
                                            {scope.model}
                                        </Link>
                                    </TableCell>
                                    <TableCell numeric>{scope.aperture}</TableCell>
                                    <TableCell numeric>{scope.focalLength}</TableCell>
                                    <TableCell>{scope.vendor}</TableCell>
                                    <TableCell>
                                        <IconButton aria-label='Delete'>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}
