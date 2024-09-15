import React from 'react';

function ChatbotPage() {
  return (
    <div>
      <h1>Chatbot</h1>
      <ul>
        { /* list of fruits as cards */ }
        <li>
          <h2>Apple</h2>
          <p>Details about Apple</p>
        </li>
        <li>
          <h2>Banana</h2>
          <p>Details about Banana</p>
        </li>
        {/* add more fruits */}
      </ul>
    </div>
  );
}

export default ChatbotPage;