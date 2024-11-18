/*import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cardData: any;
  loading = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const cardName = params.get('name')!;
      this.fetchCardData(cardName);
    });
  }

  fetchCardData(cardName: string): void {
    this.loading = true;
    const url = `https://api.scryfall.com/cards/named?fuzzy=${cardName}`;
    this.http.get(url).subscribe(
      (data) => {
        this.cardData = data;
        this.loading = false;
      },
      (error) => {
        console.error('Errore nel recupero della carta:', error);
        this.loading = false;
      }
    );
  }
}
*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  sets: any[] = [];
  cards: any[] = [];
  cardData: any;
  loading = false;
  view = 'sets'; // 'sets', 'cards', or 'details'

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const setName = params.get('set');
      const cardName = params.get('name');
      
      if (cardName) {
        this.fetchCardData(cardName);
      } else if (setName) {
        this.fetchCardsFromSet(setName);
      } else {
        this.fetchSets();
      }
    });
  }

  fetchSets(): void {
    this.loading = true;
    const url = 'https://api.scryfall.com/sets';
    this.http.get(url).subscribe(
      (data: any) => {
        this.sets = data.data;
        this.loading = false;
        this.view = 'sets';
      },
      (error) => {
        console.error('Errore nel recupero dei set:', error);
        this.loading = false;
      }
    );
  }

  fetchCardsFromSet(setName: string): void {
    this.loading = true;
    const url = `https://api.scryfall.com/cards/search?order=set&q=e%3A${setName}&unique=prints`;
    this.http.get(url).subscribe(
      (data: any) => {
        this.cards = data.data;
        this.loading = false;
        this.view = 'cards';
      },
      (error) => {
        console.error('Errore nel recupero delle carte:', error);
        this.loading = false;
      }
    );
  }

  fetchCardData(cardName: string): void {
    this.loading = true;
    const url = `https://api.scryfall.com/cards/named?fuzzy=${cardName}`;
    this.http.get(url).subscribe(
      (data) => {
        this.cardData = data;
        this.loading = false;
        this.view = 'details';
      },
      (error) => {
        console.error('Errore nel recupero della carta:', error);
        this.loading = false;
      }
    );
  }

  navigateToSet(set: any): void {
    this.router.navigate(['/cards', { set: set.code }]);
  }

  navigateToCard(card: any): void {
    this.router.navigate(['/cards', { name: card.name }]);
  }
}
