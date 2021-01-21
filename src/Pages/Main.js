import React from "react";
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Resume from "./Resume";
import PageNotFound from "./PageNotFound";
import Navbar from "../Components/Navbar"

const Main = () => {
  const [slide, setSlide] = React.useState(0)
  const [lastScrollY, setLastScrollY] = React.useState(0)

  React.useEffect(() => {
    const handleScroll = () => {
      // const { lastScrollY } = lastScrollY;
      const currentScrollY = window.scrollY;
      console.log(currentScrollY, lastScrollY, slide)
      if (currentScrollY > lastScrollY) {
        setSlide(-48);
      } else {
        console.log('asd')
        setSlide(0);
      }
      setLastScrollY(currentScrollY )
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <Navbar style={{
          transform: `translate(0, ${slide}px)`,
          transition: 'transform 90ms linear',
        }}/>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <About />}
          />
          <Route
            exact
            path="/portfolio"
            render={() => <Portfolio />}
          />
          <Route
            exact
            path="/resume"
            render={() => <Resume />}
          />
          <Route
            exact
            path="/404"
            render={() => <PageNotFound />}
          />
          <Route exact path="*">
            <Redirect to="/404" />
          </Route>
        </Switch>

      <div className="footer">
        <p>
          © Justin Chu 2020
        </p>
      </div>
    </BrowserRouter>
  );
}

export default Main;
