import React from 'react';

export default class C extends React.Component {
    constructor(props) {
        super(props);
        this.state = { rows: [[]] };
    }

    componentDidMount() {
        const API_KEY = 'AIzaSyANBucM2vlWnqhijUGLD-9SurgT3LdAjvw';
        const SHEET_ID = '1sPET20Cb6NUIsBX7WUjXxEAaEqUONz1gHyk_5CLmNOc';

        fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1!A3:K?key=${API_KEY}`)
            .then(res => res.json())
            .then(json => this.setState({ rows: json['values'] }));
    }

    render() {
        return <p>{this.state.rows[0][0]}</p>
    }
}