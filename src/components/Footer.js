import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="socials">
          <p>
            <span>Email: </span>info@zachandblue.com
          </p>
          <a
            className="fa fa-git-square"
            href="https://github.com/zachandblue/"
          />
          <a
            className="fa fa-linkedin-square"
            href="https://www.linkedin.com/in/zach-grusznski"
          />
          <a
            className="fa fa-twitter"
            href="https://twitter.com/zachgrusznski"
          />
        </div>
        <footer>
          <small>
            Copyright &copy; 2018 Zach Grusznski. All Rights Reserved
          </small>
        </footer>
      </div>
    );
  }
}

export default Footer;
