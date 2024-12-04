//отримує кнопку з HTML по ID
const button = document.querySelector('#button')
button.addEventListener('click', () => {
     
    console.log('button clicked')
    fetch('./create/', {
     
        method: 'POST',
        
        body: JSON.stringify({
            name: 'Костюм',
            img: 'https://images.prom.ua/6268925569_w600_h600_6268925569.jpg',
            description: 'Be be be be'
        }),
        
        headers: {
            'Content-Type': 'application/json'
        }
    })
})