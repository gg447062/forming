import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import Modal from './Modal';
import { Link } from 'react-router-dom';
const ASSET_URL = 'https://d11k6q9s6npo8w.cloudfront.net/forming';

function Form({ showSuccess, showSubmitting, showError, setError }) {
  const [urlError, setUrlError] = useState('');
  const [charCount, setCharCount] = useState(0);
  const [name, setName] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [twitter, setTwitter] = useState('');
  const [discord, setDiscord] = useState('');
  const [address, setAddress] = useState('');
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const formRef = useRef();

  const isValidURL = (string) => {
    let url;

    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }

    return url.protocol === 'http:' || url.protocol === 'https:';
  };

  const validateData = () => {
    const inputs = Array.from(document.getElementsByClassName('form-input'));

    if (inputs.filter((input) => !input.value).length) return false;

    if (!isValidURL(url)) {
      setUrlError('must be a valid url');
      const urlInput = document.getElementById('url');
      urlInput.addEventListener('input', () => {
        setUrlError('');
      });
      return false;
    }

    return true;
  };

  const submitData = async () => {
    const form = formRef.current;

    try {
      await axios.post('/api/submit', {
        name,
        aboutMe,
        twitter,
        discord,
        address,
        url,
        email,
      });
      form.reset();
      setAboutMe('');
      showSubmitting(false);
      showSuccess(true);
    } catch (error) {
      setError(error.message);
      showError(true);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const validated = validateData();

    if (validated) {
      showSubmitting(true);
      await submitData();
    }
  }
  return (
    <form id="form" onSubmit={handleSubmit} ref={formRef}>
      <div className="form-inner-wrapper">
        <div className="form-field">
          <h2 className="text-large">Performance & Payroll</h2>
          <p>
            We use this info to access the edit of your performance, map funds
            to your wallet address, & contact you with necessary info about the
            show.
          </p>
          <div>
            <label>
              Video URL <span id="error">{`${urlError}`}</span>
            </label>
            <input
              id="url"
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Discord</label>
            <input
              id="discord"
              onChange={(e) => {
                setDiscord(e.target.value);
              }}
            />
          </div>
          <div>
            <label>ETH Address</label>
            <input
              id="address"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
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
            <input
              id="twitter"
              onChange={(e) => {
                setTwitter(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Preferred Name</label>
            <input
              id="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <label>About Me</label>
            <textarea
              id="aboutMe"
              maxLength="280"
              value={aboutMe}
              onChange={(e) => {
                setAboutMe(e.target.value);
                setCharCount(e.target.value.length);
              }}
            ></textarea>
            <p id="charCount">{`${charCount}/280`}</p>
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
  const [showSuccess, setShowSuccess] = useState(false);
  const [showSubmitting, setShowSubmitting] = useState(false);
  const [showSubmissionError, setShowSubmissionError] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [submissionError, setSubmissionError] = useState('');

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
            <img src={`${ASSET_URL}/flash/comp.png`} />
            <img src={`${ASSET_URL}/flash/eth.png`} />
          </div>
        </div>
      </section>
      <section id="apply">
        <div id="sub-div">
          {showPrivacy && (
            <Modal setShow={setShowPrivacy}>
              <p>
                Lexicon Devils won’t share your information or your video
                submissions without your explicit permission. Please be sure to
                submit an unlisted youtube video of content recorded
                specifically for FORMING.
              </p>
              <p>
                These videos should have the opportunity to premier at the event
                but in the case that your clip isn't selected, it's of course
                yours to release as you wish!
              </p>
            </Modal>
          )}
          {showSuccess && (
            <Modal setShow={setShowSuccess}>
              <h2>Thanks for your submission!</h2>
              <p>
                Please follow{' '}
                <a href="https://twitter.com/lexicon_devils" target="_blank">
                  @lexicon_devils
                </a>{' '}
                on twitter for announcements.
              </p>
              <p>You can expect to hear from us two days before the event.</p>
              <p>
                Join our{' '}
                <a href="https://discord.gg/Trjv9nA7c9" target="_blank">
                  Discord
                </a>{' '}
                channel.
              </p>
            </Modal>
          )}
          {showSubmitting && (
            <Modal id="submitting" setShow={setShowSubmitting}>
              <h2>SUBMITTING...</h2>
            </Modal>
          )}
          {showSubmissionError && (
            <Modal setShow={setShowSubmissionError}>
              <h2>An error occured:</h2>
              <p id="error-message">{submissionError}</p>
            </Modal>
          )}
          <Form
            showError={setShowSubmissionError}
            showSubmitting={setShowSubmitting}
            showSuccess={setShowSuccess}
            setError={setSubmissionError}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Apply;
