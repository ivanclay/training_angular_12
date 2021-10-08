import { Component, OnInit } from '@angular/core';
import { TictactoeService } from './shared';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent implements OnInit {

  constructor(private tictactoeService: TictactoeService) { }

  ngOnInit(): void {
    this.tictactoeService.initialize();
  }

  get showStart(): boolean {
    return this.tictactoeService.showStart;
  }

  get showBoard(): boolean {
    return this.tictactoeService.showBoard;
  }

  get showEnd(): boolean {
    return this.tictactoeService.showEnd;
  }

  gameInit(): void {
    this.tictactoeService.gameInit();
  }

  play(posX: number, posY: number): void {
  	this.tictactoeService.play(posX, posY);
  }

  showX(posX: number, posY: number): boolean {
  	return this.tictactoeService.showX(posX, posY);
  }

  showO(posX: number, posY: number): boolean {
  	return this.tictactoeService.showO(posX, posY);
  }

  showVictory(posX: number, posY: number): boolean {
  	return this.tictactoeService.showVictory(posX, posY);
  }

  get player(): number {
  	return this.tictactoeService.player;
  }

  newGame(): void {
  	this.tictactoeService.newGame();
  }

}
