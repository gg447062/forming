import React from 'react';
import { Link } from 'react-router-dom';
const ASSET_URL = 'https://d11k6q9s6npo8w.cloudfront.net/forming';

function LandingLinks() {
  return (
    <div>
      <a className="text-medium" href="#synopsis">
        About
      </a>
      <Link className="text-medium" to="/apply">
        Apply
      </Link>
    </div>
  );
}

function ApplyLinks() {
  return (
    <div>
      <Link className="text-medium" to="/">
        Home
      </Link>
      <a className="text-medium" href="#apply">
        Apply
      </a>
    </div>
  );
}

function FAQLinks() {
  return (
    <div id="faq-header-link">
      <Link className="text-medium" to="/">
        Home
      </Link>
    </div>
  );
}

function Header({ component, myRef }) {
  return (
    <header id="header">
      <p id="header-logo" ref={myRef}>
        FORMING
      </p>
      <div>
        <a href="https://discord.gg/Bmb33DsxV2" target="_blank">
          <img
            className="header-link"
            src={`${ASSET_URL}/discord-black.svg`}
            alt="discord logo"
          />
        </a>
        <a href="https://twitter.com/lexicon_devils" target="_blank">
          <img
            className="header-link"
            src={`${ASSET_URL}/twitter-black.svg`}
            alt="twitter logo"
          />
        </a>
      </div>
      {component == 'landing' && <LandingLinks />}
      {component == 'apply' && <ApplyLinks />}
      {component == 'faq' && <FAQLinks />}
    </header>
  );
}

export default Header;
