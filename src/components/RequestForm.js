import React from 'react';
import logo from '../assets/vistec-logo.svg'
import '../css/form.css';

export default class RequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rows: [[]] };
  }

  render() {
    return (
      <div style={{ border: '2px solid', width: 'calc(210mm - 25.4mm)', height: 'calc(297mm - 25.4mm)', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }} id="requestForm">
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', justifyContent: 'center' }}>
          <div style={{ flex: '1', borderBottom: '1px solid', borderRight: '1px solid', padding: '1.5rem' }}>
            <img src={logo} alt="Logo" style={{ width: '12rem' }} />
          </div>
          <div style={{ flex: '1', borderBottom: '1px solid', borderRight: '1px solid', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h4>TRANSPORTATION SERVICE<br />RESERVATION FORM</h4>
            <h4>(แบบฟอร์มขอใช้รถรับ-ส่ง)</h4>
          </div>
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', borderBottom: '1px solid', justifyContent: 'center', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: '2mm' }}>
              NO:&nbsp;&nbsp;
              <input type="text" style={{ width: '20mm', border: 'none', borderBottom: '1px solid' }} /> /
              <input type="text" style={{ width: '10mm', border: 'none', borderBottom: '1px solid' }} />
            </div>
            <div>
              DATE:&nbsp;&nbsp;
              <input type="text" style={{ width: '8mm', border: 'none', borderBottom: '1px solid' }} /> / 
              <input type="text" style={{ width: '8mm', border: 'none', borderBottom: '1px solid' }} /> / 
              <input type="text" style={{ width: '10mm', border: 'none', borderBottom: '1px solid' }} />
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', paddingLeft: '5mm', paddingRight: '5mm' }}>
            <div style={{ flex: '1', textAlign: 'left' }}>
              <span>NAME:&nbsp;&nbsp;</span>
              <input type="text" style={{ width: '60mm', border: 'none', borderBottom: '1px solid' }} />
            </div>
            {/* <div style={{ flex: '1', textAlign: 'left' }}>
              <span>LASTNAME:</span>
            </div> */}
          </div>
          <div style={{ display: 'flex', paddingLeft: '5mm', paddingRight: '5mm' }}>
            <div style={{ flex: '1', textAlign: 'left' }}>
              <span>CONTACT:&nbsp;&nbsp;</span>
              <input type="text" style={{ width: '60mm', border: 'none', borderBottom: '1px solid' }} />
            </div>
            <div style={{ flex: '1', textAlign: 'left', paddingLeft: '5mm', paddingRight: '5mm' }}>
              <span>SECTION:&nbsp;&nbsp;</span>
              <input type="text" style={{ width: '60mm', border: 'none', borderBottom: '1px solid' }} />
            </div>
          </div>
          <div style={{ display: 'flex', paddingLeft: '5mm', paddingRight: '5mm' }}>
            <div style={{ flex: '1', textAlign: 'left' }}>
              <span>OBJECTIVE:&nbsp;&nbsp;</span>
              <input type="text" style={{ width: '140mm', border: 'none', borderBottom: '1px solid' }} />
            </div>
          </div>
          <div style={{ display: 'flex', paddingLeft: '5mm', paddingRight: '5mm' }}>
            <div style={{ flex: '1', textAlign: 'left' }}>
              <span>SCHOOL/DEPARTMENT:</span>
            </div>
            <div style={{ flex: '1', textAlign: 'left' }}>
              <input type="checkbox" name="IST" value="IST" /> IST
                <input type="checkbox" name="BSE" value="BSE" /> BSE
                <input type="checkbox" name="ESE" value="ESE" /> ESE
                <input type="checkbox" name="MSE" value="MSE" /> MSE
                <input type="checkbox" name="FRC" value="FRC" /> FRC
                <br />
                <input type="checkbox" name="OTHER" value="OTHER" /> OTHER: &nbsp;&nbsp;
                <input type="text" style={{ width: '60mm', border: 'none', borderBottom: '1px solid' }} />
              </div>
          </div>
          <div style={{ display: 'flex', border: '1px solid' }}>
            <div style={{ border: '1px solid', width: '10%' }}>
              <span>DATE</span>
            </div>
            <div style={{ flex: '1', flexDirection: 'column', border: '1px solid' }}>
              <div style={{ flex: '1', border: '1px solid' }}>
                <span>REQUEST FOR ONE WAY TRIP</span>
              </div>
              <div style={{ display: 'flex' }}>
                <span style={{ flex: '1', border: '1px solid' }}>TIME</span>
                <span style={{ flex: '1', border: '1px solid' }}>FROM</span>
                <span style={{ flex: '1', border: '1px solid' }}>TO</span>
                <span style={{ flex: '1', border: '1px solid' }}>PERSON</span>
              </div>
            </div>
            <div style={{ flex: '1', flexDirection: 'column', border: '1px solid' }}>
              <div style={{ flex: '1', border: '1px solid' }}>
                <span>REQUEST FOR ONE WAY TRIP</span>
              </div>
              <div style={{ display: 'flex' }}>
                <span style={{ flex: '1', border: '1px solid' }}>TIME</span>
                <span style={{ flex: '1', border: '1px solid' }}>FROM</span>
                <span style={{ flex: '1', border: '1px solid' }}>TO</span>
                <span style={{ flex: '1', border: '1px solid' }}>PERSON</span>
              </div>
            </div>
            <div style={{ flexDirection: 'column', border: '1px solid', width: '10%' }}>
              <span>NOTE</span>
            </div>
          </div>
          <div style={{ display: 'flex', border: '1px solid', height: 'auto' }}>
            <div style={{ border: '1px solid', width: '10%' }}>
            </div>
            <div style={{ display: 'flex', flex: '1', flexDirection: 'row', }}>
              <div style={{ flex: '1', border: '1px solid' }}>
                1
                </div>
              <div style={{ flex: '1', border: '1px solid' }}>
                2
                </div>
              <div style={{ flex: '1', border: '1px solid' }}>
                3
                </div>
              <div style={{ flex: '1', border: '1px solid' }}>
                3
                </div>
            </div>
            <div style={{ display: 'flex', flex: '1', flexDirection: 'column', }}>
              <div style={{ display: 'flex' }}>
                <div style={{ flex: '1', border: '1px solid' }}>
                  Depart
                  </div>
                <div style={{ flex: '1', border: '1px solid' }}>
                  2
                  </div>
                <div style={{ flex: '1', border: '1px solid' }}>
                  3
                  </div>
                <div style={{ flex: '1', border: '1px solid' }}>
                  3
                  </div>
              </div>
              <div style={{ display: 'flex' }}>
                <div style={{ flex: '1', border: '1px solid' }}>
                  Return
                  </div>
                <div style={{ flex: '1', border: '1px solid' }}>
                  2
                  </div>
                <div style={{ flex: '1', border: '1px solid' }}>
                  3
                  </div>
                <div style={{ flex: '1', border: '1px solid' }}>
                  3
                  </div>
              </div>
            </div>
            <div style={{ width: '10%' }}>
              <span>100000</span>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: '1', textAlign: 'left' }}>
              INTERNAL USE ONLY <br />
              PLEASE SUBMIT REQUEST 2 DAYS IN ADVANCE
              </div>
            <div style={{ flex: '1', textAlign: 'left' }}>
              Received by:<br />
              Date
              </div>
          </div>
        </div>
      </div>
    )
  }
}