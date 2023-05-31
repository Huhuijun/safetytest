import React, { Component } from 'react'
import { HashRouter,Route,Redirect,Switch} from 'react-router-dom'
import Classify from './Classify'
import Dynamic from './Dynamic'
import Static from './Static'
import Uploadfile from './Uploadfile'
import TestPage1 from './TestPage1'
export default class Routeapp extends Component {
  render() {
    return (
      <div>
            <HashRouter>
                <Switch>
                    <Route path="/Staticanalysis" component={Static}/>
                    <Route path="/Classifyanalysis" component={Classify}/>
                    <Route path="/Dynamicanalysis" component={Dynamic}/>
                    <Route path="/Upload" component={Uploadfile}/>
                    <Route path="/Testinfo" component={TestPage1}/>
                    <Redirect form="/" to="/Staticanalysis"/>
                </Switch>
               
            </HashRouter>
      </div>
    )
  }
}
