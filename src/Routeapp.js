import React, { Component } from 'react'
import { HashRouter,Route,Redirect,Switch} from 'react-router-dom'
import Static from './Static'
import { Suspense } from 'react'
const Classify =React.lazy(()=>import('./Classify'))
const Dynamic =React.lazy(()=>import('./Dynamic'))
const Uploadfile=React.lazy(()=> import('./Uploadfile'))
const TestPage1 =React.lazy(()=>import('./TestPage1'))
export default class Routeapp extends Component {
  render() {
    return (
      <div>
            <HashRouter>
              <Suspense fallback={<div>loading</div>}>
                <Switch>
                    <Route path="/Staticanalysis" component={Static}/>
                    <Route path="/Classifyanalysis" component={Classify}/>
                    <Route path="/Dynamicanalysis" component={Dynamic}/>
                    <Route path="/Upload" component={Uploadfile}/>
                    <Route path="/Testinfo" component={TestPage1}/>
                    <Redirect form="/" to="/Staticanalysis"/>
                </Switch>
               </Suspense>
            </HashRouter>
      </div>
    )
  }
}
