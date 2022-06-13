document.addEventListener('DOMContentLoaded', () => {

    // card options
    var yourImg = document.getElementById('yourImgId');
if(yourImg && yourImg.style) {
    yourImg.style.height = '160px';
    yourImg.style.width = '260px';
}


    const cardArray =[
        {
            name: 'apel',
            img: 'src/images/apel.png'           

        },
        {
            name: 'jeruk',
            img: 'src/images/jeruk.png'
        },
        {
            name: 'rambutan',
            img: 'src/images/rambutan.png'
        },
        {
            name: 'durian',
            img: 'src/images/durian.png'
        },
        {
            name: 'semangka',
            img: 'src/images/semangka.png'
        },
        {
            name: 'melon',
            img: 'src/images/melon.png'
        },
        {
            name: 'apel',
            img: 'src/images/apel.png'
        },
        {
            name: 'jeruk',
            img: 'src/images/jeruk.png'
        },
        {
            name: 'rambutan',
            img: 'src/images/rambutan.png'
        },
        {
            name: 'durian',
            img: 'src/images/durian.png'
        },
        {
            name: 'semangka',
            img: 'src/images/semangka.png'
        },
        {
            name: 'melon',
            img: 'src/images/melon.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())
    console.log(cardArray);

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    function createBoard(){
        for (let i = 0; i <cardArray.length; i++){
            const card = document.createElement('img');
            card.setAttribute('src', 'src/images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function flipCard(){
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)  
        cardsChosenId.push(cardId)  
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
        console.log(cardsChosen);
    }


function checkForMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
  
    if (optionOneId == optionTwoId){
        alert('Anda telah mengklik gambar yang sama');
        cards[optionOneId].setAttribute('src', 'src/images/blank.png') 
        cards[optionTwoId].setAttribute('src', 'src/images/blank.png')   
    } else if (cardsChosen[0] === cardsChosen[1]){
        alert('Yuhu anda menemukan gambar yang cocok')
        cards[optionOneId].setAttribute('src', 'src/images/white.png') 
        cards[optionTwoId].setAttribute('src', 'src/images/white.png') 
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'src/images/blank.png') 
        cards[optionTwoId].setAttribute('src', 'src/images/blank.png')  
        alert('Sorry, Coba Lagi')
    }
cardsChosen = []
cardsChosenId = []
resultDisplay.textContent = cardsWon.length
if (cardsWon.length === cardArray.length/2){
    resultDisplay.textContent = 'Selamat anda berhasil menyelesaikan'
}

}

    createBoard()
})
