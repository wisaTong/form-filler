import React from 'react';
import RequestForm from '../components/RequestForm'
import '../css/FormPage.css';

export default class FormPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { rows: [[]] };
    }

    render() {
        return (
          <div>
            <button onClick={ () => {window.print()} }>Print</button>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} id="hello">
              <RequestForm />
              {/* <RequestForm /> */}
            </div>
          </div>
        )
    }
}
