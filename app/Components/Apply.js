import React, { useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Modals() {
  return (
    <>
      <div id="submission-error" className="modal">
        <h2>An error occured:</h2>
        <p id="error-message"></p>
        <div id="close-err" className="close-button">
          X
        </div>
      </div>
      <div id="submitting" className="modal">
        <h2>Submitting...</h2>
      </div>
      <div id="thank-you" className="modal">
        <h2>Thanks for your submission!</h2>
        <p>
          Please follow
          <a href="https://twitter.com/lexicon_devils" target="_blank">
            @lexicon_devils
          </a>
          on twitter for announcements.
        </p>
        <p>You can expect to hear from us two days before the event.</p>
        <a href="https://discord.gg/Trjv9nA7c9" target="_blank">
          Discord
        </a>
        <div id="close" className="close-button">
          X
        </div>
      </div>
      <div id="privacy" className="modal">
        <p>
          Lexicon Devils won’t share your information or your video submissions
          without your explicit permission. Please be sure to submit an unlisted
          youtube video of content recorded specifically for FORMING.
        </p>
        <p>
          These videos should have the opportunity to premier at the event but
          in the case that your clip isn't selected, it's of course yours to
          release as you wish!
        </p>
        <div id="close-privacy" className="close-button">
          X
        </div>
      </div>
    </>
  );
}

function Form() {
  return (
    <form id="form" method="POST" action="/submit">
      <div className="form-inner-wrapper">
        <div className="form-field">
          <h2 className="text-large">Performance & Payroll</h2>
          <p>
            We use this info to access the edit of your performance, map funds
            to your wallet address, & contact you with necessary info about the
            show.
          </p>
          <div>
            <span id="error"></span>
            <label>Video URL</label>
            <input id="url" />
          </div>
          <div>
            <label>Email</label>
            <input id="email" />
          </div>
          <div>
            <label>Discord</label>
            <input id="discord" />
          </div>
          <div>
            <label>ETH Address</label>
            <input id="address" />
          </div>
        </div>
        <div className="form-field">
          <h2 className="text-large">Promo Info</h2>
          <p>
            We use this information to promote individual performers as well as
            the event itself so please answer as you’d like to see your info
            shared out.
          </p>
          <div>
            <label>Twitter</label>
            <input id="twitter" />
          </div>
          <div>
            <label>Preferred Name</label>
            <input id="name" />
          </div>
          <div>
            <label>About Me</label>
            <textarea id="aboutMe" maxLength="280"></textarea>
            <p id="charCount">0/280</p>
          </div>
          <button id="submit" form="form" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

function Apply() {
  const logoRef = useRef();

  useEffect(() => {
    function handleScroll() {
      const headerLogo = logoRef.current;
      const y = (window.scrollY / 666).toFixed(2);
      const antiY = (0 - window.scrollY / 666 / 10).toFixed(2);

      if (antiY > -0.16) {
        headerLogo.style.letterSpacing = `${antiY}em`;
        headerLogo.style.opacity = y;
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <div style={{ position: 'relative' }}>
      <Header component={'apply'} myRef={logoRef} />
      <h1 className="apply-header">Artist Submissions</h1>
      <section id="details">
        <div className="details-panel">
          <h2 className="text-large">Submission Guidelines</h2>
          <p>We're looking for:</p>
          <div className="guideline-container">
            <p className="guideline">Live Sets</p>
            <p className="guideline">DJ Sets</p>
            <p className="guideline">Original</p>
            <p className="guideline">Unreleased Performances</p>
          </div>
          <p>Please include:</p>
          <div className="guideline-container">
            <p className="guideline">Visualizers</p>
            <p className="guideline">Video Edits</p>
            <p className="guideline">Raw Footage</p>
          </div>
          <p>Submissions should be formatted:</p>
          <div className="guideline-container">
            <p className="guideline">10-15 Minutes</p>
            <p className="guideline">Unlisted Youtube Link</p>
          </div>
          <Link className="text-small-caps" to="/faq">
            FAQ
          </Link>
        </div>
        <div className="details-panel">
          <h2 className="text-large">Funding</h2>
          <p>
            Artists recieve a transparent split of funds payed into the{' '}
            <a href="https://juicebox.money/@forming" target="_blank">
              FORMING
            </a>{' '}
            juicebox for as long as their work is being showcased.
          </p>
          <div className="details-panel--img-wrapper">
            <img src="assets/comp.png" />
            <img src="assets/eth.png" />
          </div>
        </div>
      </section>
      <section id="apply">
        <div id="sub-div">
          <Modals />
          {/* <h2 className="text-large">Submit Your Video</h2>
          <p id="privacy-link" className="text-small-caps blue">
            Privacy Policy
          </p> */}
          <Form />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Apply;
