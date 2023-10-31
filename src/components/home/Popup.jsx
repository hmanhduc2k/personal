import React, { useState } from 'react';
import Modal from 'react-modal';

const Popup = ({data}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };


  return (
    <div>
      <button onClick={openModal}>Open Popup</button>
       <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="custom-modal" // Apply the custom class here
        overlayClassName="custom-overlay" // Optional: Apply styles to the overlay
      >
        <h2>This is a Smaller Popup</h2>
        <p>Click anywhere outside to close.</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
      <style>{
        `
        .custom-modal {
          width: 50%; /* Adjust the width as needed */
          max-width: 400px; /* Set a maximum width if desired */
          background-color: white;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          position: fixed; /* Use fixed position to make it relative to the viewport */
          top: 50%; /* Position it vertically at 50% of the viewport height */
          left: 50%; /* Position it horizontally at 50% of the viewport width */
          transform: translate(-50%, -50%); /* Center the modal in the viewport */
        }
        `
        }
      </style>
    </div>
  );
}

export default Popup;