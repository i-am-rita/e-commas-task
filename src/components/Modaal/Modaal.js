import React from 'react';
import Modal from 'react-modal';
export default function MyModaal(props) {
  return <>
    <Modal isOpen={props.open}>
      <div>
        <h2>Rita!</h2>
      </div>
    </Modal>
  </>;
}
