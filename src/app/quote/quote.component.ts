import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, 'Juliana Alikutepa', 'Kipchoge Keino', '“There is always joy in achieving ,but the greater satisfaction lies in sharing the achievement.”', new Date(2021, 10, 11)),
    new Quote(2, 'Juliana Alikutepa', 'Ralph Johnson', '“Before software can be reusable it first has to be usable..”', new Date(2021, 10, 12)),
    new Quote(3, 'Juliana Alikutepa', 'Albert Einstein', '“The significant problems we face cannot be solved by the same level of thinking that created them.”', new Date(2021, 10, 9)),
    
  ];


  addNewQuote(quote: any) {
    const quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.dateCreated = new Date();
    this.quotes.push(quote);

  }
  deleteQuote(isComplete: boolean, index: number) {
    if (isComplete) {
      const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`);

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  toogleDetails(index: number) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete: boolean, index:number) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
