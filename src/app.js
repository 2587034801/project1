
require("./styles/app.scss")
/////////////////////
var React = require("react")
var ReactDOM = require('react-dom')
import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router'
import RootComponent from './scripts/components/RootComponent'
import IndexComponent from './scripts/components/IndexComponent'
import ListComponent from './scripts/components/ListComponent'
import DetailComponent from './scripts/components/DetailComponent'

ReactDOM.render(


    <Router history={hashHistory}>
        <Route path="/" component={RootComponent}>
            <IndexRoute component={IndexComponent}/>
            <Route path="/index" component={IndexComponent}></Route>
            <Route path="/list" component={ListComponent}></Route>
            <Route path="/detail" component={DetailComponent}></Route>
            <Route path="*" component={IndexComponent}></Route>

        </Route>
    </Router>
      ,document.getElementById("app"))