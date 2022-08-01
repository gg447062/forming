const form = document.getElementById('form');
const forming = document.getElementById('forming');
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
const submissionError = document.getElementById('submission-error');
const errorMessage = document.getElementById('error-message');
const closeError = document.getElementById('close-err');
const closeButton = document.getElementById('close');

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
    url.addEventListener('input', () => {
      error.innerHTML = '';
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
    await submitData();
  }
});

document.addEventListener('scroll', () => {
  const y = (window.scrollY / 666 - 0.15).toFixed(2);
  forming.style.letterSpacing = `${y}em`;
});

aboutMe.addEventListener('input', () => {
  const count = aboutMe.value.length;
  charCount.innerHTML = `${count}/280`;
});

closeButton.addEventListener('click', () => {
  thankYou.style.display = 'none';
});

closeError.addEventListener('click', () => {
  submissionError.style.display = 'none';
});
