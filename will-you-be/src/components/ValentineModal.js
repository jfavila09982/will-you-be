// Modal Component
const ValentineModal = ({ messages, currentIndex, onClose, onPrev, onNext }) => {
  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    zIndex: '1000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '400px',
    width: '100%',
  };

  const buttonStyle = {
    backgroundColor: '#ff4d4d',
    color: 'white',
    padding: '10px 15px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const closeButtonStyle = {
    ...buttonStyle,
    marginTop: '10px',
  };

  return (
    <div style={modalStyle}>
      <button style={buttonStyle} onClick={onPrev}>&lt; Previous</button>
      <p style={{ flex: 1, margin: '0 10px' }}>{messages[currentIndex]}</p>
      <button style={buttonStyle} onClick={onNext}>Next &gt;</button>
      <button style={closeButtonStyle} onClick={onClose}>Close</button>
    </div>
  );
};
