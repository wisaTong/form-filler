import React from 'react';
import RequestForm from '../components/RequestForm'
import '../css/FormPage.css';

export default class FormPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { rows: props.data };
        console.log(props)
    }

    render() {
      const { rows } = this.state
      return (
        <div>
          <button onClick={ () => {window.print()} }>Print</button>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }} id="hello">
            <RequestForm data={rows}/>
            <RequestForm data={rows}/>
          </div>
        </div>
      )
    }
}
