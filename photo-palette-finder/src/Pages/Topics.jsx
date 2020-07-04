import React from "react";
import Topic from "./Topic";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";

export default function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <LinkContainer to={`${match.url}/components`}>
            <Button>Components</Button>
          </LinkContainer>
        </li>
        <li>
          <LinkContainer to={`${match.url}/props-v-state`}>
            <Button>Props v. State</Button>
          </LinkContainer>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}
