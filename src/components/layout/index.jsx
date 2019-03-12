import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import RouterView from '../../router/index'
class Layout extends React.Component {
    render() {
        return <section className="content">
            <Router>
                <RouterView></RouterView>
            </Router>
        </section>
    }
}
export default Layout;