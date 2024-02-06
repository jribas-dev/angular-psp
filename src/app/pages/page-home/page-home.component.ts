import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServiceProductService } from '../../services/service-product.service';
import { Product } from '../../model/product';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-home',
  standalone: true,
  imports: [RouterModule, NgFor, CommonModule],
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.css'
})

export class PageHomeComponent {
  featureProducts: Product[] = [{}]
  notfeatProducts: Product[] = [{}]

  constructor(
    private serviceProd: ServiceProductService
  ) {}

  ngOnInit(): void {
    this.featureProducts = this.serviceProd.getFeatureProducts()
    this.notfeatProducts = this.serviceProd.getNotFeatureProducts()
  }
}
