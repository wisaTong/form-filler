import React from 'react';

export default class C extends React.Component {
    constructor(props) {
        super(props);
        this.state = { rows: [[]] };
    }

    componentDidMount() {
        const API_KEY = process.env.API_KEY;
        const SHEET_ID = process.env.SHEET_ID;

        fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1!A3:K?key=${API_KEY}`)
            .then(res => res.json())
            .then(json => this.setState({ rows: json['values'] }));
    }

    render() {
        return <p>{this.state.rows[0][0]}</p>
    }
}