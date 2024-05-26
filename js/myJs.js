let menu = document.querySelector('#pulsanteMenu')
let dropDown = document.querySelector('#dropDownMenu')

menu.addEventListener('click', () => {
   
    if(dropDown.classList.contains('d-none')){
        
        dropDown.classList.remove('d-none')

    }else{
        dropDown.classList.add('d-none')
    }
    
})