import { Component, OnInit } from '@angular/core';
import { Fighters, FightService, Hero, Villain, Fight } from '../shared';

@Component({
  selector: 'hero-fight',
  templateUrl: './fight.component.html'
})
export class FightComponent implements OnInit {

  figthers: Fighters = new Fighters();
  winner: String;

  constructor(private fightService: FightService) {
  }

  ngOnInit() {
    this.newFighters();
  }

  fight() {
    this.fightService.apiFightsPost(this.figthers).subscribe(
      (fight: Fight) => {
        this.fightService.onNewFight(fight);
        this.winner = fight.winnerName;
      }
    );
  }

  newFighters() {
    this.winner = null;
    this.fightService.apiFightsRandomfightersGet().subscribe((figthers: Fighters) => this.figthers = figthers);
  }
}
