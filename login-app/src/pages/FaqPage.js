import React, { useState, useEffect } from 'react';

function FaqPage() {
  const [faqs, setFaqs] = useState([]);
  const [newFaq, setNewFaq] = useState({ question: '', answer: '' });

  useEffect(() => {
    fetch('https://fruit-ai-backend.herokuapp.com/faqs')
      .then(response => response.json())
      .then(data => setFaqs(data))
      .catch(error => console.error(error));
  }, []);

  const handleAddFaq = () => {
    fetch('https://fruit-ai-backend.herokuapp.com/faqs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFaq),
    })
      .then(response => response.json())
      .then(data => setFaqs([...faqs, data]))
      .catch(error => console.error(error));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewFaq({ ...newFaq, [name]: value });
  };

  return (
    <div>
      <h1>FAQs</h1>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index}>
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
      <form>
        <label>
          Question:
          <input type="text" name="question" value={newFaq.question} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Answer:
          <input type="text" name="answer" value={newFaq.answer} onChange={handleInputChange} />
        </label>
        <br />
        <button type="button" onClick={handleAddFaq}>Add FAQ</button>
      </form>
    </div>
  );
}

export default FaqPage;