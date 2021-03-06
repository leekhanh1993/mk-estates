import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Product from '../Product/Product';
import ManageProject from '../Project/ManageProject';
import ManageProduct from '../Product/ManageProduct';
import EditProduct from '../Product/EditProduct';
import HomePage from '../Homepage/HomePage';
import DetailPages from '../DetailPages/DetailPages';
import Contact from '../Contact/Contact';


class RouterUrl extends Component {
    render() {
        var {idCurrentUser} = this.props;
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/product" component={Product} />
                    <Route path="/manageproduct" component={()=> <ManageProduct idCurrentUser={idCurrentUser}/>}/>
                    <Route path="/manageproject" component={ManageProject} />
                    <Route path="/edit/:_id" component={EditProduct} />
                    <Route path="/home" component={HomePage}/>
                    <Route path="/detail/:_id" component={DetailPages}/>
                    <Route path="/contact" component={Contact}/>
                    <Route component={HomePage}/>   
                </Switch>
            </div>
        );
    }
}

export default RouterUrl;