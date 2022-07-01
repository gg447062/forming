const form = document.getElementById('form');
const forming = document.getElementById('forming');
const name = document.getElementById('name');
const aboutMe = document.getElementById('aboutMe');
const twitter = document.getElementById('twitter');
const discord = document.getElementById('discord');
const address = document.getElementById('address');
const url = document.getElementById('url');
const charCount = document.getElementById('charCount');
const error = document.getElementById('error');
const thankYou = document.getElementById('thank-you');
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
    error.innerHTML = 'please add a valid url';
    url.addEventListener('input', () => {
      error.innerHTML = '';
    });
    return false;
  }

  return true;
};

const submitData = async () => {
  try {
    await axios.post('/submit', {
      name: name.value,
      aboutMe: aboutMe.value,
      twitter: twitter.value,
      discord: discord.value,
      address: address.value,
      url: url.value,
    });

    form.reset();
  } catch (error) {
    console.log(error);
  }
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const validated = validateData();

  if (validated) {
    await submitData();
    thankYou.style.display = 'flex';
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
