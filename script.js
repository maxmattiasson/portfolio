const workToggle = document.getElementById('toggle-work');
const schoolToggle = document.getElementById('toggle-school');
const detailToggle = document.getElementById('toggle-details');
const workEl = document.querySelectorAll('.work');
const schoolEl = document.querySelectorAll('.school');
const detailEl = document.querySelectorAll('.details');
const buttonRight = document.getElementById('card-btn-right');
const buttonLeft = document.getElementById('card-btn-left');

let currentCompany = 0;

const content = [
    {company: "Cygni", desc: "Konsultbolag med stark utvecklarkultur. Uppdrag i modern JS/TS (React/Node) och mycket fokus på kompetensutveckling", city: "🏢 Östersund"},
    {company: "Sogeti", desc: "Stort konsultnät med trainee/Careerbooster. Bra för att bygga bredd i fullstack JS/Node + moln hos lokala kunder", city: "🏢 Östersund/Sundsvall"},
    {company: "CGI", desc: "Globalt IT-bolag med samhällsnyttiga projekt. Agila team och frontend i JavaScript", city: "🏢 Östersund/Sundsvall"},
    {company: "Startups", desc: "Snabba produktteam där man med stort ansvar kan bygga end-to-end i JS/TS", city: "🏢 Överallt"},
]

displayContent();

function toggleWork (){
        workEl.forEach(el => {
            el.classList.toggle('hide')
        })
}

function toggleSchool (){
        schoolEl.forEach(el => {
            el.classList.toggle('hide')
        })
}
function toggleDetails(){
        detailEl.forEach(el => {
        el.classList.toggle('hide')
    })
}
function displayContent(){
  const picked = content[currentCompany];
  document.getElementById('company').textContent = picked.company;
  document.getElementById('card-desc').textContent = picked.desc;
  document.getElementById('card-city').textContent = picked.city;
  }

schoolToggle.addEventListener("change", toggleSchool);
workToggle.addEventListener("change", toggleWork);
detailToggle.addEventListener("change", toggleDetails);

buttonRight.addEventListener('click', () => {
  if (currentCompany === 3) {
    currentCompany = 0
  } else currentCompany++;
    displayContent();
})
buttonLeft.addEventListener('click', () => {

    if (currentCompany === 0) {
    currentCompany = 3
  } else currentCompany--;
    displayContent();
})



