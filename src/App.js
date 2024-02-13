import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import { PostList } from './features/posts/PostList'
import { AddNewPostForm } from './features/posts/AddNewPostForm'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddNewPostForm />
                <PostList />
              </React.Fragment>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
