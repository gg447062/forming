import React, { useEffect, useRef } from 'react';
import Footer from './Footer';
import Header from './Header';

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

function Modal() {
  return (
    <div id="rsvp-msg-modal" className="modal">
      <h2 id="rsvp-msg">Thanks for your RSVP!</h2>
      <div id="close-rsvp-msg" className="close-button">
        X
      </div>
    </div>
  );
}

function RSVP() {
  return (
    <section id="rsvp-landing">
      {/* <Modal /> */}
      <img src="assets/formingxallstarz_mobile.png"></img>
      <div className="rsvp-landing--right-panel">
        <div className="heading-wrapper">
          <h1>SONGCAMP X FORMING</h1>
          <h2>Presented by Lexicon Devils and Juicebox DAO</h2>
        </div>

        <form id="rsvp" method="POST" action="/rsvp">
          <div>
            <label>Email</label>
            <input id="rsvp-email" className="rsvp-input" placeholder="Email" />
          </div>
          <div>
            <label>Twitter</label>
            <input
              id="rsvp-twitter"
              className="rsvp-input"
              placeholder="Twitter"
            />
          </div>
          <div>
            <label>
              0x Address <span id="rsvp-warn"></span>
            </label>
            <input
              id="rsvp-address"
              className="rsvp-input"
              placeholder="0x Address"
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
      <div className="logo-panel">
        <div className="logo-img-wrapper">
          <img className="flash" src="assets/jbx.png" />
          <img
            className="flash"
            src="assets/banny.png"
            style={{ transform: 'scaleX(-1)' }}
          />
        </div>
        <h1 id="forming" ref={myRef}>
          FORMING
        </h1>
        <div className="h2-wrapper">
          <h2>PRESENTED BY LEXICON DEVILS</h2>
          <h2>VOL. 6 COMING SOON</h2>
        </div>
        <img className="flash" src="assets/speakers.png" />
      </div>
    </section>
  );
}

function Landing() {
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
      <Logo myRef={formingRef} />
      {/* <RSVP /> */}
      <section id="synopsis">
        <div>
          <img className="flash" src="assets/wolf.png"></img>
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
          <img className="flash" src="assets/world.png"></img>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Landing;
