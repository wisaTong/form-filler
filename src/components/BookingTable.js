import React from 'react';
import ReactDOM from 'react-dom';
import FormPage from '../pages/FormPage'
import '../css/BookingTable.css'

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
      .then(json => this.setState({ rows: json['values'], isLoaded: true }));
  }

  // render() {
  //   console.log(this.state.rows)
  //   return (
  //     <div class="container">
  //       <table>
  //         <thead>
  //           <tr>
  //             {this.state.rows[0].map(cell => (
  //               <th>{cell}</th>
  //             ))}
  //             <th>Print</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {this.state.rows.map((row, index) => {
  //             if (index !== 0) return (
  //               <tr>
  //                 {row.map(cell => (<td>{cell}</td>))}
  //                 <td>
  //                   <button onClick={() => {
  //                     ReactDOM.render(<FormPage data={row}/>, document.getElementById('root'));
  //                   }}>
  //                     Print
  //                   </button>
  //                 </td>
  //               </tr>
  //             )
  //           })}
  //         </tbody>
  //       </table>
  //     </div>
  //   );
  // }

  TableHeader() {
    return (
      <div class="table-header">
        <h1>Passenger</h1>
        <h1>Pickup</h1>
        <h1>Drop-off</h1>
        <h1>Driver</h1>
        <h1>Status</h1>
      </div>
    );
  }

  TableRow(props) {
    const row = props.row;
    const status = row[10];

    let statusStyle = (s) => {
      if (!s)  return 'status-null';
      else return 'status-' + s;
    };

    return (
      <div class={"row-card " + statusStyle(status)}>
        <div class="slot passenger">
          <h3>Passenger</h3>
          <p>Name: {row[0]}</p>
          <p>Phone number: {row[1]}</p>
        </div>        
        <div class="slot trip">
          <div class="pickup">
            <h3>Pickup</h3>
            <p>Date: {row[2]}</p>
            <p>Time: {row[3]}</p>
            <p>Location: {row[4]}</p>
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
          Print
        </button>
      </div>
    )
  }

  render() {
    return this.state.isLoaded ? (
      <div class="container">
        {this.state.rows.map(row => (
          <this.TableRow row={row} />
        ))}
      </div>
    ) : (
      <div>Loading</div>
    )
  }
}