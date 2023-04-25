import React, { useLayoutEffect } from "react";
import { Route, Redirect, Switch, useLocation } from "react-router-dom";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Blog from "./Blog/Blog";
import PageNotFound from "./PageNotFound";
import Navbar from "../Components/Navbar";

const Main = () => {
  let location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <About />} />
        <Route exact path="/portfolio" render={() => <Portfolio />} />
        <Route exact path="/blog" render={() => <Blog />} />
        <Route exact path="/404" render={() => <PageNotFound />} />
        <Route exact path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>

      <div className="footer">
        <p>© Justin Chu 2023</p>
      </div>
    </>
  );
};

export default Main;
