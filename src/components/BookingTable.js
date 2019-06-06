import React from 'react';

export default class BookingTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { rows: [[]] };
    }

    componentDidMount() {
        const API_KEY = process.env.REACT_APP_API_KEY;
        const SHEET_ID = process.env.REACT_APP_SHEET_ID;

        fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1!A3:K?key=${API_KEY}`)
            .then(res => res.json())
            .then(json => this.setState({ rows: json['values'] }));
    }

    render() {
        console.log(this.state.rows);
        
        return <p>{this.state.rows[0][0]}</p>
    }
}