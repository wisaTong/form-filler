export default function getEntries(callback) {
    const API_KEY = 'AIzaSyANBucM2vlWnqhijUGLD-9SurgT3LdAjvw';
    const SHEET_ID = '1sPET20Cb6NUIsBX7WUjXxEAaEqUONz1gHyk_5CLmNOc';

    return fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1!A3:K?key=${API_KEY}`)
        .then(res => res.json())
        .then(json => callback(json));
}