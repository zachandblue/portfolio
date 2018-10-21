import React from 'react';

class Otherside extends React.Component {
  render() {
    return (
      <div>
        <h1>The Other Side</h1>
        <h3>Currently in testing...</h3>
        <br />
        <h2>Privacy Policy</h2>
        <p>
          We value your privacy, therefore, we do not store or acess any data
          other than your email address and chosed password. We also do not
          share ANY o fyour data with ANYone. User information is stored using
          Google's Firebase Authentication service.
        </p>
        <p>
          We also value your anonymity. While we do require a valid email
          address in order to sign up for an account, other users will not be
          able to see it.
        </p>
      </div>
    );
  }
}

export default Otherside;
