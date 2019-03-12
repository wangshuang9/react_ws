import React from "react";
import {Route,Switch,Redirect} from "react-router-dom"

class RouterMap extends React.Component{
    
    render(){
        const {Router} =this.props
        return <Switch>
            <Route path='/' exact render={()=> (
               <Redirect to='/home'/>
           )}/>
            {
                Router.length&&Router.map((val,ind)=>{
                    const Component=val.component;
                    if(Component){
                        return  <Route key={ind} path={val.path} render={(config)=>{
                            return (val.children?<Component routes={val.children} {...config}></Component>:<Component {...config}></Component>)
                        }}>
                        </Route>
                    }
                    return true;
                })
            }
        </Switch>
    }
}
export default RouterMap;