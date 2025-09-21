const form = document.getElementById('regForm');
const res  = document.getElementById('result');

form.addEventListener('submit', e => {
  e.preventDefault();

  const name   = document.getElementById('name').value.trim();
  const age    = document.getElementById('age').value.trim();
  const gender = form.gender.value;
  const color  = document.getElementById('color').value;


  document.getElementById('r-name').textContent   = name;
  document.getElementById('r-age').textContent    = age;
  document.getElementById('r-gender').textContent = gender;

  const colorSpan = document.getElementById('r-color');
  colorSpan.textContent = color;
  colorSpan.style.color = color.toLowerCase(); // make the word match chosen color

  res.hidden = false;

  // Link to data page with query params
  const q = new URLSearchParams({ name, age, gender, color }).toString();
 document.getElementById('openDisplay').href = `UserData.html?${q}`;

});
