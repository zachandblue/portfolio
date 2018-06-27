import React from 'react';

class PortfolioPiece extends React.Component {
  render() {
    return (
      <div className="portfolio-piece-container" onClick={this.props.popUp}>
        <div className="project project-description">
          {this.props.description}
        </div>
        <img
          className="project project-image"
          src={this.props.image}
          alt="app screenshot"
        />
      </div>
    );
  }
}

export default PortfolioPiece;
