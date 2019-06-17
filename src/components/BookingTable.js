import React from 'react';
import ReactDOM from 'react-dom';
import FormPage from '../pages/FormPage'
import '../css/BookingTable.css'
import logo from '../assets/vistec-logo.svg'

export default class BookingTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rows: [[]], isLoaded: false };
  }

  componentDidMount() {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const SHEET_ID = process.env.REACT_APP_SHEET_ID;

    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1!A3:K?key=${API_KEY}`)
      .then(res => res.json())
      .then(json => this.setState({ rows: json['values'].sort((a, b) => a[10] > b[10] ? -1 : 1), isLoaded: true }));
  }
  
  ColorDesc(props) {
    return (
      <div style={{ display: 'inline-block', margin: '3rem 2rem 1rem 2rem' }}>
        <div style={{ height: '15px', width: '40px', backgroundColor: props.color, borderRadius: '10px', display: 'inline-block' }}></div>
        <p style={{ display: 'inline', margin: '0 1rem' }}>{props.desc}</p>
      </div>
    );
  }

  TableRow(props) {
    const row = props.row;
    const status = row[10] ? row[10].toLowerCase() : '';

    let statusStyle = (s) => {
      if (!s)  return 'status-null';
      else return 'status-' + s;
    };

    return (
      <div class={"row-card " + statusStyle(status)}>
        <div class="slot passenger">
          <h3>Passenger</h3>
          <p>Name: <em>{row[0]}</em></p>
          <p>Phone number: <em>{row[1]}</em></p>
        </div>
        <div class="slot trip">
          <div class="pickup">
            <h3>Pickup</h3>
            <p>Date: <em>{row[2]}</em></p>
            <p>Time: <em>{row[3]}</em></p>
            <p>Location: <em>{row[4]}</em></p>
          </div>
          <div class="drop-off">
            <h3>Drop-off</h3>
            <p>Date: {row[5]}</p>
            <p>Time: {row[6]}</p>
            <p>Location {row[7]}</p>
          </div>
        </div>
        <div class="slot driver">
          <h3>Driver</h3>
          <p>Name: {row[8]}</p>
          <p>Phone number: {row[9]}</p>
        </div>
        <button onClick={() => ReactDOM.render(<FormPage data={row}/>, document.getElementById('root'))}>
          Print form
        </button>
      </div>
    )
  }

  render() {
    return this.state.isLoaded ? (
      <div class="container">
        <img src={logo} alt="Logo" style={{ width: '25rem', marginBottom: '1rem' }} />
        <this.ColorDesc color="#B90038" desc="N/A" />
        <this.ColorDesc color="#5c267E" desc="Printed" />
        <this.ColorDesc color="#FFA642" desc="Requested" />
        <this.ColorDesc color="#00CD8A" desc="Confirmed" />
        {this.state.rows.map(row => (
          <this.TableRow row={row} />
        ))}
      </div>
    ) : (
      <div style={{ height: '100vh', display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <p style={{ fontSize: '3rem' }}>Loading...</p>
      </div>
    )
  }
}