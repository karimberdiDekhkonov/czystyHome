// CodeInput.jsx
import React, { useState } from 'react';
import './CodeInput.css';

const CodeInput = ({ onClose, onSaveChanges }) => {
  const [code, setCode] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    // Filter out any non-numeric characters and limit to 6 digits
    const filteredCode = value.replace(/\D/g, '').substring(0, 6);
    setCode(filteredCode);
  };

  const handleSaveChanges = () => {
    // Check if the code is 6 digits long before proceeding
    if (code.length === 6) {
      onSaveChanges(code);
      onClose();
    } else {
      alert('Please enter a valid 6-digit code.');
    }
  };

  return (
    <div className="code-input-container">
      <input
        className="code-input"
        type="text"
        value={code}
        onChange={handleChange}
        maxLength="6"
      />
      <div className="code-buttons">
        <button className="code-button" onClick={onClose}>
          Close
        </button>
        <button className="code-button primary" onClick={handleSaveChanges}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default CodeInput;
