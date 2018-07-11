import React, { Component } from 'react';
import base from './base';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';

import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      topOfNav: '',
      logoClass: '',
      quote:
        'Computers are useless.  They can only give you answers. -Pablo Picasso',
      name: '',
      email: '',
      company: '',
      details: '',
      test: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fixedNav = this.fixedNav.bind(this);

    this.handleParallax = this.handleParallax.bind(this);
    this.logoWarp = this.logoWarp.bind(this);
    this.changeQuotes = this.changeQuotes.bind(this);
    this.popUp = this.popUp.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const test = this.state.test;
    const timestamp = Date.now();
    test[timestamp] = {
      name: this.state.name,
      email: this.state.email,
      company: this.state.company,
      details: this.state.details
    };

    this.setState({
      test: test,
      name: '',
      email: '',
      company: '',
      details: ''
    });
  }
  fixedNav() {
    const nav = this.refs.main;

    if (window.scrollY >= this.state.topOfNav) {
      document.body.style.paddingTop = nav.offsetHeight + 'px';
      document.body.classList.add('fixed-nav');
    } else {
      document.body.classList.remove('fixed-nav');
      document.body.style.paddingTop = 0;
    }
  }

  logoWarp() {
    const logo = document.querySelector('.z-logo');

    function addWarpClass() {
      if (logo) {
        logo.classList.toggle('z-logo-warp');
      }
    }
    setInterval(addWarpClass, 4000);
  }

  handleParallax() {
    const suffix = 'px';
    // const nav = document.querySelector('.App');
    let scrollDistance = window.pageYOffset;
    let translate = scrollDistance / 4;
    document.documentElement.style.setProperty(
      '--translate',
      translate + suffix
    );
  }
  changeQuotes() {
    const quotes = [
      'Computers are useless.  They can only give you answers. -Pablo Picasso',
      'Hardware: The parts of a computer system that can be kicked.  -Jeff Pesis',
      'If the automobile had followed the same development cycle as the computer, a Rolls-Royce would today cost $100, get a million miles per gallon, and explode once a year, killing everyone inside.  -Robert X. Cringely',
      'Microsoft has a new version out,Windows XP, which according to everybody is the ‘most reliable Windows ever.‘ To me, this is like saying that asparagus is ‘the most articulate vegetable ever. -Dave Barry',
      'Controlling complexity is the essence of computer programming. -Brian Kernigan',
      'There are two ways of constructing a software design.  One way is to make it so simple that there are obviously no deficiencies. And the other way is to make it so complicated that there are no obvious deficiencies. -C.A.R. Hoare',
      'Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter. -Eric Raymond',
      'To iterate is human, to recurse divine. -L. Peter Deutsch',
      '“If debugging is the process of removing bugs, then programming must be the process of putting them in. -Edsger W. Dijkstra',
      '“640K ought to be enough for anybody. -Bill Gates, 1981'
    ];
    const whichQuote = Math.floor(Math.random() * quotes.length);

    const quote = quotes[whichQuote];
    const quoteClass = document.querySelector('.quote');
    if (quoteClass) {
      quoteClass.classList.add('quote-transition');
      setTimeout(
        function() {
          this.setState({ quote });
        }.bind(this),
        600
      );

      setTimeout(function() {
        quoteClass.classList.remove('quote-transition');
      }, 1000);
    }
  }

  popUp(i) {
    const image = document.querySelectorAll('.portfolio-piece-container');

    const description = document.querySelectorAll('.project-description');

    const width = window.matchMedia('(max-width: 500px)');

    i = description.length - 1 - i;
    if (!width.matches) {
      setTimeout(function() {
        image[i].scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }, 200);
    }

    image[i].classList.toggle('expand');
    description[i].classList.toggle('show');
  }

  componentDidMount() {
    //setTimeout(this.logoSlideIn, 500);
    setTimeout(
      () =>
        this.setState({
          logoClass: 'z-logo-reveal'
        }),
      500
    );
    setInterval(this.changeQuotes, 6000);

    const nav = document.querySelector('#main');
    const topOfNav = nav.offsetTop;
    this.setState({
      topOfNav
    });

    base.syncState('test', {
      context: this,
      state: 'test'
    });
  }
  render() {
    window.addEventListener('load', this.logoWarp);
    window.addEventListener('scroll', this.handleParallax);
    window.addEventListener('scroll', this.fixedNav);
    return (
      <div className="App">
        <header>
          <div className="parallax-box">
            <div className="header-box">
              <span className={`z-logo ${this.state.logoClass}`} ref="logo">
                {' '}
              </span>
            </div>
          </div>
        </header>

        <nav id="main" ref="main">
          <ul>
            <li className="logo">
              <a href="#">
                <div className="z-logo-small" />
              </a>
            </li>
            <Link className="navs" to="/">
              <li className="">Home</li>
            </Link>

            <Link className="navs" to="/portfolio">
              <li className="">Portfolio</li>
            </Link>
            <Link className="navs" to="/contact">
              <li className="">Contact</li>
            </Link>
          </ul>
        </nav>

        <div className="site-wrap">
          <main>
            <Switch>
              <Route
                exact
                path="/"
                render={props => <Home quote={this.state.quote} />}
              />
              <Route exact path="/about" render={props => <About />} />
              <Route
                exact
                path="/portfolio"
                render={props => <Portfolio popUp={this.popUp} />}
              />
              <Route
                exact
                path="/contact"
                render={props => (
                  <Contact
                    name={this.state.name}
                    email={this.state.email}
                    company={this.state.company}
                    details={this.state.details}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                  />
                )}
              />
            </Switch>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
