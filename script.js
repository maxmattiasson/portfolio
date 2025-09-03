const workToggle = document.getElementById('toggle-work');
const schoolToggle = document.getElementById('toggle-school');
const detailToggle = document.getElementById('toggle-details');
const workEl = document.querySelectorAll('.work');
const schoolEl = document.querySelectorAll('.school');
const detailEl = document.querySelectorAll('.details');

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


schoolToggle.addEventListener("change", toggleSchool);
workToggle.addEventListener("change", toggleWork);
detailToggle.addEventListener("change", toggleDetails);