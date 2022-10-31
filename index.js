const toggle = document.querySelector('#toggle')
const monthly = document.querySelectorAll('.price__monthly')
const yearly = document.querySelectorAll('.price__annually')

toggle.addEventListener('click', (e) => {
    if (!e.target.checked) {
        yearly.forEach(b => b.classList.add('yearlyHidden'))
        monthly.forEach(b => b.classList.remove('monthlyHidden'))
    } else {
        yearly.forEach(b => b.classList.remove('yearlyHidden'))
        monthly.forEach(b => b.classList.add('monthlyHidden'))
    }
})