import { CommonModule, NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor, CommonModule, RouterLink, RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  @Input()
  cardIdProd: String | undefined = ""

  @Input()
  cardUrlImage: String | undefined = ""
  
  @Input()
  cardTags: String[] | undefined = [""]

  @Input()
  cardTitle: String | undefined = ""

  @Input()
  cardDiscount: Number | any = 0.00

  @Input()
  cardPrice: Number | any = 0.00

  cardSellPrice: Number | any = 0.00

  constructor() {
  }
  
  ngOnInit(): void {
    this.cardSellPrice = (this.cardPrice* (1- (this.cardDiscount/ 100))).toFixed(2)
  }

}
