
import cards from './js/cards';

console.log(cards["ACTION (SET A)"]);

class Cards {
    constructor() {



        this.cardsName = cards.names;
        this.ActionA = cards["ACTION (SET A)"];
        this.ActionB = cards["ACTION (SET B)"];
        this.AnimalA = cards["ANIMAL (SET A)"];
        this.AnimalB = cards["ANIMAL (SET B)"];
        this.Clothes = cards["CLOTHES"];
        this.Emotions = cards["EMOTIONS"];
        this.Cook = cards["COOK"];
        this.Body = cards["BODY"];






    }

    init() {

        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('wrapper');
        this.image = document.createElement('img');
        this.menuBlock = document.createElement('div');
        this.navBlock = document.createElement('div');
        this.switcherBlock = document.createElement('div');
        this.train = document.createElement('div');
        this.play = document.createElement('div');
        this.switcher = document.createElement('div');
        this.trainText = document.createElement('p');
        this.playText = document.createElement('p');
        this.playButton = document.createElement('div')
        this.pointBlock = document.createElement('div');
        this.input = document.createElement("input");
        this.cardsBlock = document.createElement('div');



    
        const body = document.querySelector('body');
        body.appendChild(this.wrapper);
        this.wrapper.appendChild(this.menuBlock);
        this.menuBlock.appendChild(this.navBlock);
        this.menuBlock.appendChild(this.pointBlock);
        this.menuBlock.appendChild(this.switcherBlock);
        this.switcherBlock.appendChild(this.trainText);
        this.switcherBlock.appendChild(this.switcher);
        this.switcherBlock.appendChild(this.playText);
        this.switcher.appendChild(this.input);
        this.wrapper.appendChild(this.cardsBlock);



     
        this.trainText.innerHTML = 'Train';
        this.playText.innerHTML = 'Play';
        this.trainText.classList.add('mode_name');
        this.playText.classList.add('mode_name');

        this.menuBlock.classList.add('menu_block');
        this.switcherBlock.classList.add('switcher_block');
        this.navBlock.classList.add('nav_block');
        this.switcher.classList.add('toggle');
        this.cardsBlock.classList.add('cards_wrapper');
        this.playButton.classList.add('offButton')
        this.playButton.innerHTML = 'Start Game';
     
        this.input.type = "checkbox";
        this.input.classList.add('switch-input');
        this.pointBlock.classList.add('point_block');
    







        let toggle = () => {
            if (!document.querySelector('.switch-input').checked) {

                document.querySelectorAll('.cards').forEach((e) => {
                    e.classList.remove('play_mode');
                })

            } else if (document.querySelector('.switch-input').checked) {

                document.querySelectorAll('.cards').forEach((e) => {
                    e.classList.add('play_mode');
                })

            }

        }

        document.querySelector('.toggle').addEventListener('click', toggle);


        let content = '';

        for (let i = 0; i < this.cardsName.length; i++) {
            content += `
          
            <div class="forCards">
            <div class="cards_icon">
      <img src="../src/img/forMenu/${i}.jpg" alt="icon">
        </div>
        <div class="cards_name"> 
        <span><a id="links_${i}" class="link_on_name" href="#">${this.cardsName[i]}</a></span>
        </div>
        </div>
      
            `;
        }

        this.cardsBlock.insertAdjacentHTML('beforeend', content);

        document.querySelectorAll('.forCards').forEach((el) => {

            el.classList.add('cards');


        })

        document.querySelectorAll('.cards_icon').forEach((element) => {

            element.appendChild(this.image);


        })

        function shuffle(a) {
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }

        let stars = '';
        let pushStar = (e) => {

            stars += `
            <img class="stars" src="../src/img/${e}.svg" alt="icon">

`;


        }

let youWin = () =>{


    let deletedContent = document.querySelector('.cards_wrapper');
    while (deletedContent.firstElementChild) {
        deletedContent.removeChild(deletedContent.firstElementChild);
    }
    document.querySelector('.offButton').remove();


    let winContent = '';
    winContent += `

    <div class="win-container">
    <img src="../src/img/success.jpg" alt="icon">
    </div>

`;
this.cardsBlock.insertAdjacentHTML('beforeend', winContent);
    new Audio(`../src/audio/success.mp3`).play();

 
}


let youLose = () =>{


    let deletedContent = document.querySelector('.cards_wrapper');
    while (deletedContent.firstElementChild) {
        deletedContent.removeChild(deletedContent.firstElementChild);
    }
    document.querySelector('.offButton').remove();


    let winContent = '';
    winContent += `

    <div class="win-container">
    <img src="../src/img/failure.jpg" alt="icon">
    </div>

`;
this.cardsBlock.insertAdjacentHTML('beforeend', winContent);
    new Audio(`../src/audio/badgame.mp3`).play();

    setTimeout(function () {
        document.location.reload(true);
       

    }, 10000);


}







        let BuildCards = () => {
            let playMode = document.querySelector('.switch-input').checked;


            let propsWord = event.target.innerText;
            let container = document.querySelector('.cards_wrapper');

            while (container.firstElementChild) {
                container.removeChild(container.firstElementChild);
            }
            let trainCards = '';






            let drawTrain = () =>{

                for (let i = 0; i < cards[propsWord].length; i++) {
                    trainCards += `

                <div class="card-container">
                <div class="card">
                <div class="font" style="background-image: url(../src/img/${cards[propsWord][i].word}.jpg);">
                
                <div class="card-header">${cards[propsWord][i].word}</div>
                </div>
        
                <div class="back" style="background-image: url(../src/img/${cards[propsWord][i].word}.jpg);">
                
                <div class="card-header">${cards[propsWord][i].translation}</div>
                </div>
                <div class="rotate" style="background-image: url(../src/img/rotate.png);"></div>
                </div>
                </div>

            `;
                }


                this.cardsBlock.insertAdjacentHTML('beforeend', trainCards);
                let rotate = () => {
                    event.target.parentElement.classList.add('translate');
                }
                document.querySelectorAll('.rotate').forEach((e) => {

                    e.addEventListener('click', rotate);

                })
                document.querySelectorAll('.card').forEach((e) => {

                    e.addEventListener('mouseover', function () {
                        event.target.parentElement.classList.remove('translate');
                    });
                    e.addEventListener('click', function () {

                        console.log(event.target.innerText);

                        new Audio(`../src/audio/${event.target.innerText}.mp3`).play()
                    })

                })
            }



         let drawPlay = () =>{

            for (let i = 0; i < cards[propsWord].length; i++) {
                trainCards += `

            <div class="card-container">
            <div class="card">
            <div class="font" style="background-image: url(../src/img/${cards[propsWord][i].word}.jpg);">
            
            <div class="card-header" style="opacity:0;">${cards[propsWord][i].word}</div>
            </div>
    
            </div>
            <div class="rotate" style="background-image: url(../src/img/rotate.png);"></div>
            </div>
            </div>

        `;
            }

            this.cardsBlock.insertAdjacentHTML('beforeend', trainCards);
            this.wrapper.appendChild(this.playButton);







            document.querySelectorAll('.font').forEach((e) => {
                e.classList.add('hidden_text');
                e.addEventListener('click', function () {


                })
            })
            let hiddenWords = document.querySelectorAll('.card-header');
            let currentWords = [].map.call(hiddenWords, function (obj) {

                return obj.innerText;
            })


            let stack = [];

            let playAudio = (x) => {

                new Audio(`../src/audio/${x}.mp3`).play()

            }
            let counter = 0;
            let currentAudio;
            let currentText;
            let goodTry = [];
            let badTry = [];
            document.querySelector('.offButton').addEventListener('click', function () {

                playAudio(currentWords[counter]);
                document.querySelector('.offButton').innerHTML = 'Retry';
                document.querySelector('.offButton').classList.add('retry_button')


            })


            document.querySelectorAll('.font').forEach((e) => {

                e.addEventListener('click', function () {


                    if (event.target.innerText == currentWords[counter]) {
             
                        counter++;
                      
                        console.log(currentWords);
                        goodTry.push('+')
                   
                        new Audio(`../src/audio/correct.mp3`).play()
                        pushStar('star-win');
                        document.querySelector('.point_block').insertAdjacentHTML('beforeend', stars);
                        stars = ''
                   
                     event.target.parentElement.parentElement.classList.add('true');

                        setTimeout(function () {
                            playAudio(currentWords[counter]);
                           

                        }, 2000);
                      

                    } else {
                        console.log('error')
                        pushStar('star');
                        new Audio(`../src/audio/error.mp3`).play();
                        document.querySelector('.point_block').insertAdjacentHTML('beforeend', stars);
                        stars = ''
                        badTry.push('-')
                    }

                    if(goodTry.length==8 && badTry.length==0){
                        youWin();
                    } else if(goodTry.length==8 && badTry.length>0 ) {
                        youLose();
                    }




                })
            })

         }
      

            if (!playMode) {

                drawTrain();

            } else {

               
                drawPlay();

            }

    

          




        }


        document.querySelectorAll('.link_on_name').forEach((el) => {

            el.addEventListener('click', BuildCards);
            document.querySelector('.sidebar').classList.remove('active');


        })











        document.querySelectorAll('.train_cards').forEach((cards) => {

            cards.addEventListener('click', function () {
                console.log(event.target);
            })
        })


    }











}





window.onload = () => {

    const cards = new Cards();



    cards.init();


  


};
let bounce = () => {

    let element = document.getElementById('sidebar')
    element.classList.toggle('active');
    
    }

    document.querySelector('.bounce').addEventListener('click', bounce);



    document.querySelectorAll('.link_on_name').forEach((e)=>{

        e.addEventListener('click', function(){

            console.log(document.querySelector('.sidebar'));
            document.querySelector('.sidebar').classList.remove('active');

        })
    })


     


