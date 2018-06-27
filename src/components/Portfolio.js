import React from 'react';
import PortfolioPiece from './PortfolioPiece';
import SetListApp from '../SetListApp.png';
import whiskey from '../whiskey.png';
import ImageViewer from '../ImageViewer.png';
import colorpicker from '../colorpicker.png';
import Clock from '../Clock.png';
import FlexPanelVertical from '../FlexPanelVertical.png';
import TicTacToe from '../TicTacToe.png';
import Euler from '../Euler.png';
import Dumphreys from '../Dumphreys.png';
import tipCounter from '../images/tipCounter.png';
import BMI from '../BMI.png';
import Todo from '../Todo.png';
import TMG from '../TMG.png';
import tnpark from '../images/tn-park.png';
import roadTrip from '../images/roadTrip.png';
import bitcoin from '../images/bitcoin.png';
import reduxTodo from '../images/redux-todo1.png';
import calculator from '../images/calculator.png';
import weather from '../images/weather.png';
class Portfolio extends React.Component {
  render() {
    return (
      <div className="portfolio-container">
        <PortfolioPiece
          title="Redux Weather App"
          image={weather}
          description={
            <div>
              <h2>Redux Weather App</h2>
              <p>
                This is a React/Redux weather app that takes data from the Open
                Weather Map API 5-Day Forecast. I used Axios and Redux-Thunk to
                make the API calls. I did a lot of work to compile the data from
                the 5 day forcast, which gives you data for every three hours
                for the next five days, into a data useable for the app. More
                about this on my GitHub page.
                <br />
                <strong>Technology Used:</strong> React, Redux, Axios,
                Redux-Thunk, lodash
              </p>

              <br />
              <a
                href="https://redux-weather-app-55a8d.firebaseapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here For Demo!
              </a>
              <br />
              <a
                href="https://github.com/zachandblue/redux-weather-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <small>GitHub Repo</small>
              </a>
            </div>
          }
          popUp={() => this.props.popUp('18')}
          key="18"
        />
        <PortfolioPiece
          title="React Calculator"
          image={calculator}
          description={
            <div>
              <h2>React Calculator</h2>
              <p>
                This is a clone of the iPhone calculator using React and Styled
                Components. I tried to cover every edge case so that it would
                function the same as the iPhone calculator, and there are a
                surprising amout of things to consider. It may not be the most
                elegant solution, but I tried to solve this challenge without
                looking at code for any other calculators for help.
                <br />
                <strong>Technology Used:</strong> React, Styled Components
              </p>

              <br />
              <a
                href="https://react-calculator-ba2cc.firebaseapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here For Demo!
              </a>
              <br />
              <a
                href="https://github.com/zachandblue/React-Calculator"
                target="_blank"
                rel="noopener noreferrer"
              >
                <small>GitHub Repo</small>
              </a>
            </div>
          }
          popUp={() => this.props.popUp('17')}
          key="17"
        />
        <PortfolioPiece
          title="Redux Todo List"
          image={reduxTodo}
          description={
            <div>
              <h2>Redux Todo List</h2>
              <p>
                Todo list built with React and Redux. I used React CSS
                Transition Group to for animations and node-uuid to generate
                unique IDs for each item.
                <br />
                <strong>Technology Used:</strong> React, Redux, CSS Transition
                Group
              </p>

              <br />
              <a
                href="https://what-to-do-redux.firebaseapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here For Demo!
              </a>
              <br />
              <a
                href="https://github.com/zachandblue/Redux-Todo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <small>GitHub Repo</small>
              </a>
            </div>
          }
          popUp={() => this.props.popUp('16')}
          key="16"
        />
        <PortfolioPiece
          title="Cash To Bitcoin"
          image={bitcoin}
          description={
            <div>
              <h2>Cash to Bitcoin</h2>
              <p>
                I used a purely Test Driven Developemnt approach using
                Jest/Enzyme to create this React app. It uses Axios to make an
                API call in order to retrieve the current bitcoin exchange rate.
                When the user enters in a US dollar amount, the bitcoin
                equivalent is put into the coin glass. I used Axios Mock Adapter
                to test the API call.
                <br />
                <strong>Technology Used:</strong> React, Axios, Jest, Enzyme,
                Axios Mock Adapter, CoinDesk API
              </p>

              <br />
              <a
                href="https://bitcoin-converter-app.firebaseapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here For Demo!
              </a>
              <br />
              <a
                href="https://github.com/zachandblue/Bitcoin-Converter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <small>GitHub Repo</small>
              </a>
            </div>
          }
          popUp={() => this.props.popUp('15')}
          key="15"
        />
        <PortfolioPiece
          title="Road Trip Helper"
          image={roadTrip}
          description={
            <div>
              <h2>Road Trip Helper</h2>
              <p>
                React app integrated with a Node.js/Express/MongoDB back end. It
                pulls the user's location and returns a list of nearby roadside
                attractions.
                <br />
                All of the data is pulled from the server using the Fetch API
                and Axios requests (I used both for fun). <br />
                The back end integrates with the Google Maps API to autocomplete
                the location and GPS coordinates, storing them in the exact
                schema needed for mongoDB's "near" feature. It also
                automatically pulls the first image from the google maps result
                to be used in the React side of the app.
                <br />
                <strong>Technology Used:</strong> React, Node.js, MongoDB,
                Axios, Heroku, Google Maps Api.
              </p>
              <a
                href="https://road-trip-helper.firebaseapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here For Demo!
              </a>
            </div>
          }
          popUp={() => this.props.popUp('14')}
          key="14"
        />
        <PortfolioPiece
          title="TN State Parks"
          image={tnpark}
          description={
            <div>
              <h2>TN State Parks</h2>
              <p>
                A React app that gets the user's location, measure's their
                distance from each of the Tennessee State parks, and returns a
                list of all of the state parks within the radius that has been
                specified by the user. It also adds each location as a pin on
                the map. This is designed to look best on an iPhone. <br />Technology
                used: React, Google Maps Api.
              </p>
              <a
                href="https://tn-parks.firebaseapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here For Demo optimized for iPhone!
              </a>
              <br />
              <a
                href="https://blog3-8b2c9.firebaseapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here For Alternate Demo optimized for Web Browser!
              </a>
            </div>
          }
          popUp={() => this.props.popUp('13')}
          key="13"
        />
        <PortfolioPiece
          title="Setlist"
          image={SetListApp}
          description={
            <div>
              <h2>SetList App</h2>
              <p>
                Currently in use by a local Nashville band, this setlist allows
                members to add, edit, delete, and rearrange the set list with
                all changes updated in real time across all devices. Note: the
                demo version below has the database-syncing functionality turned
                off. <br />
                <strong>Technology Used:</strong> React, Re-base, Firebase.
              </p>
              <a
                href="https://setlist-demo.firebaseapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here For Demo!
              </a>
            </div>
          }
          popUp={() => this.props.popUp('12')}
          key="12"
        />
        <PortfolioPiece
          title="Tip Tracker"
          image={tipCounter}
          description={
            <div>
              <h2>Tip Tracker</h2>
              <p>
                This is a React App for service industry employees to record
                their tips (cash and credit card) and also tip pool amounts. I
                used React's new Context Api to pass state between components.
                <br />
                <strong>Technology Used:</strong> React, React's Context Api ,
                SASS.
              </p>
              <a
                href="https://tipcounter.firebaseapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here For Demo!
              </a>
              <br />
            </div>
          }
          popUp={() => this.props.popUp('11')}
          key="11"
        />
        <PortfolioPiece
          title="Whiskey Business"
          image={whiskey}
          description={
            <div>
              <h2>Whiskey Business</h2>
              <p>
                This app is for keeping a log of the different types of whiskey
                the user has tried. It inclueds a total count as well as the
                total number of each categoory. A key feature of this app is the
                "fuzzy" search algorithm I created for the "Have I Tried It?"
                section of the app. It allows for typos and various other
                inexact search queries to still reliably match up with whiskies
                that are currently on the list. <br />
                <strong>Technology Used:</strong> React, React Router, original
                "fuzzy" search algorithm.
              </p>
            </div>
          }
          popUp={() => this.props.popUp('10')}
        />
        <PortfolioPiece
          title="Image Viewer"
          image={ImageViewer}
          description={
            <div>
              <h2>Image Viewer</h2>
              <p>
                This is an image viewer built with React.js. I used CSS grid for
                layout, which is fully responsive. The images are hosted on
                Cloudinary, which allows you to specify the image size you
                prefer during delivery rather than creating a separate thumbnail
                size. The animation that occurs when switching images was done
                by tying CSS class changes/transitions into my “onClick”
                function and “componentDidMount” life cycle hook. <br />
                <strong>Technology Used:</strong> React, Cloudinary, CSS Grid.
              </p>
              <a
                href="https://imgviewer-ab3f4.firebaseapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here For Demo!
              </a>
            </div>
          }
          popUp={() => this.props.popUp('9')}
        />
        <PortfolioPiece
          title="Color Picker"
          image={colorpicker}
          description={
            <div>
              <h2>Color Picker</h2>
              <p>
                This is a fully responsive color picker app built with React and
                CSS variables. <br />
                <strong>Technology Used:</strong> React, CSS Variables
              </p>
              <a
                href="https://colorpickerbyzachg.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here For Demo!
              </a>
            </div>
          }
          popUp={() => this.props.popUp('8')}
        />
        <PortfolioPiece
          title="Clock"
          image={Clock}
          description={
            <div>
              <h2> Clock </h2>
              <p> A realistic ticking clock built with Javascript and CSS.</p>
              <a
                href="https://clock-b4d6d.firebaseapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here For Demo!
              </a>
            </div>
          }
          popUp={() => this.props.popUp('7')}
        />
        <PortfolioPiece
          title="Flex Panel"
          image={FlexPanelVertical}
          description={
            <div>
              <h2>Flex-Panel Image Viewer </h2>
              <p>A simple image viewer built with React and CSS Flex</p>
              <a
                href="https://flexpanel-27c73.firebaseapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here For Demo!
              </a>
            </div>
          }
          popUp={() => this.props.popUp('6')}
        />
        <PortfolioPiece
          title="Tic Tac Toe"
          image={TicTacToe}
          description={
            <div>
              <h2>Tic Tac Toe </h2>
              <p>Tic Tac Toe using React</p>
              <a
                href="https://tictactoe-de06b.firebaseapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here For Demo!
              </a>
            </div>
          }
          popUp={() => this.props.popUp('5')}
        />
        <PortfolioPiece
          title="Euler's Challenges"
          image={Euler}
          description={
            <div>
              <h2>Euler's Challenges</h2>
              <p>
                Eulers Challenges 1-5 from projecteuler.net. Solutions on my{' '}
                <a href="https://github.com/zachandblue/Euler-s-Challenges">
                  github
                </a>{' '}
                page
              </p>

              <br />
              <a href="https://eulerschallenges.firebaseapp.com/">
                Click Here For Demo!
              </a>
            </div>
          }
          popUp={() => this.props.popUp('4')}
        />
        <PortfolioPiece
          title="Todo List"
          image={Todo}
          description={
            <div>
              <h2>To-Do List</h2>
              <p>
                A super simple todo list built with React. I used Jquery to make
                the list sortable. Syncs to local storage so the list will be
                remembered after a refresh. I actually use it everyday! <br />Technology
                used: React, Jquery.
              </p>
              <a href="https://todo-3a42f.firebaseapp.com/">
                Click Here For Demo!
              </a>
            </div>
          }
          popUp={() => this.props.popUp('3')}
        />
        <PortfolioPiece
          title="Dumphrey's Cafe"
          image={Dumphreys}
          description={
            <div>
              <h2>Dumphrey's Cafe </h2>
              <p>
                Sample restaurant page made with Wordpress featuring custom CSS
                text slider on front page.
              </p>
              <a href="">Currently down for upgrades....</a>
            </div>
          }
          popUp={() => this.props.popUp('2')}
        />
        <PortfolioPiece
          title="BMI Calculator"
          image={BMI}
          description={
            <div>
              <h2>BMI Calculator </h2>
              <p>A simple BMI calculator built with React</p>
              <a href="https://zachs-bmi-calc.herokuapp.com/">
                Click Here For Demo!
              </a>
            </div>
          }
          popUp={() => this.props.popUp('1')}
        />
        <PortfolioPiece
          title="The Middle Ground Band Page"
          image={TMG}
          description={
            <div>
              <h2>The Middle Ground Band Page</h2>
              <p>
                Custom build website for local Nashille band The Middle Ground.
                Notable featuer: custom built music player, parallax sections,
                responsive desing
              </p>
              <a href="http://www.wearethemiddleground.com/">
                Click Here To See!
              </a>
            </div>
          }
          popUp={() => this.props.popUp('0')}
        />
      </div>
    );
  }
}

export default Portfolio;
