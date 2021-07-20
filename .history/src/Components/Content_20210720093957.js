import {
    Container
  } from "@material-ui/core";

import routes from '../routes'
import React, { Suspense } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  )

const Content = () => {
    return (
        <main className="h-100">
        <Container maxWidth="sm">
        <Suspense fallback={loading}>
          <Switch>
          {routes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                      <route.component {...props} />
                  )} />
              )
            })}
            <Redirect from ="/" to="Home" />
          </Switch>
        </Suspense>
        </Container>
        </main>
    )
}

export default  React.memo(Content)
