import React from 'react'
import {
    Container
  } from "@material-ui/core";

  import routes from '../routes'

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
          </Switch>
        </Suspense>
        </Container>
        </main>
    )
}

export default Content
