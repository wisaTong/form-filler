import React from 'react';
import logo from '../assets/vistec-logo.svg'

export default class RequestForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { rows: [[]] };
    }

    render() {
      return (
        <div style={{ border: '1px solid', width: '80vw' }}>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: '1', border: '1px solid' }}>
              <img src={logo} alt="Logo" />
            </div>
            <div style={{ flex: '2', border: '1px solid' }}>  
              <h4>TRANSPORTATION SERVICE RESERVATION FORM</h4>
              <span>(แบบฟอร์มขอใช้รถรับ-ส่ง)</span>
            </div>
            <div style={{ flex: '1', border: '1px solid',justifyContent: 'center', alignItems: 'center' }}>
              <div>
                <input type="text"/> / <input type="text"/>
              </div>
              <div style={{ flex: '1' }}>
                <input type="text" style={{ width: '20%' }}/> / <input type="text" style={{ width: '20%' }}/> / <input type="text" style={{ width: '20%' }}/>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex' }}>
              <div style={{ flex: '1', textAlign: 'left' }}>
                <span>NAME:</span>
              </div>
              <div style={{ flex: '1', textAlign: 'left' }}>
                <span>LASTNAME:</span>
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ flex: '1', textAlign: 'left' }}>
                <span>CONTACT:</span>
              </div>
              <div style={{ flex: '1', textAlign: 'left' }}>
                <span>SECTION:</span>
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ flex: '1', textAlign: 'left' }}>
                <span>OBJECTIVE:</span>
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ flex: '1', textAlign: 'left' }}>
                <span>RESERVATION USED FOR SCHOOL / DEPARTMENT OF:</span>
              </div>
              <div style={{ flex: '1', textAlign: 'left' }}>
                <input type="checkbox" name="IST" value="IST" /> IST
                <input type="checkbox" name="BSE" value="BSE" /> BSE
                <input type="checkbox" name="ESE" value="ESE" /> ESE
                <input type="checkbox" name="MSE" value="MSE" /> MSE
                <input type="checkbox" name="FRC" value="FRC" /> FRC
                <input type="checkbox" name="OTHER" value="OTHER" /> OTHER
              </div>
            </div>
            <div style={{ display: 'flex', border: '1px solid' }}>
              <div style={{ width: '10vw', border: '1px solid' }}>
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
              <div style={{ width: '10vw', flexDirection: 'column', border: '1px solid' }}>
                <span>NOTE</span>
              </div>
            </div>
            <div style={{ display: 'flex', border: '1px solid', height: 'auto' }}>
              <div style={{ width: '10vw', border: '1px solid' }}>
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
                    Deapart:
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
                    Return:
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
              <div style={{ width: '10vw' }}>
                <span>100000</span>
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ flex: '1', textAlign: 'left' }}>
                INTERNAL USE ONLY <br/>
                PLEASE SUBMIT REQUEST 2 DAYS IN ADVANCE
              </div>
              <div style={{ flex: '1', textAlign: 'left' }}>
                Received by:<br/>
                Date
              </div>
            </div>
          </div>
        </div>
      )
    }
}