import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input  onChange={this.handleChange} value={this.state.message} type="text" name="message" id="message" /> 
          {this.props.maxChars-this.state.message.length} characters ramaining
      </div>
    );
  }
}

export default TwitterMessage;
