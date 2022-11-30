import React from 'react';
import Footer from './Footer';
import Header from './Header';

function FAQ() {
  return (
    <div>
      <Header component={'faq'} />
      <section id="faq">
        <div>
          <p className="faq-title">What type of music do you showcase?</p>
          <p>We showcase DJ + Live sets of almost any genre!</p>
        </div>
        <div>
          <p className="faq-title">Can I use a music video?</p>
          <p>
            We ask that you submit original recordings for FORMING, you can play
            recorded songs in a DJ set. If you record a MV just for the
            submission that is fine!
          </p>
        </div>
        <div>
          <p className="faq-title">What type of visuals should I use?</p>
          <p>
            Completely up to the artist! We have showcased visualizers, video
            edits, raw sets and many other visual representations, whatever the
            artist prefers.
          </p>
        </div>
        <div>
          <p className="faq-title">Why can’t I stream live?</p>
          <p>
            Due to technical difficulties for routing the stream and combining
            with our sketch edits, we find the program runs smoother if we edit
            all the submissions into a video to stream at the event.
          </p>
        </div>
        <div>
          <p className="faq-title">How long should submissions be?</p>
          <p>Please aim to keep your video 10 minutes long or less.</p>
        </div>
        <div>
          <p className="faq-title">How should I submit my file?</p>
          <p>
            We recommend an unlisted youtube video. However, you can also upload
            it to google drive, dropbox, mega, etc.
          </p>
        </div>
        <div>
          <p className="faq-title">Where will the event happen?</p>
          <p>
            At the
            <a href="http://juicebox.lexicondevils.xyz/" target="_blank">
              Voxels Juicebox HQ
            </a>
          </p>
        </div>
        <div>
          <p className="faq-title">Will I get paid?</p>
          <p>
            If your video submission gets selected for our monthly program, we
            will include you in the FORMING Juicebox that will store funds
            raised for 2 weeks leading up to and after the event.
          </p>
        </div>
        <div>
          <p className="faq-title">How much will I get paid?</p>
          <p>
            Depending on how much funds are raised for the funding cycle, this
            amount can vary and is completely dependent on contributions. On
            average we have seen .4-.5 ETH get distributed to each artist, we
            encourage them to promote the event for better chance at hyping
            others to contribute to the Juicebox.
          </p>
        </div>
        <div>
          <p className="faq-title">When do I get paid?</p>
          <p>
            When all the artists are selected, they will be added to the payout
            list for the
            <a href="https://juicebox.money/#/v2/p/66" target="_blank">
              FORMING Juicebox
            </a>
            technically, funds can be released anytime by anyone to the payees.
            However, at the end of the live event we will “Press the button” so
            artists can see the payout happen on the
            <a href="https://juicebox.money" target="_blank">
              Juicebox protocol
            </a>
            .
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default FAQ;
