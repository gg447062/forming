const form = document.getElementById('form');
const forming = document.getElementById('forming');
const intro = document.getElementById('intro');
const header = document.getElementById('header');
const headerLogo = document.getElementById('header-logo');
const name = document.getElementById('name');
const aboutMe = document.getElementById('aboutMe');
const twitter = document.getElementById('twitter');
const discord = document.getElementById('discord');
const address = document.getElementById('address');
const url = document.getElementById('url');
const email = document.getElementById('email');
const charCount = document.getElementById('charCount');
const error = document.getElementById('error');
const thankYou = document.getElementById('thank-you');
const submitting = document.getElementById('submitting');
const submissionError = document.getElementById('submission-error');
const errorMessage = document.getElementById('error-message');
const privacyPolicy = document.getElementById('privacy');
const privacyLink = document.getElementById('privacy-link');
const closeError = document.getElementById('close-err');
const closePrivacy = document.getElementById('close-privacy');
const closeButton = document.getElementById('close');
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
  try {
    const response = await axios.post('/submit', {
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
    errorMessage.innerHTML = error.message;
    submissionError.style.display = 'flex';
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

document.addEventListener('scroll', (e) => {
  const y = (window.scrollY / 666 - 0.15).toFixed(2);
  const antiY = (0 - window.scrollY / 666 / 10).toFixed(2);
  console.log(antiY);

  if (antiY > -0.16) {
    headerLogo.style.letterSpacing = `${antiY}em`;
    header.style.opacity = y;
  }
  // forming.style.letterSpacing = `${y}em`;
});

aboutMe.addEventListener('input', () => {
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
