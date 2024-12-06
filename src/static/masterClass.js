//отримує кнопку з HTML по ID
const button = document.querySelector('#button')
button.addEventListener('click', () => {
     
    console.log('button clicked')
    fetch('./create/', {
     
        method: 'POST',
        
        body: JSON.stringify({
            Name: 'Труси на зав’язках',
            Description: 'be be be',
            Video: 'Be be be be',
            Examples: 'Be be be',
            DopInfo: ' be be be',
            Author: 'be be be'
        }),
        
        headers: {
            'Content-Type': 'application/json'
        }
    })
})