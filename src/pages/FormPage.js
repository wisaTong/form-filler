import React from 'react';
import RequestForm from '../components/RequestForm'
import '../css/FormPage.css';
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export default class FormPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { rows: props.data };
        console.log(props)
    }

    downloadPDF() {
      const filename  = 'VISTEC_Request_Form.pdf';
  
      html2canvas(document.querySelector('#hello')).then(canvas => {
        let pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
        pdf.save(filename);
      });
    }

    downloadHighPDF(quality = 1) {
      const filename  = 'VISTEC_Request_Form.pdf';
  
      html2canvas(document.querySelector('#hello'), 
                  {scale: quality}
               ).then(canvas => {
        let pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
        pdf.save(filename);
      });
    }

    render() {
      const { rows } = this.state
      return (
        <div>
          <button onClick={ () => {window.print()} }>Print</button>
          <button onClick={ () => { this.downloadHighPDF() } }>PDF</button>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }} id="hello">
            <RequestForm data={rows}/>
            <RequestForm data={rows}/>
          </div>
        </div>
      )
    }
}
