const readline = require("readline");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

  const board = [["00", "01", "02", "03", "04", "05", "06", "07"],
                ["10", "11", "12", "13", "14", "15", "16", "17"],
                ["20", "21", "22", "23", "24", "25", "26", "27"],
                ["30", "31", "32", "33", "34", "35", "36", "37"],
                ["40", "41", "42", "43", "44", "45", "46", "47"],
                ["50", "51", "52", "53", "54", "55", "56", "57"],
                ["60", "61", "62", "63", "64", "65", "66", "67"],
                ["70", "71", "72", "73", "74", "75", "76", "77"]]; 

const position = () => {
    printBoard(board);
    rl.question("At what position do you want to place your knight? Only pick numbers displayed on board. ", function (knightPosition) {
        possiblePositions(knightPosition);
    });
   }

   const possiblePositions = (c) => {
    let choice = parseInt(c);
    let y = choice % 10;
    let x = Math.floor(choice / 10);
    if(x > 7 || x < 0 || y > 7 || y < 0 ) { 
        console.log('\n');
        console.log("Value out of bounds. Enter again!"); 
        console.log('\n');
        position(); 
        return;
     }
    board[x][y] = "K ";
    console.log('\n');
    console.log("The coordinates which you entered are- ","(", x,",", y,")" );
    console.log("The coordinates at which you can place your knight in the next move are- ");
    positions(x + 1, y + 2);
	positions(x + 2, y + 1);
	positions(x + 2, y - 1);
	positions(x + 1, y - 2);
	positions(x - 1, y - 2);
	positions(x - 2, y - 1);
	positions(x - 2, y + 1);
	positions(x - 1, y + 2);
    console.log('\n');
    console.log("K represents the position of the knight and M represents the places where the knight can move in the next move.");
    console.log('\n');
    console.log("The board is as follows-");
    console.log('\n');
    printBoard(board);
   }

   const positions = ( x, y ) => {
    if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
        board[x][y] = "M ";
		console.log("(",x,",", y,")");

        return;
	}
   }

   const printBoard = (board) => {
    for( let i = 0; i <= 7; i++){
        for( let j = 0; j <= 7; j++){
            process.stdout.write(board[i][j]);
            process.stdout.write("  ");
        }
        console.log('\n');
    }
   }

   position();