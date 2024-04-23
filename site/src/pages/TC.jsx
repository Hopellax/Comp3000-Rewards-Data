
import React from 'react';
import { useState } from 'react';
const TermsAndConditionsPopup = ({ initiallyVisible }) => {
  // State to manage the visibility of the modal
  const [showModal, setShowModal] = useState(initiallyVisible);

  // Function to toggle the modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      {/* Button to open the modal */}
      <button onClick={toggleModal}>View Terms and Conditions</button>

      {/* Modal popup */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <h2>Terms and Conditions</h2>
            <p>This website was developed with the intention of being informative and creating a safe online security culture</p>
            <p>We will never misuse your information in any way, and you have the right to close your account at any time.</p>
            <p>If you are concerned about your privacy at any time, then please contact us.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TermsAndConditionsPopup;

