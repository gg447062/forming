import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import Header from './Header';
import Modal from './Modal';
const ASSET_URL = 'https://d11k6q9s6npo8w.cloudfront.net/forming';

function Marquee() {
  return (
    <div className="marquee-wrapper">
      <div className="marquee m1">
        <a
          className="text-large"
          href="http://juicebox.lexicondevils.xyz"
          target="_blank"
        >
          * Live @ Juicebox Transit Center *
        </a>
        <a
          className="text-large"
          href="http://juicebox.lexicondevils.xyz"
          target="_blank"
        >
          * Live @ Juicebox Transit Center *
        </a>
        <a
          className="text-large"
          href="http://juicebox.lexicondevils.xyz"
          target="_blank"
        >
          * Live @ Juicebox Transit Center *
        </a>
      </div>
      <div className="marquee m2">
        <a
          className="text-large"
          href="http://juicebox.lexicondevils.xyz"
          target="_blank"
        >
          * Live @ Juicebox Transit Center *
        </a>
        <a
          className="text-large"
          href="http://juicebox.lexicondevils.xyz"
          target="_blank"
        >
          * Live @ Juicebox Transit Center *
        </a>
        <a
          className="text-large"
          href="http://juicebox.lexicondevils.xyz"
          target="_blank"
        >
          * Live @ Juicebox Transit Center *
        </a>
      </div>
    </div>
  );
}

function RSVP() {
  const [email, setEmail] = useState('');
  const [twitter, setTwitter] = useState('');
  const [address, setAddress] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [warning, setWarning] = useState('');
  const [message, setMessage] = useState('Thanks for your RSVP!');
  const formRef = useRef();
  const addressRef = useRef();

  const validateRSVP = () => {
    const inputs = Array.from(document.getElementsByClassName('rsvp-input'));

    if (inputs.filter((input) => !input.value).length) {
      setWarning('all fields are required');
      formRef.current.onchange = () => {
        setWarning('');
      };
      return false;
    } else if (!address.includes('0x') || address.includes('.eth')) {
      setWarning('must be 0x address, no ENS');
      addressRef.current.addEventListener('input', () => {
        setWarning('');
      });
      return false;
    }
    return true;
  };

  const sendRSVP = async () => {
    const form = formRef.current;
    try {
      await axios.post('/api/rsvp', {
        email,
        address,
        twitter,
      });
      form.reset();
      setShowSuccess(true);
    } catch (error) {
      setMessage(error.message);
      setShowSuccess(true);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const validated = validateRSVP();
    if (validated) {
      await sendRSVP();
    }
  }
  return (
    <section id="rsvp-landing">
      {showSuccess && (
        <Modal setShow={setShowSuccess}>
          <h2 id="rsvp-msg">{message}</h2>
        </Modal>
      )}
      <img src={`${ASSET_URL}/winter_break.png`}></img>
      <div className="rsvp-landing--right-panel">
        <div className="heading-wrapper">
          <h1>SONGCAMP X FORMING</h1>
          <h2>Presented by Lexicon Devils and Juicebox DAO</h2>
        </div>
        <form id="rsvp" onSubmit={handleSubmit} ref={formRef}>
          <span id="rsvp-warn">{warning}</span>
          <div>
            <label>Email</label>
            <input
              id="rsvp-email"
              className="rsvp-input"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Twitter</label>
            <input
              id="rsvp-twitter"
              className="rsvp-input"
              placeholder="Twitter"
              onChange={(e) => setTwitter(e.target.value)}
            />
          </div>
          <div>
            <label>0x Address</label>
            <input
              id="rsvp-address"
              className="rsvp-input"
              placeholder="0x Address"
              onChange={(e) => setAddress(e.target.value)}
              ref={addressRef}
            />
          </div>
          <div>
            <button type="submit">RSVP</button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Logo({ myRef }) {
  return (
    <section id="logo">
      <div className="landing-video-wrapper">
        <video src={`${ASSET_URL}/vertical_no_audio.mp4`} autoPlay muted loop />
      </div>
      <div className="logo-panel">
        <div className="logo-img-wrapper">
          <img className="flash" src={`${ASSET_URL}/flash/jbx.png`} />
          <img
            className="flash"
            src={`${ASSET_URL}/flash/banny.png`}
            style={{ transform: 'scaleX(-1)' }}
          />
        </div>
        <h1 id="forming" ref={myRef}>
          FORMING
        </h1>
        <div className="h2-wrapper">
          <h2>PRESENTED BY LEXICON DEVILS</h2>
          <h2>VOL. 7 COMING SOON</h2>
        </div>
        <img className="flash" src={`${ASSET_URL}/flash/speakers.png`} />
      </div>
    </section>
  );
}

function Landing() {
  const state = 'logo';
  const logoRef = useRef();
  const formingRef = useRef();

  useEffect(() => {
    function handleScroll() {
      const headerLogo = logoRef.current;
      const forming = formingRef.current;
      const y1 = (window.scrollY / 666 - 0.15).toFixed(2);
      if (forming) {
        forming.style.letterSpacing = `${y1}em`;
      }
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
    <div>
      <Header component={'landing'} myRef={logoRef} />
      {state === 'logo' && <Logo myRef={formingRef} />}
      {state === 'rsvp' && <RSVP />}
      <section id="synopsis">
        <div>
          <img className="flash" src={`${ASSET_URL}/flash/wolf.png`}></img>
          <h2 className="text-large">
            An experimental hyperverse concert series
          </h2>
          <p>
            Forming is an experimental Hyperverse concert series hosted by the{' '}
            <a
              className="inline-links"
              href="http://web.lexicondevils.xyz/"
              target="_blank"
            >
              Lexicon Devils
            </a>{' '}
            to bring musicians, visual artists and builders together. Every
            month, we host a party at the{' '}
            <a
              className="inline-links"
              href="https://www.voxels.com/play?coords=N@6649W,240N"
              target="_blank"
            >
              Voxels Juicebox HQ
            </a>{' '}
            showcasing our curations of musicians across underground NFT
            communities. Sharing original recordings, edited and arranged into{' '}
            <a
              className="inline-links"
              href="https://www.youtube.com/channel/UCdVQneduBYdjgHngd5zR79A"
              target="_blank"
            >
              thematic volumes
            </a>{' '}
            streamed live into our 3D environment, organized with a dedicated{' '}
            <a
              className="inline-links"
              href="https://juicebox.money/@forming"
              target="_blank"
            >
              Juicebox Treasury
            </a>{' '}
            to demonstrate how artists can approach Web3 and Metaverse.
          </p>
          <img className="flash" src={`${ASSET_URL}/flash/world.png`}></img>
        </div>
        <div className="landing-video-wrapper">
          <video
            src={`${ASSET_URL}/vertical_no_audio.mp4`}
            autoPlay
            muted
            loop
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Landing;
