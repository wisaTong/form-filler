import React from 'react';

export default class RequestForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { rows: [[]] };
    }

    render() {
      return (
        <div style={{ height: '100%' }}>
          <h1>Move the mouse around!</h1>
          <p>The current mouse position is</p>
        </div>
      )
    }
}