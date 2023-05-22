import React from 'react'
import "./index.css"
import { Button, Modal } from 'antd';
import { useState } from 'react';


export default function RootUi() {
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <div className='main'>
      <Button type="primary" onClick={() => setModal2Open(true)} className='Explorebtn'>
        Explore
      </Button>
      <Modal
        title="Vertically centered modal dialog"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </div>
  );
};


  

