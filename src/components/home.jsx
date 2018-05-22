import * as React from 'react';

import SideBar from './sideBar';
export default class Home extends React.Component{
    render(){
        return(
            <div className="home">
            <SideBar/>
                <h1>home</h1>
            </div>
        )
    }
}