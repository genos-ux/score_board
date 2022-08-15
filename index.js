const addEL = document.querySelector('.add');

const resetEl = document.querySelector('.reset');

const subEl = document.querySelector('.sub');

const one = document.querySelector('.one');

const subTel = document.querySelector('.subt');

const restEl = document.querySelector('.rest');

const id_one = document.getElementById('one');

const plusEL = document.querySelector('.plus');

const disp = document.querySelector('.display');

const displa = document.getElementById('displa');

addEL.addEventListener('click', ()=> {
    one.textContent ++;

})




subTel.addEventListener('click', ()=> {

    

    if(id_one.textContent == 0){
        id_one.textContent = 0;

    }
    else{
        id_one.textContent--;
    }

    
    

})

restEl.addEventListener('click', ()=> {
    id_one.textContent = 0;

})

plusEL.addEventListener('click', ()=> {
    id_one.textContent++;

})

resetEl.addEventListener('click' , ()=> {
    one.textContent = 0;
})

subEl.addEventListener('click' , ()=> {
    if(one.textContent == 0){
        one.textContent = 0;

    }
    else{
        one.textContent--;
    }
})