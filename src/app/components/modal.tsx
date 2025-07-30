'use client';
import React from 'react';
import '../css/modal.css';


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



type ModalProps = {
    show: boolean;
    onCancel: () => void;
    onConfirm: () => void;
}

const WarningModal: React.FC<ModalProps> = ({show, onCancel, onConfirm}) => {
    return (
        <Modal className='modal-container' show={show} onHide={onCancel} backdrop="static" keyboard={false} centered>
            <Modal.Header closeButton>
                <Modal.Title>Warning</Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
                No search inputs and dropdowns selected.
                You will be redirected to the full OTU list.
            </Modal.Body>

            <Modal.Footer>
                <Button className='cancel-btn' variant="secondary" onClick={onCancel}>
                    Cancel
                </Button>
                <Button className='ok-btn' variant="primary" onClick={onConfirm}>
                    OK
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default WarningModal;

