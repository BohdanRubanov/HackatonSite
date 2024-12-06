//отримує кнопку з HTML по ID
const button = document.querySelector('#button')
button.addEventListener('click', () => {
     
    console.log('button clicked')
    fetch('./create/', {
     
        method: 'POST',
        
        body: JSON.stringify({
            Name: "Труси на зав'язках",
            InstructionImg1: "/static/images/sample1.png",
            InstructionImg2: "/static/images/sample2.png",
            Video: "https://youtu.be/uPhcQOn7pRg?si=GEY-F1HokZ6VyXg3",
            ExamplesImg1: "/static/images/example1.png",
            ExamplesImg2: "/static/images/example2.png",
            ExamplesImg3: "/static/images/example3.png",
            InjuredImg1: "/static/images/injured1.png",
            InjuredImg2: "/static/images/injured2.png",
            InjuredImg3: "/static/images/injured3.png",
            DopInfo:  "У Дніпрі, в приміщенні, де Ксенія з Мариною та іншими майстринями зі 'Швейної роти' створюють одяг, так тісно, що важко розминутися. Столи займають більшість простору. Найцінніше — 12 швейних машин — щоразу ховають після роботи від можливих обстрілів та осколків: у район уже прилітало.З цього невеликого, але єдиного їхнього офісу засновниці проєкту “Швейна рота” координують 250 майстринь. Кравчині живуть по Україні та світу, лік пошитого ними перейшов за кільканадцять тисяч екземплярів різного військового гардеробу. Ця справа досі тримається на волонтерстві, а кураторки проєкту вперто відмовляються ставати бізнесом.",
            Author: "Автор лекал" 
        }),
        
        headers: {
            'Content-Type': 'application/json'
        }
    })
})