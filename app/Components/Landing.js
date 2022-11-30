import React from 'react';
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

function RSVP() {
  return (
    <section id="img-intro">
      <div id="rsvp-msg-modal" className="modal">
        <h2 id="rsvp-msg">Thanks for your RSVP!</h2>
        <div id="close-rsvp-msg" className="close-button">
          X
        </div>
      </div>
      <p id="rsvp-warn"></p>
      <form id="rsvp" method="POST" action="/rsvp">
        <input id="rsvp-email" className="rsvp-input" placeholder="Email" />
        <input
          id="rsvp-address"
          className="rsvp-input"
          placeholder="0x Address"
        />
        <input id="rsvp-twitter" className="rsvp-input" placeholder="Twitter" />
        <button type="submit">RSVP</button>
      </form>
    </section>
  );
}

function Logo() {
  return (
    <section id="intro">
      <h1 id="forming">FORMING</h1>
      <div>
        <h2>PRESENTED BY LEXICON DEVILS</h2>
        <h2>VOL. 6 COMING SOON</h2>
      </div>
    </section>
  );
}

function Landing() {
  return (
    <div>
      {/* <Marquee /> */}
      <Header component={'landing'} />
      <Logo />
      <section id="banner"></section>
      <section id="synopsis">
        <img
          className="image"
          src="https://d11k6q9s6npo8w.cloudfront.net/forming/forming_white_bg.png"
        />
        <div>
          <h2 className="text-large">
            An experimental hyperverse concert series
          </h2>
          <p>
            Forming is an experimental Hyperverse concert series hosted by the
            <a
              className="inline-links"
              href="http://web.lexicondevils.xyz/"
              target="_blank"
            >
              Lexicon Devils
            </a>
            to bring musicians, visual artists and builders together. Every
            month, we host a party at the
            <a
              className="inline-links"
              href="https://www.voxels.com/play?coords=N@6649W,240N"
              target="_blank"
            >
              Voxels Juicebox HQ
            </a>
            showcasing our curations of musicians across underground NFT
            communities. Sharing original recordings, edited and arranged into
            <a
              className="inline-links"
              href="https://www.youtube.com/channel/UCdVQneduBYdjgHngd5zR79A"
              target="_blank"
            >
              thematic volumes
            </a>
            streamed live into our 3D environment, organized with a dedicated
            <a
              className="inline-links"
              href="https://www.juicebox.money/v2/p/66"
              target="_blank"
            >
              Juicebox Treasury
            </a>
            to demonstrate how artists can approach Web3 and Metaverse.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Landing;
