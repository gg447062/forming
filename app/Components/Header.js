import React from 'react';
import { Link } from 'react-router-dom';

function LandingLinks() {
  return (
    <div>
      <a className="text-large" href="#synopsis">
        About
      </a>
      <Link className="text-large" to="/apply">
        Apply
      </Link>
    </div>
  );
}

function ApplyLinks() {
  return (
    <div>
      <Link className="text-large" to="/">
        Home
      </Link>
      <a className="text-large" href="#apply">
        Apply
      </a>
    </div>
  );
}

function FAQLinks() {
  return (
    <div id="faq-header-link">
      <Link className="text-large" to="/">
        Home
      </Link>
    </div>
  );
}

function Header({ component }) {
  return (
    <header id="header">
      <p id="header-logo">FORMING</p>
      <div>
        <a href="https://discord.gg/Bmb33DsxV2" target="_blank">
          <img
            className="header-link"
            src="assets/discord-black.svg"
            alt="discord logo"
          />
        </a>
        <a href="https://twitter.com/lexicon_devils" target="_blank">
          <img
            className="header-link"
            src="assets/twitter-black.svg"
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
