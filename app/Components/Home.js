import React from 'react';
import axios from 'axios';

function Home() {
  return (
    <div>
      <div class="marquee-wrapper">
        <div class="marquee m1">
          <a
            class="text-large"
            href="http://juicebox.lexicondevils.xyz"
            target="_blank"
          >
            * Live @ Juicebox Transit Center *
          </a>
          <a
            class="text-large"
            href="http://juicebox.lexicondevils.xyz"
            target="_blank"
          >
            * Live @ Juicebox Transit Center *
          </a>
          <a
            class="text-large"
            href="http://juicebox.lexicondevils.xyz"
            target="_blank"
          >
            * Live @ Juicebox Transit Center *
          </a>
        </div>
        <div class="marquee m2">
          <a
            class="text-large"
            href="http://juicebox.lexicondevils.xyz"
            target="_blank"
          >
            * Live @ Juicebox Transit Center *
          </a>
          <a
            class="text-large"
            href="http://juicebox.lexicondevils.xyz"
            target="_blank"
          >
            * Live @ Juicebox Transit Center *
          </a>
          <a
            class="text-large"
            href="http://juicebox.lexicondevils.xyz"
            target="_blank"
          >
            * Live @ Juicebox Transit Center *
          </a>
        </div>
      </div>
      <header id="header">
        <p id="header-logo">FORMING</p>
        <div>
          <a
            href="https://www.youtube.com/channel/UCdVQneduBYdjgHngd5zR79A"
            target="_blank"
          >
            <img
              class="header-link"
              src="assets/youtube.png"
              alt="youtube logo"
            />
          </a>
          <a href="https://twitter.com/lexicon_devils" target="_blank">
            <img
              class="header-link"
              src="assets/twitter.png"
              alt="twitter logo"
            />
          </a>
        </div>
        <div>
          <a class="text-large" href="#synopsis">
            About
          </a>
          <a class="text-large" href="#apply">
            Apply
          </a>
        </div>
        {/* <i class="fa-solid fa-bars fa-2xl md-up-hide header-sm-menu"></i>  */}
      </header>
      <section id="intro">
        <h1 id="forming">FORMING</h1>
        <div>
          <h2>PRESENTED BY LEXICON DEVILS</h2>
          <h2>VOL. 6 COMING SOON</h2>
        </div>
      </section>
      {/* <section id="img-intro">
        <div id="rsvp-msg-modal" class="modal">
          <h2 id="rsvp-msg">Thanks for your RSVP!</h2>
          <div id="close-rsvp-msg" class="close-button">X</div>
        </div>
        <p id="rsvp-warn"></p>
        <form id="rsvp" method="POST" action="/rsvp">
          <input id="rsvp-email" class="rsvp-input" placeholder="Email" />
          <input
            id="rsvp-address"
            class="rsvp-input"
            placeholder="0x Address"
          />
          <input id="rsvp-twitter" class="rsvp-input" placeholder="Twitter" />
          <button type="submit">RSVP</button>
        </form>
      </section> */}
      <section id="banner"></section>
      <section id="synopsis">
        <img
          class="image"
          src="https://d11k6q9s6npo8w.cloudfront.net/forming/forming_white_bg.png"
        />
        <div>
          <h2 class="text-large">An experimental hyperverse concert series</h2>
          <p>
            Forming is an experimental Hyperverse concert series hosted by the
            <a
              class="inline-links"
              href="http://web.lexicondevils.xyz/"
              target="_blank"
            >
              Lexicon Devils
            </a>
            to bring musicians, visual artists and builders together. Every
            month, we host a party at the
            <a
              class="inline-links"
              href="https://www.voxels.com/play?coords=N@6649W,240N"
              target="_blank"
            >
              Voxels Juicebox HQ
            </a>
            showcasing our curations of musicians across underground NFT
            communities. Sharing original recordings, edited and arranged into
            <a
              class="inline-links"
              href="https://www.youtube.com/channel/UCdVQneduBYdjgHngd5zR79A"
              target="_blank"
            >
              thematic volumes
            </a>
            streamed live into our 3D environment, organized with a dedicated
            <a
              class="inline-links"
              href="https://www.juicebox.money/v2/p/66"
              target="_blank"
            >
              Juicebox Treasury
            </a>
            to demonstrate how artists can approach Web3 and Metaverse.
          </p>
        </div>
      </section>
      <section id="details">
        <div>
          <h2 class="text-large">Submissions</h2>
          <p>
            Both DJ & live sets are welcome of original, unreleased
            performances! We encourage the use of visualizers, video edits, or
            any visual representation an artist prefers. Each month, we will
            feature our favorites within a specified theme announced on our
            <a
              class="inline-links"
              href="https://twitter.com/forming__"
              target="_blank"
            >
              Twitter
            </a>
            . Artists are welcome to resubmit every month! Our selection will be
            added to the payout list of our
            <a
              class="inline-links"
              href="https://www.juicebox.money/v2/p/66"
              target="_blank"
            >
              Juicebox Treasury
            </a>
            . Finalized submissions should aim to be around 10-15 minutes long,
            due at pre-specified dates a few days before each upcoming event.
          </p>

          <div id="dt-links" class="mt-small">
            <a class="text-small-caps" href="#apply">
              Apply
            </a>
            <a class="text-small-caps" href="faq.html">
              FAQ
            </a>
          </div>
        </div>
        <div>
          <h2 class="text-large">Funding</h2>
          <p>
            Using
            <a
              class="inline-links"
              href="https://juicebox.money/"
              target="_blank"
            >
              Juicebox
            </a>
            to handle crowdfunding and payment distribution in a transparent
            manner, 2 weeks leading up to each event, all funds received in our
            treasury will be distributed to the selected Volume's artists at the
            premier. 2 weeks after, we will release funds again before removing
            their addresses from the payout list so ongoing funds will be
            directed towards the next volume. Funding amounts vary by community
            support within every cycle, with all proceeds going to the showcased
            performers.
          </p>

          <a
            class="mt-small text-small-caps"
            href="https://juicebox.money/#/v2/p/66"
            target="_blank"
          >
            Forming Juicebox
          </a>
        </div>
      </section>
      <section id="apply">
        <div id="submission-error" class="modal">
          <h2>An error occured:</h2>
          <p id="error-message"></p>
          <div id="close-err" class="close-button">
            X
          </div>
        </div>
        <div id="submitting" class="modal">
          <h2>Submitting...</h2>
        </div>
        <div id="thank-you" class="modal">
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
          <div id="close" class="close-button">
            X
          </div>
        </div>
        <div id="privacy" class="modal">
          <p>
            Lexicon Devils won’t share your information or your video
            submissions without your explicit permission. Please be sure to
            submit an unlisted youtube video of content recorded specifically
            for FORMING.
          </p>
          <div id="close-privacy" class="close-button">
            X
          </div>
        </div>
        <div id="sub-div">
          <h2 class="text-large">Submit Your Video</h2>
          <p>
            These videos should have the opportunity to premier at the event but
            in the case that your clip isn't selected, it's of course yours to
            release as you wish!
          </p>
          <p id="privacy-link" class="text-small-caps blue">
            Privacy Policy
          </p>

          <form id="form" method="POST" action="/submit">
            <div class="form-inner-wrapper">
              <div class="form-field">
                <div>
                  <input id="name" placeholder="Preferred Name" />
                </div>
                <div>
                  <input id="address" placeholder="ETH Address" />
                </div>
                <div>
                  <input id="email" placeholder="Email" />
                </div>
                <div>
                  <span id="error"></span>
                  <input id="url" placeholder="Video URL" />
                </div>
              </div>
              <div class="form-field">
                <div>
                  <input id="twitter" placeholder="Twitter" />
                </div>
                <div>
                  <input id="discord" placeholder="Discord" />
                </div>
                <div>
                  <textarea
                    id="aboutMe"
                    maxlength="280"
                    placeholder="About Me"
                  ></textarea>
                  <p id="charCount">0/280</p>
                </div>
              </div>
            </div>
            <button id="submit" form="form" type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
      <footer>
        <div>
          <a href="http://juicebox.lexicondevils.xyz" target="_blank">
            Juicebox Transit Center
          </a>
          <a
            href="https://www.voxels.com/play?coords=SW@6648W,270N"
            target="_blank"
          >
            Juicebox Learning Center
          </a>
          <a href="https://juicebox.money/p/lexicondevils" target="_blank">
            Lexicon Devils Juicebox
          </a>
          <a href="https://juicebox.money/#/v2/p/66" target="_blank">
            Forming Juicebox
          </a>
          <a href="https://juicebox.money" target="_blank">
            juicebox.money
          </a>
          <a href="http://web.lexicondevils.xyz" target="_blank">
            web.lexicondevils.xyz
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/channel/UCdVQneduBYdjgHngd5zR79A"
            target="_blank"
          >
            <img
              class="logo-link"
              src="assets/youtube.png"
              alt="youtube logo"
            />
          </a>
          <a href="https://twitter.com/lexicon_devils" target="_blank">
            <img
              class="logo-link"
              src="assets/twitter.png"
              alt="twitter logo"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
