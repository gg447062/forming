import React from 'react';
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
          <div>
            <span id="error"></span>
            <input id="url" placeholder="Video URL" />
          </div>
          <div>
            <input id="email" placeholder="Email" />
          </div>
          <div>
            <input id="discord" placeholder="Discord" />
          </div>
          <div>
            <input id="address" placeholder="ETH Address" />
          </div>
        </div>
        <div className="form-field">
          <div>
            <input id="twitter" placeholder="Twitter" />
          </div>
          <div>
            <input id="name" placeholder="Preferred Name" />
          </div>

          <div>
            <textarea
              id="aboutMe"
              maxLength="280"
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
  );
}

function Apply() {
  return (
    <div>
      <Header component={'apply'} />
      <h1 className="apply-header">Artist Submissions</h1>
      <section id="details">
        <div>
          <h2 className="text-large">Submission Guidelines</h2>
          <p>
            Both DJ & live sets are welcome of original, unreleased
            performances! We encourage the use of visualizers, video edits, or
            any visual representation an artist prefers. Each month, we will
            feature our favorites within a specified theme announced on our
            <a
              className="inline-links"
              href="https://twitter.com/forming__"
              target="_blank"
            >
              Twitter
            </a>
            . Artists are welcome to resubmit every month! Our selection will be
            added to the payout list of our
            <a
              className="inline-links"
              href="https://www.juicebox.money/v2/p/66"
              target="_blank"
            >
              Juicebox Treasury
            </a>
            . Finalized submissions should aim to be around 10-15 minutes long,
            due at pre-specified dates a few days before each upcoming event.
          </p>

          <div id="dt-links" className="mt-small">
            <Link className="text-small-caps" to="/faq">
              FAQ
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-large">Funding</h2>
          <p>
            Artists recieve a transparent split of funds payed into the{' '}
            <a href="https://juicebox.money/@forming" target="_blank">
              FORMING
            </a>{' '}
            juicebox for as long as their work being showcased.
          </p>
        </div>
      </section>
      <section id="apply">
        <div id="sub-div">
          <Modals />
          <h2 className="text-large">Submit Your Video</h2>
          <p>
            These videos should have the opportunity to premier at the event but
            in the case that your clip isn't selected, it's of course yours to
            release as you wish!
          </p>
          <p id="privacy-link" className="text-small-caps blue">
            Privacy Policy
          </p>
          <Form />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Apply;
