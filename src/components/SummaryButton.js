import React, { useState } from 'react';

const SummaryButton = () => {
  const [message, setMessage] = useState('');

  const handleSummarize = async () => {
    const response = await fetch('http://localhost:4000/summarize', {
      method: 'POST',
    });
    const data = await response.json();
    setMessage(data.message || data.summary);
  };

  return (
    <div className="summary">
      <button onClick={handleSummarize}>📢 Summarize & Send to Slack</button>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default SummaryButton;
