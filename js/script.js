console.log('HI, I am java and I am working fine');

// A. L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

// B. Ogni cella ha un numero progressivo, da 1 a 100.

// C. Ci saranno quindi 10 caselle per ognuna delle 10 righe.

// D. Quando l'utente clicca su ogni cella, la cella cliccata
//    si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// A).

// 1. Bottone creato su html e stilizzato su css
// 2. Selezionato il bottone nel DOM

const play = document.getElementById('play');

// 3. Creare un evento quando clicchi il bottone

play.addEventListener('click',
    function () {

// 4: Una volta cliccato il bottone PLAY creare una griglia di gioco quadrata
// 4.1: Selezionare il div griglia nel DOM

       const gridContainer = document.getElementById('grid-container');

// 4.2: Per ripetere un operazione 100 volte volte creo un ciclo FOR
       
        for (let i = 0; i < 100; i++) {

// 4.3: Aggiungere nel div con ID grid-container 100 div con class=cell (già stilizzata su css)
            const newCell = document.createElement('div');
            newCell.classList.add('cell');

         }

    }

);


// Per ripetere un operazione 64 volte creiamo un ciclo FOR 

for (let i = 0; i < 64; i++) {

    //aggiungi nel div grid-container 64 volte un div class=cell
    // gridContainer.innerHTML += `<div class="cell"></div>`

    // oppure:

    const newCell = document.createElement('div');
    newCell.classList.add('cell');

    //aggiungere un evento per il click

    newCell.addEventListener('click',
            
            function() {

                console.log(this) // 
                console.log('Clicked') //in console compare la voce clicked come verifica

                if(this.classList.contains('clicked')) {
                    this.classList.remove('clicked')

                } else {

                    this.classList.add('clicked')
                    
                }

        }
        
    );

    gridContainer.append(newCell);

}

