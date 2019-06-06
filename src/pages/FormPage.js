import React from 'react';
import RequestForm from '../components/RequestForm'

export default class FormPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { rows: [[]] };
    }

    render() {
        return (
          <div>
            <RequestForm />
            {/* <RequestForm /> */}
          </div>
        )
    }
}