// load event when the whole page has loaded
window.onload = function(){
  
  let row = false;
  let col =false;
  let d_check = false;
  let counter=0
  var winner = "";
  let track_game = ["","","","","","","","",""];
  let box =  document.getElementById("board").querySelectorAll("div");
  let board = document.getElementById("board")
  var win = document.getElementById("status")


  box.forEach(function(element){
      element.setAttribute("class","square");
      element.innerHTML="";

      element.addEventListener('click',function(){
        
            if (counter % 2 == 0 && this.innerHTML == ""){
               
                element.innerHTML = "X";
                element.setAttribute("class", "square X");
                
                counter++;
                track_game[Array.from(box).indexOf(element)] = "X";
              }else if(counter % 2 != 0 && this.innerHTML == ""){
              
                element.innerHTML = "O";
                element.setAttribute("class", "square O");
                
                counter++;
                track_game[Array.from(box).indexOf(element)] = "O";
            }
           
          });

      element.addEventListener('mouseover',function(){
          element.classList.add('hover');      
      });

     
      element.addEventListener('mouseout',function(){
          if (element.innerHTML == "X"){element.setAttribute("class","square X"); }
          else if (element.innerHTML == "O"){
              element.setAttribute("class","square O"); 
          }
          else{
              element.setAttribute("class","square")
          }

                  
      });

  });

  
  

  board.onclick = function(){
    
      if (counter>=5){
      for (let check_row = 0; check_row<=6; check_row+=3){
          if (track_game[check_row]==track_game[check_row+1] &&  track_game[check_row+1]==track_game[check_row+2]
              && track_game[check_row+1]==track_game[check_row+2]){   
            
              if (track_game[check_row]!="" || track_game[check_row+1]!="" || track_game[check_row+1]!=""){
                  winner = track_game[check_row];
                  row = true
              }
          } 
      };
     
      for (let check_col = 0; check_col<=3; check_col++){
          if (track_game[check_col]==track_game[check_col+3] && track_game[check_col]==track_game[check_col+6]&& 
               track_game[check_col+3]==track_game[check_col+6]){
              
              if (track_game[check_col]!="" || track_game[check_col+3]!="" || track_game[check_col+6]!=""){
                  winner = track_game[check_col];
                  col = true;
              };
          };
      };
      if (track_game[0] == track_game[4] && track_game[0]== track_game[8] && track_game[4] == track_game[8]){
              winner = track_game[0];
              d_check =true;
          };

      if (track_game[2] == track_game[4] && track_game[2]== track_game[6] && track_game[4] == track_game[6]){
              winner = track_game[2];
              d_check =true;
          };
      };

      if (!row && !col && !d_check && !track_game.includes("")){
          win.innerHTML = "Game-Ends in Draw";
          win.setAttribute("class","you-won")
      }
      
      if (row || col || d_check) {   
  
      win.innerHTML = "Congratulations! "+ winner +" is the Winner!";
 
      win.setAttribute("class","you-won");
    
      board.style.pointerEvents = 'none';
          

  }
  }

  var new_game =document.getElementById("game").getElementsByClassName("btn")
  
  new_game[0].addEventListener("click",function(){
      window.location.reload(true);
  })


}