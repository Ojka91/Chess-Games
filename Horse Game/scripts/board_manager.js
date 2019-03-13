function clearBoard(){
    for (i=0; i<8; i++){
        for (j=0; j<8; j++){
            board[i][j] = 0;
        }
    }
}
cells=["A", "B", "C", "D", "E", "F", "G", "H"];

function paintCell(x, y, color){
    if(isNaN(x)){
        document.getElementById(x+y).style.background=color;
    }else{
        document.getElementById(cells[x]+y).style.background=color;
    }
        

}
function paintHorseCell(x, y, color){
    if(isNaN(x)){
        document.getElementById(x+y).style.background=color;
        document.getElementById(x+y).innerHTML="<img class='horse' src='styles/assets/horse.png'></img>";
    }else{
        document.getElementById(cells[x]+y).style.background=color;
        document.getElementById(cells[x]+y).innerHTML="<img class='horse' src='styles/assets/horse.png'></img>";
    }

   
}

function paintBonusCell(x, y){
    document.getElementById(cells[x]+y).innerHTML="<img class='horse' src='styles/assets/bonus.jpg'></img>";

}