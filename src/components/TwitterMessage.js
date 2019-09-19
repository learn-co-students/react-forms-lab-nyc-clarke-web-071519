// 2. This component takes one prop: `maxChars` which is a number — the maximum
// amount of characters a message can have. This prop is being passed in from the
// App component with the value `140`.

// 3. You'll find an `<input type="text">` in this component. Make this a
// controlled component by adding the attributes to the `<input>` element. Its
// value should be saved in the component's state and should update on _every_
// change to the input.

// 4. Show the _remaining_ characters in the component. It doesn't matter how you
// render it, as long as the number is correct. No need to guard against input that
// is too long — you can let the counter reach negative values.

import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handleChange(event)} value={this.state.value} type="text" name="message" id="message" />
        <h5>Remaining Characters</h5>
        { this.props.maxChars - this.state.value.length }
      </div>
    );
  }
}

export default TwitterMessage;
