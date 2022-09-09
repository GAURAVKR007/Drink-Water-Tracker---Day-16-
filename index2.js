const smallCups = document.querySelectorAll('.cup-small')
const listers = document.getElementById('litres')
const perecentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup,idx) => {
    cup.addEventListener('click',()=>{
        cup.classList.toggle('full')
        updateBigCup()
    })
   
})

// function highlightCups(idx){

    // if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
    //         idx--;
    // }

    // smallCups.forEach((cup, idx2) => {
    //     if(idx2 <= idx) {
    //         cup.classList.add('full')
    //     }else {
    //         cup.classList.remove('full')
    //     }
    // })


//     updateBigCup()
// }

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length

    const totalCups = smallCups.length

    if(fullCups === 0 ) {
        perecentage.style.visibility = 'hidden'
        perecentage.style.height = 0
    }else {
        perecentage.style.visibility = 'visible'
        perecentage.style.height = `${fullCups / totalCups * 330}px`
        perecentage.innerText = `${fullCups/ totalCups * 100}%`
    }

    if(fullCups === totalCups){
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    }else {
        remained.style.visibility = 'visible'
        listers.innerText = `${2-(250 * fullCups /1000)}L`
    }
}