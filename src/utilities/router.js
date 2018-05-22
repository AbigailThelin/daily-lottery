import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/home';

export default (
        <Switch>
            <Route path='/' component={Home} exact/>
        </Switch>
)
