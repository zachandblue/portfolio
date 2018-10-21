import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="title outer-padding">
          <h1>
            Zach and <span className="blue">Blue</span>
          </h1>
          <h3>Front End Web Development</h3>
        </div>

        <div className="who-am-i outer-padding">
          <h2>Who Am I?</h2>
          <div className="zach-photo" />
          <div className="bio">
            <h4>
              Hi there, I'm Zach. I am an web designer and developer with an
              emphasis on front end development. Throughout my life, I have
              always been passionate about creating things. Whether its music,
              writing, or web design, I always have be making something. I love
              that the process of creating also involves learning, and I love
              learning new things everyday.
            </h4>
          </div>
        </div>

        <div className="quote-box outer-padding">
          <h4 className="quote blue">{this.props.quote}</h4>
        </div>

        <div className="technologies">
          <h2 className="what-i-use">What I Use</h2>
          <div className="icon icon-1" />
          <div className="icon icon-2" />
          <div className="icon icon-13" />
          <div className="icon icon-17" />
          <div className="icon icon-3" />
          <div className="icon icon-4" />
          <div className="icon icon-14" />
          <div className="icon icon-5" />
          <div className="icon icon-6" />
          <div className="icon icon-15" />
          <div className="icon icon-16" />
          <div className="icon icon-7" />
          <div className="icon icon-8" />
          <div className="icon icon-9" />
          <div className="icon icon-10" />
          <div className="icon icon-11" />
          <div className="icon icon-12" />
        </div>
      </div>
    );
  }
}

export default Home;
