import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import FullPost from './FullPost/FullPost';
class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink to="/" exact>Home</NavLink></li>
              <li><NavLink to={{
                pathname: "/new-post",
                hash: '#submit',
                search: '?quick-search=true'
              }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <Posts />} />
        <Route path="/" render={() => <h1>This is Routing</h1>} /> */}
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/new-post" component={NewPost} />
          <Redirect from="/new" to="/"/>
          <Route path="/:id" exact component={FullPost} />
          <Route render={()=><h1>Page Not Found</h1>}/>
        </Switch>
      </div>
    );
  }
}

export default Blog;