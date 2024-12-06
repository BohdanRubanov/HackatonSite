//отримує кнопку з HTML по ID
const button = document.querySelector('#button')
button.addEventListener('click', () => {
     
    console.log('button clicked')
    fetch('./create/', {
     
        method: 'POST',
        
        body: JSON.stringify({
            Name: "Труси на зав'язках",
            InstructionImg1: "",
            InstructionImg2: "",
            Description: "",
            Video: "",
            ExamplesImg1: "",
            ExamplesImg2: "",
            ExamplesImg3: "",
            InjuredImg1: "",
            InjuredImg2: "",
            InjuredImg3: "",
            DopInfo:  "",
            Author: "" 
        }),
        
        headers: {
            'Content-Type': 'application/json'
        }
    })
})