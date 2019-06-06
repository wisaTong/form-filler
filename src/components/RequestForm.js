import React from 'react';
import logo from '../assets/vistec-logo.svg'
import '../css/form.css';

export default class RequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rows: props.data };
  }

  render() {
    const { rows } = this.state;
    const name = rows[0];
    const tel = rows[1];
    const formDate = rows[5];
    const formTime = rows[6];
    const formLocation = rows[4];
    const toDate = rows[8];
    const toTime = rows[9];
    const toLocation = rows[7];
    return (
      <div style={{ border: '2px solid', width: 'calc(210mm - 25.4mm)', maxHeight: 'calc(297mm/2 - 25.4mm)', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }} id="requestForm">
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
              <input type="text" style={{ width: '60mm', border: 'none', borderBottom: '1px solid' }} value={name}/>
            </div>
            {/* <div style={{ flex: '1', textAlign: 'left' }}>
              <span>LASTNAME:</span>
            </div> */}
          </div>
          <div style={{ display: 'flex', paddingLeft: '5mm', paddingRight: '5mm' }}>
            <div style={{ flex: '1', textAlign: 'left' }}>
              <span>CONTACT:&nbsp;&nbsp;</span>
              <input type="text" style={{ width: '60mm', border: 'none', borderBottom: '1px solid' }} value={tel}/>
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
          <div style={{ display: 'flex', paddingLeft: '5mm', paddingRight: '5mm', paddingBottom: '2mm' }}>
            <div style={{ flex: '1', textAlign: 'left' }}>
              <span>SCHOOL/DEPARTMENT:</span>
            </div>
            <div style={{ flex: '1', textAlign: 'left' }}>
              <input type="checkbox" name="IST" value="IST" checked/> IST
                <input type="checkbox" name="BSE" value="BSE" /> BSE
                <input type="checkbox" name="ESE" value="ESE" /> ESE
                <input type="checkbox" name="MSE" value="MSE" /> MSE
                <input type="checkbox" name="FRC" value="FRC" /> FRC
                <br />
                <input type="checkbox" name="OTHER" value="OTHER" /> OTHER: &nbsp;&nbsp;
                <input type="text" style={{ width: '60mm', border: 'none', borderBottom: '1px solid' }} />
              </div>
          </div>
          <div style={{ display: 'flex', borderTop: '1px solid', borderBottom: '1px solid' }}>
            <div className="center" style={{  width: '10%' }}>
              <span>DATE</span>
            </div>
            <div style={{ display: 'flex', flex: '1', flexDirection: 'column', borderLeft: '1px solid' }}>
              <div style={{ flex: '1', borderBottom: '1px solid' }}>
                <span>REQUEST FOR ONE WAY TRIP</span>
              </div>
              <div style={{ display: 'flex' }}>
                <span style={{ flex: '1' }}>TIME</span>
                <span style={{ flex: '1', borderLeft: '1px solid' }}>FROM</span>
                <span style={{ flex: '1', borderLeft: '1px solid' }}>TO</span>
                <span style={{ flex: '1', borderLeft: '1px solid' }}>PERSON</span>
              </div>
            </div>
            <div style={{ flex: '1', flexDirection: 'column', borderLeft: '1px solid' }}>
              <div style={{ flex: '1', borderBottom: '1px solid' }}>
                <span>REQUEST FOR ROUND TRIP</span>
              </div>
              <div style={{ display: 'flex' }}>
                <span style={{ flex: '2' }}>TIME</span>
                <span style={{ flex: '1', borderLeft: '1px solid' }}>FROM</span>
                <span style={{ flex: '1', borderLeft: '1px solid' }}>TO</span>
                <span style={{ flex: '1', borderLeft: '1px solid' }}>PERSON</span>
              </div>
            </div>
            <div style={{ flexDirection: 'column', borderLeft: '1px solid', width: '10%' }}>
              <span>NOTE</span>
            </div>
          </div>
          <div style={{ display: 'flex', borderBottom: '1px solid', height: 'auto' }}>
            <div className="center" style={{ width: '10%' }}>
              <input type="text" style={{ width: '95%', border: 'none', textAlign: 'center' }} value={formDate}/>
            </div>
            <div style={{ display: 'flex', flex: '1', flexDirection: 'row', }}>
              <div className="center" style={{ flex: '1', borderLeft: '1px solid' }}>
                <input type="text" style={{ width: '95%', border: 'none', textAlign: 'center' }} value={formTime}/>
              </div>
              <div className="center" style={{ flex: '1', borderLeft: '1px solid' }}>
                <input type="text" style={{ width: '95%', border: 'none', textAlign: 'center' }} value={formLocation}/>
              </div>
              <div className="center" style={{ flex: '1', borderLeft: '1px solid' }}>
                <input type="text" style={{ width: '95%', border: 'none', textAlign: 'center' }} value={toLocation}/>
              </div>
              <div className="center" style={{ flex: '1', borderLeft: '1px solid' }}>
                <input type="text" style={{ width: '95%', border: 'none', textAlign: 'center' }} />
              </div>
            </div>
            <div style={{ display: 'flex', flex: '1', flexDirection: 'column', borderLeft: '1px solid' }}>
              <div style={{ display: 'flex', borderBottom: '1px solid' }}>
                <div style={{ flex: '2', textAlign: 'left' }}>
                  Depart: <input type="text" style={{ width: '45%', border: 'none', textAlign: 'center' }} />
                  </div>
                <div className="center" style={{ flex: '1', borderLeft: '1px solid' }}>
                  <input type="text" style={{ width: '95%', border: 'none', textAlign: 'center' }} />
                </div>
                <div className="center" style={{ flex: '1', borderLeft: '1px solid' }}>
                  <input type="text" style={{ width: '95%', border: 'none', textAlign: 'center' }} />  
                </div>
                <div className="center" style={{ flex: '1', borderLeft: '1px solid' }}>
                  <input type="text" style={{ width: '95%', border: 'none', textAlign: 'center' }} />  
                </div>
              </div>
              <div style={{ display: 'flex' }}>
                <div style={{ flex: '2', textAlign: 'left'}}>
                  Return: <input type="text" style={{ width: '45%', border: 'none', textAlign: 'center' }} />
                  </div>
                <div className="center" style={{ flex: '1', borderLeft: '1px solid' }}>
                  <input type="text" style={{ width: '95%', border: 'none', textAlign: 'center' }} />
                </div>
                <div className="center" style={{ flex: '1', borderLeft: '1px solid' }}>
                  <input type="text" style={{ width: '95%', border: 'none', textAlign: 'center' }} />  
                </div>
                <div className="center" style={{ flex: '1', borderLeft: '1px solid' }}>
                  <input type="text" style={{ width: '95%', border: 'none', textAlign: 'center' }} />
                </div>
              </div>
            </div>
            <div className="center" style={{ width: '10%', borderLeft: '1px solid' }}>
              <input type="text" style={{ width: '95%', border: 'none', textAlign: 'center' }} />
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