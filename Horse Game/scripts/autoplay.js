var total_secs;
var total_mins;
var cronometer;
var moves;
var movesRequired;
var options;
var board = new Array(8);
var cellSelectedX;
var cellSelectedY;
var checkCellRequired;
var level = 1;
var lifes = 1;
var levelMoves;

var bonus;
cells=["A", "B", "C", "D", "E", "F", "G", "H"];

//cell
//0 ==empty
//1 == ocuppied
//2 == bonus

function checkSuccessfullEnd(){
    successfullEnd = true;
    if(moves>0) successfullEnd = false;
    if (successfullEnd) alert("you won!")  
}

function checkGameOver(x, y){
    options = 0;
    checkMoves(x, y, 1, 2); 
    checkMoves(x, y, 2, 1); 
    checkMoves(x, y, 1, -2); 
    checkMoves(x, y, 2, -1); 
    checkMoves(x, y, -1, 2); 
    checkMoves(x, y, -2, 1); 
    checkMoves(x, y, -1, -2);
    checkMoves(x, y, -2, -1); 

    document.getElementById("options").innerHTML = options;
    if(!options) {
        if(bonus) checkCellRequired = false;
       else alert("game over");
    }
}

function checkMoves(x, y, mov_x, mov_y){
    option_x = x+mov_x;
    option_y = y+mov_y;

    if(option_x < 8 && option_y < 8 && option_x >= 0 && option_y >= 0){
        if(board[option_x][option_y] == 0 || 
            board[option_x][option_y] == 2 ) options++;   
    }
}
function selectCell(x, y){
    moves--;
   document.getElementById("moves").innerHTML = moves;
   
   if(isNaN(x)){
       board[cells.indexOf(x)][y-1] = 1;  
    } else{
        board[x][y-1] = 1;  
    }
    
    
    paintCell(cellSelectedX, cellSelectedY, "orange");   
    paintHorseCell(x, y, "green");

    if(isNaN(x)){
        if(board[cells.indexOf(x)][y]==2){
            bonus ++;
            document.getElementById("bonus").innerHTML = bonus;
        }
    }
   

    if(isNaN(x)){
        cellSelectedX = cells.indexOf(x)
    }
    else{
        cellSelectedX = x;
    }
    cellSelectedY = y;

    checkCellRequired = true;

    checkSuccessfullEnd();
    checkGameOver(cells.indexOf(x), y-1);

    checkNewBonus();
}

function growMeterBonus(){
    movesdone
}

function checkNewBonus(){
    if ((64-moves) % movesRequired == 0){
        //random cell for bonus
        bonus_Cell = false;
        while(bonus_Cell == false){
            bonus_Cell_x = Math.round(Math.random()*7);
            bonus_Cell_y = Math.round(Math.random()*7);

            if(board[bonus_Cell_x][bonus_Cell_y]== 0 )
            bonus_Cell = true;
        }
        //bonus cell == 2
        board[bonus_Cell_x][bonus_Cell_y]=2; 

        paintBonusCell(bonus_Cell_x, bonus_Cell_y);     
    }
}

function checkCell(x, y){
    checkTrue = true;
    if (checkCellRequired){

    
   checkTrue = false;
   var xdif = cells.indexOf(x)+1;
 
  
    dif_x = xdif - cellSelectedX-1;
    dif_y = y - cellSelectedY;


    if(dif_x == 1 && dif_y == -2) checkTrue = true; //right- toplong
    if(dif_x == 2 && dif_y == -1) checkTrue = true; //rightlong- top
    if(dif_x == 1 && dif_y == 2) checkTrue = true; //right- botlong
    if(dif_x == 2 && dif_y == 1) checkTrue = true; //rightlong- bot
    if(dif_x == -1 && dif_y == 2) checkTrue = true; //left- botlong
    if(dif_x == -2 && dif_y == 1) checkTrue = true; //leftlong- bot
    if(dif_x == -1 && dif_y == -2) checkTrue = true; //left- toplong
    if(dif_x == -2 && dif_y == -1) checkTrue = true; //leftlong- top
}
else{
    if(board[cells.indexOf(x)][y-1]==0||board[cells.indexOf(x)][y-1]==2){
        bonus--;
        document.getElementById("bonus").innerHTML=bonus;
    }
}
    if(board[cells.indexOf(x)][y-1] == 1) checkTrue = false;
    if(checkTrue) selectCell(x,y);
}
function autoplay(){
    moves = 64;
    movesRequired = 8;
    bonus=0;

    for (i = 0; i<8; i++) board[i] = new Array(8);
    clearBoard();
    resetTime();
    startTime();
   
    x=Math.round(Math.random()*7);
    y=Math.round(Math.random()*7);

    cellSelectedX = x;
    cellSelectedY = y;

    selectCell(x, y);
}

