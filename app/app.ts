/// <reference path="player.ts" />
/// <reference path="utility.ts" />
/// <reference path="game.ts" />

let newGame: Game;

//add click handler to start game button
document.getElementById('startGame')!.addEventListener('click', () => {
    const player: Player = new Player();
    player.name = Utility.getInputValue('playername');

    const problemCount: number = Number(Utility.getInputValue('problemCount'));
    const factor: number = Number(Utility.getInputValue('factor'));

    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});

//add click handler to calculate scrore button
document.getElementById('calculate')!.addEventListener('click', () => {
    newGame.calculateScore();
});


//*************************************************Not using Classes example*********************************************************** */
// function startGame(){
//     //start a new game

//     let playerName: string | undefined = getInputValue('playername');
//     logPlayer(playerName)

//     postScore(90, playerName);
//     postScore(-9, playerName);
//     // var messagesElements = document.getElementById('messages');
//     // messagesElements!.innerText = 'Welcome to Multimath! Starting new game ...';
// }

// //assigning a default value to name makes it optional
// function logPlayer(name: string ='multiMath Player'): void {
//     console.log(`New game starting for player: ${name}`);
// }



// //adding '?' sign to playerName makes it optional
// //assigning a default value to PlayerName makes it optional
// function postScore(score: number, playerName: string = 'MultiMath Player'): void {

//     let logger: (value: string) => void;

//     if(score < 0) {
//         logger = logError;
//     }
//     else{
//         logger = logMessage;
//     }

//     const scoreElement: HTMLElement | null =document.getElementById('postedScores');
//     scoreElement!.innerText = `${score} - ${playerName}`;

//     logger(`Score: ${score}`);
// }

// document.getElementById('startGame')!.addEventListener('click', startGame);

// const logMessage = (message: string) => console.log(message);

// function logError(err: string): void {
//     console.error(err);
// }

// // Interfaces implementation using object literal
// // let myResult: Result = {
// //     playerName: "Papi",
// //     score: 8,
// //     problemCount: 6,
// //     factor: 7
// // };

// // let player: Person = {
// //     name: 'Daniella',
// //     formatName: () => 'Dan'
// // }

//Player class instance
// const firstPlayer: Player = new Player;
// firstPlayer.name = 'Lanier';
// console.log(firstPlayer.formatName());