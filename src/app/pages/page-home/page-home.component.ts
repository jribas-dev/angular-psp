import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServiceProductService } from '../../services/service-product.service';
import { Product } from '../../model/product';
import { NgFor, CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { FooterbarComponent } from '../../components/footerbar/footerbar.component';

@Component({
  selector: 'app-page-home',
  standalone: true,
  imports: [RouterModule, NgFor, CommonModule, CardComponent, FooterbarComponent],
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.css'
})

export class PageHomeComponent implements OnInit {
  featureProducts: Product[] = [{}]
  notfeatProducts: Product[] = [{}]

  constructor(
    private serviceProd: ServiceProductService
  ) {}

  ngOnInit(): void {
    this.featureProducts = this.serviceProd.getFeatureProducts()
    this.notfeatProducts = this.serviceProd.getNotFeatureProducts()
    console.log(this.notfeatProducts)
  }
}
