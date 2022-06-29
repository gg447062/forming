const form = document.getElementById('form');
const forming = document.getElementById('forming');

const submitData = async () => {
  try {
    const name = document.getElementById('name').value;
    const aboutMe = document.getElementById('aboutMe').value;
    const twitter = document.getElementById('twitter').value;
    const discord = document.getElementById('discord').value;
    const address = document.getElementById('address').value;
    const url = document.getElementById('url').value;

    const res = await axios.post('/submit', {
      name,
      aboutMe,
      twitter,
      discord,
      address,
      url,
    });

    form.reset();
    alert(res.data);
  } catch (error) {
    console.log(error);
  }
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  await submitData();
});

const moveForming = (y) => {
  forming.style.letterSpacing = `${y}em`;
};

document.addEventListener('scroll', (e) => {
  const y = (window.scrollY / 666 - 0.15).toFixed(2);
  moveForming(y);
});
