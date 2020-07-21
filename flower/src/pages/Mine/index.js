import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import Mine from './mine'
import Setting from './setting'

class Category extends React.Component {
    render() {
        const { match } = this.props;
        const { path } = match;

        return (
            <div>
                <Route path={path + "/mine"} component={Mine} />
                <Route path={path + "/setting"} component={Setting} props={this.props} />
                <Redirect from={path} to={path + '/mine'} exact />
            </div>
        )
    }
}


export default Category;