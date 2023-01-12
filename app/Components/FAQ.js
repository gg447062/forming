import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import { faqList } from './faqs';

function Card({ title, body }) {
  const [display, setDisplay] = useState('hidden');

  function handleClick() {
    if (display === 'hidden') {
      setDisplay('active');
    } else {
      setDisplay('hidden');
    }
  }
  return (
    <div className="faq-card" onClick={handleClick}>
      {title}
      <div className={`faq-body-wrapper-${display}`}>{body}</div>
    </div>
  );
}

function FAQ() {
  return (
    <div>
      <Header component={'faq'} />
      <section id="faq">
        <h1>
          <span>F</span>AQs
        </h1>
        <div id="faq-wrapper">
          {faqList.map((el, i) => {
            return <Card title={el.q} body={el.a} key={i} />;
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default FAQ;
