import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  lastValue = "e";
  isdisable1 = false;
  isShow = true;
  winner1 = false;
  winner2 = false;

  matrix = [
    ["e", "e", "e"],
    ["e", "e", "e"],
    ["e", "e", "e"]
  ];

  disableMatrix = [
    [false, false, false],
    [false, false, false],
    [false, false, false]
  ];

  openGame(){
    this.isShow = false;
  }

  hideGameLayout(){
    if(this.winner1 || this.winner2) {
      return true
    }
    return this.isShow;
  }


  changeValue(i: number, j: number){
    

      if(this.lastValue == "e") {
        this.matrix[i][j] ='0';
        this.lastValue = '0'
        this.disableMatrix[i][j] = true;
       

      } else if (this.lastValue == "0") {
        this.matrix[i][j] ='X';
        this.lastValue = 'X'
        this.disableMatrix[i][j] = true;
        
      }else if (this.lastValue == "X") {
        this.matrix[i][j] ='0';
        this.lastValue = '0'
        this.disableMatrix[i][j] = true;
       
      }
      if(this.matrix[0][0]=='0'&&this.matrix[0][1]=='0'&&this.matrix[0][2]=='0'){
        this.winner1 = true;
      }
      if(this.matrix[0][0]=='X'&&this.matrix[0][1]=='X'&&this.matrix[0][2]=='X'){
        this.winner2 = true;
      }
      if(this.matrix[1][0]=='0'&&this.matrix[1][1]=='0'&&this.matrix[1][2]=='0'){
        this.winner1 = true;
      }
      if(this.matrix[1][0]=='X'&&this.matrix[1][1]=='X'&&this.matrix[1][2]=='X'){
        this.winner2 = true;
      }
      if(this.matrix[2][0]=='0'&&this.matrix[2][1]=='0'&&this.matrix[2][2]=='0'){
        this.winner1 = true;
      }
      if(this.matrix[2][0]=='X'&&this.matrix[2][1]=='X'&&this.matrix[2][2]=='X'){
        this.winner2 = true;
      }
      if(this.matrix[0][0]=='0'&&this.matrix[1][0]=='0'&&this.matrix[2][0]=='0'){
        this.winner1 = true;
      }
      if(this.matrix[0][0]=='X'&&this.matrix[1][0]=='X'&&this.matrix[2][0]=='X'){
        this.winner2 = true;
      }
      if(this.matrix[0][1]=='0'&&this.matrix[1][1]=='0'&&this.matrix[2][1]=='0'){
        this.winner1 = true;
      }
      if(this.matrix[0][2]=='X'&&this.matrix[1][2]=='X'&&this.matrix[2][2]=='X'){
        this.winner2 = true;
      }
      if(this.matrix[0][2]=='0'&&this.matrix[1][2]=='0'&&this.matrix[2][2]=='0'){
        this.winner1 = true;
      }
      if(this.matrix[0][0]=='X'&&this.matrix[1][1]=='X'&&this.matrix[2][2]=='X'){
        this.winner2 = true;
      }
      if(this.matrix[0][0]=='0'&&this.matrix[1][1]=='0'&&this.matrix[2][2]=='0'){
        this.winner1 = true;
      }
      if(this.matrix[0][0]=='X'&&this.matrix[1][1]=='X'&&this.matrix[2][2]=='X'){
        this.winner2 = true;
      }
       
  }
}
