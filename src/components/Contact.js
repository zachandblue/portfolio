import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <h3 className="form-header">Let's Build Something!</h3>
        <form onSubmit={this.props.handleSubmit}>
          <label for="input">Name</label>
          <input
            type="text"
            name="name"
            value={this.props.name}
            onChange={this.props.handleChange}
          />
          <label for="input">Email</label>
          <input
            type="email"
            name="email"
            value={this.props.email}
            onChange={this.props.handleChange}
          />
          <label for="input">Company</label>
          <input
            type="text"
            name="company"
            value={this.props.company}
            onChange={this.props.handleChange}
          />
          <label for="input">Project Details</label>
          <input
            type="text"
            name="details"
            value={this.props.details}
            onChange={this.props.handleChange}
          />
          <input className="submit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Contact;
