const paidSalaryShowDetailsButtons = document.querySelectorAll('.paid-salary__show-details-button')
let paidSalaryShowDetailsIcon;
let paidSalaryHeader;
let paidSalaryDetails;
let paidSalaryMainElem;

paidSalaryShowDetailsButtons.forEach(paidSalaryShowDetailsButton =>{

    paidSalaryShowDetailsButton.addEventListener('click',event=>{
        paidSalaryMainElem = event.target.parentElement.parentElement.parentElement
        paidSalaryDetails = paidSalaryMainElem.querySelector('.paid-salary__details')
        paidSalaryHeader = paidSalaryMainElem.querySelector('.paid-salary__header')
        paidSalaryShowDetailsIcon = paidSalaryMainElem.querySelector('.paid-salary__show-details-icon')

        if (paidSalaryDetails.dataset.status === 'close'){
            paidSalaryDetails.style.height = paidSalaryDetails.scrollHeight + 'px'
            paidSalaryDetails.style.marginTop = '2rem'
            paidSalaryDetails.dataset.status = 'open'
            paidSalaryDetails.parentElement.style.borderColor = '#3282B8'
            paidSalaryHeader.classList.toggle('active-payslip')
            paidSalaryShowDetailsIcon.classList.toggle('active-salary-icon')
        }else {
            paidSalaryDetails.dataset.status = 'close'
            paidSalaryDetails.style.height = '0'
            paidSalaryDetails.style.marginTop = '0'
            paidSalaryDetails.parentElement.style.borderColor = '#BBE1FA'
            paidSalaryHeader.classList.toggle('active-payslip')
            paidSalaryShowDetailsIcon.classList.toggle('active-salary-icon')
        }

    })
})
