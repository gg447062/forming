const form = document.getElementById('form');
const rsvp = document.getElementById('rsvp');
const error = document.getElementById('error');
const thankYou = document.getElementById('thank-you');
const submitting = document.getElementById('submitting');
const submissionError = document.getElementById('submission-error');
const privacyPolicy = document.getElementById('privacy');
const privacyLink = document.getElementById('privacy-link');
const closeError = document.getElementById('close-err');
const closePrivacy = document.getElementById('close-privacy');
const closeButton = document.getElementById('close');
const rsvpMessage = document.getElementById('rsvp-msg-modal');
const closeRSVPMessage = document.getElementById('close-rsvp-msg');
const poster = document.getElementById('poster');
const image = document.getElementById('image');

const images = ['1', '2'];
const posters = ['1', '2'];

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
  const url = document.getElementById('url');
  const inputs = Array.from(document.getElementsByClassName('form-input'));

  if (inputs.filter((input) => !input.value).length) return false;

  if (!isValidURL(url.value)) {
    error.innerHTML = 'must be a valid url';
    error.style.paddingBottom = '1em';
    url.addEventListener('input', () => {
      error.innerHTML = '';
      error.style.paddingBottom = '';
    });
    return false;
  }

  return true;
};

const submitData = async () => {
  const name = document.getElementById('name');
  const aboutMe = document.getElementById('aboutMe');
  const twitter = document.getElementById('twitter');
  const discord = document.getElementById('discord');
  const address = document.getElementById('address');
  const url = document.getElementById('url');
  const email = document.getElementById('email');

  try {
    await axios.post('/submit', {
      name: name.value,
      aboutMe: aboutMe.value,
      twitter: twitter.value,
      discord: discord.value,
      address: address.value,
      url: url.value,
      email: email.value,
    });
    form.reset();
    submitting.style.display = 'none';
    thankYou.style.display = 'flex';
  } catch (error) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.innerHTML = error.message;
    submissionError.style.display = 'flex';
  }
};

const validateRSVP = () => {
  const rsvpAddress = document.getElementById('rsvp-address');
  const rsvpMsg = document.getElementById('rsvp-warn');
  const inputs = Array.from(document.getElementsByClassName('rsvp-input'));

  if (inputs.filter((input) => !input.value).length) {
    rsvpMsg.innerHTML = 'all fields are required';
    rsvpMsg.style.display = 'block';
    rsvp.onchange = () => {
      rsvpMsg.style.display = 'none';
    };
    return false;
  } else if (!rsvpAddress.value.includes('0x')) {
    rsvpMsg.innerHTML = 'must be 0x address, no ENS';
    rsvpMsg.style.display = 'block';
    rsvpAddress.addEventListener('input', () => {
      rsvpMsg.style.display = 'none';
    });
    return false;
  }
  return true;
};

const sendRSVP = async () => {
  const rsvpEmail = document.getElementById('rsvp-email');
  const rsvpAddress = document.getElementById('rsvp-address');
  const rsvpTwitter = document.getElementById('rsvp-twitter');
  try {
    await axios.post('/rsvp', {
      email: rsvpEmail.value,
      address: rsvpAddress.value,
      twitter: rsvpTwitter.value,
    });
    rsvp.reset();
    rsvpMessage.style.display = 'flex';
  } catch (error) {
    const rsvpMsg = document.getElementById('rsvp-msg');
    rsvpMsg.innerHTML = error.message;
    rsvpMessage.style.display = 'flex';
  }
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const validated = validateData();

  if (validated) {
    submitting.style.display = 'flex';
    await submitData();
  }
});

rsvp.addEventListener('submit', async (e) => {
  e.preventDefault();
  const validated = validateRSVP();
  if (validated) {
    await sendRSVP();
    // } else {
    // const rsvpMsg = document.getElementById('rsvp-warn');
    // rsvpMsg.style.display = 'block';
    // rsvp.onchange = () => {
    //   rsvpMsg.style.display = 'none';
    // };
  }
});

document.addEventListener('scroll', (e) => {
  const header = document.getElementById('header');
  const headerLogo = document.getElementById('header-logo');
  // const forming = document.getElementById('forming');
  // const y = (window.scrollY / 666 - 0.15).toFixed(2);
  // forming.style.letterSpacing = `${y}em`;
  const y = (window.scrollY / 666).toFixed(2);
  const antiY = (0 - window.scrollY / 666 / 10).toFixed(2);

  if (antiY > -0.16) {
    headerLogo.style.letterSpacing = `${antiY}em`;
    header.style.opacity = y;
  }
});

aboutMe.addEventListener('input', () => {
  const charCount = document.getElementById('charCount');
  const count = aboutMe.value.length;
  charCount.innerHTML = `${count}/280`;
});

privacyLink.addEventListener('click', () => {
  privacyPolicy.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
  thankYou.style.display = 'none';
});

closeError.addEventListener('click', () => {
  submissionError.style.display = 'none';
});

closePrivacy.addEventListener('click', () => {
  privacyPolicy.style.display = 'none';
});

closeRSVPMessage.addEventListener('click', () => {
  rsvpMessage.style.display = 'none';
});

const slideshow = () => {
  let i = 0;
  setInterval(() => {
    i++;
    const currentImage = images[i % images.length];
    const currentPoster = posters[i % posters.length];
    image.src = `assets/img_${currentImage}.png`;
    poster.src = `assets/poster_${currentPoster}.png`;
  }, 3000);
};

// slideshow();
