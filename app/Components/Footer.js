import React from 'react';
const ASSET_URL = 'https://d11k6q9s6npo8w.cloudfront.net/forming';

function Footer() {
  return (
    <footer>
      <div>
        <a
          className="footer-link"
          href="https://www.voxels.com/play?coords=SW@6648W,270N"
          target="_blank"
        >
          Juicebox Learning Center
        </a>
        <a
          className="footer-link"
          href="https://juicebox.money/@forming"
          target="_blank"
        >
          Forming Juicebox
        </a>
        <a
          className="footer-link"
          href="http://web.lexicondevils.xyz"
          target="_blank"
        >
          Lexicon Devils
        </a>
        <a
          className="footer-link"
          href="https://juicebox.money"
          target="_blank"
        >
          Juicebox
        </a>
      </div>
      <p>Lexicon Devils 2022 Do Your Crazy Thing</p>
      <div className="logo-links-container">
        <a href="https://soundcloud.com/lexicondevils" target="_blank">
          <img
            className="logo-link"
            src={`${ASSET_URL}/soundcloud.svg`}
            alt="soundcloud logo"
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCdVQneduBYdjgHngd5zR79A"
          target="_blank"
        >
          <img
            className="logo-link"
            src={`${ASSET_URL}/youtube.svg`}
            alt="youtube logo"
          />
        </a>
        <a href="https://discord.gg/Bmb33DsxV2" target="_blank">
          <img
            className="logo-link"
            src={`${ASSET_URL}/discord.svg`}
            alt="discord logo"
          />
        </a>
        <a href="https://twitter.com/lexicon_devils" target="_blank">
          <img
            className="logo-link"
            src={`${ASSET_URL}/twitter.svg`}
            alt="twitter logo"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
