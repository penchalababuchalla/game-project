import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  lastValue = "e";
  isdisabled = false;
  isShow = true;

  matrix = [
    ["e", "e", "e"],
    ["e", "e", "e"],
    ["e", "e", "e"]
  ];

  openGame(){
    this.isShow = false;
  }


  changeValue(i: number, j: number){
    

      if(this.lastValue == "e") {
        this.matrix[i][j] ='0';
        this.lastValue = '0'
        // this.isdisabled = true;
      } else if (this.lastValue == "0") {
        this.matrix[i][j] ='X';
        this.lastValue = 'X'
        // this.isdisabled = true;
      }else if (this.lastValue == "X") {
        this.matrix[i][j] ='0';
        this.lastValue = '0'
        // this.isdisabled = true;
      }
      if(this.matrix[0][0]=='0'&&this.matrix[0][1]=='0'&&this.matrix[0][2]=='0'){
      alert("gameOver");
      return;
    }
    if(this.matrix[0][0]=='X'&&this.matrix[0][1]=='X'&&this.matrix[0][2]=='X'){
      alert("gameOver");
      return;
    }
    if(this.matrix[0][0]=='0'&&this.matrix[1][1]=='0'&&this.matrix[2][2]=='0'){
      alert("gameOver");
      return;
    }
    if(this.matrix[0][0]=='X'&&this.matrix[1][1]=='X'&&this.matrix[2][2]=='X'){
      alert("gameOver")
      return;
    }
     
  }
}
