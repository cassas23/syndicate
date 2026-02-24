import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Bet {
  gameWeek: number;
  bettor: string;
  amountWon: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  bets: Bet[] = [
    {
      gameWeek: 1,
      bettor: 'steven',
      amountWon: 0
    },
    {
      gameWeek: 2,
      bettor: 'luke',
      amountWon: 0
    },
    {
      gameWeek: 3,
      bettor: 'jamie',
      amountWon: 0
    },
    {
      gameWeek: 4,
      bettor: 'steven',
      amountWon: 0
    },
    {
      gameWeek: 5,
      bettor: 'luke',
      amountWon: 143.20
    },
    {
      gameWeek: 6,
      bettor: 'jamie',
      amountWon: 0
    },
    {
      gameWeek: 7,
      bettor: 'steven',
      amountWon: 0
    },
    {
      gameWeek: 8,
      bettor: 'luke',
      amountWon: 141.53
    },
    {
      gameWeek: 9,
      bettor: 'jamie',
      amountWon: 0
    },
    {
      gameWeek: 10,
      bettor: 'steven',
      amountWon: 0
    },
    {
      gameWeek: 11,
      bettor: 'luke',
      amountWon: 183.47
    },
    {
      gameWeek: 13,
      bettor: 'jamie',
      amountWon: 128
    },
    {
      gameWeek: 14,
      bettor: 'steven',
      amountWon: 0
    },
    {
      gameWeek: 15,
      bettor: 'luke',
      amountWon: 0
    },
    {
      gameWeek: 16,
      bettor: 'jamie',
      amountWon: 0
    },
    {
      gameWeek: 17,
      bettor: 'steven',
      amountWon: 0
    },
    {
      gameWeek: 18,
      bettor: 'luke',
      amountWon: 120
    },
    {
      gameWeek: 19,
      bettor: 'jamie',
      amountWon: 131
    },
    {
      gameWeek: 20,
      bettor: 'steven',
      amountWon: 0
    },
    {
      gameWeek: 21,
      bettor: 'luke',
      amountWon: 120
    },
    {
      gameWeek: 21,
      bettor: 'jamie',
      amountWon: 0
    },
    {
      gameWeek: 22,
      bettor: 'steven',
      amountWon: 0
    },
    {
      gameWeek: 23,
      bettor: 'luke',
      amountWon: 150
    },
    {
      gameWeek: 24,
      bettor: 'jamie',
      amountWon: 0
    },
    {
      gameWeek: 25,
      bettor: 'steven',
      amountWon: 0
    },
    {
      gameWeek: 26,
      bettor: 'luke',
      amountWon: 0
    },
    {
      gameWeek: 27,
      bettor: 'jamie',
      amountWon: 0
    },
    {
      gameWeek: 28,
      bettor: 'steven',
      amountWon: 97
    },
     {
      gameWeek: 29,
      bettor: 'luke',
      amountWon: 0
    },
    {
      gameWeek: 30,
      bettor: 'jamie',
      amountWon: 135
    },
    {
      gameWeek: 31,
      bettor: 'steven',
      amountWon: 0
    },
    {
      gameWeek: 32,
      bettor: 'luke',
      amountWon: 0
    },
    {
      gameWeek: 33,
      bettor: 'jamie',
      amountWon: 0
    },
  ];

  get totalAmountWon(): number {
    return this.bets.reduce((acc, bet) => acc + bet.amountWon, 0);
  }

  get totalAmountLost(): number {
    return this.bets.length * 30;
  }

  get totalAmount(): number {
    return this.totalAmountWon - this.totalAmountLost;
  }

  get totalAmountWonByBettor(): { [bettor: string]: number } {
    return this.bets.reduce((acc: { [bettor: string]: number }, bet) => {
      if (!acc[bet.bettor]) {
        acc[bet.bettor] = 0;
      }
      acc[bet.bettor] += bet.amountWon;
      return acc;
    }, {});
  }

  get totalSpend(): number {
    return this.bets.length * 30;
  }
}
