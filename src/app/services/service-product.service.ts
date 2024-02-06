import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { mockProducts } from '../data/mockData';

@Injectable({
  providedIn: 'root'
})

export class ServiceProductService {

  private productData = mockProducts

  constructor() { }

  getFeatureProducts(): Product[] {
    return this.productData.filter(product => product.feature === true)
  }

  getNotFeatureProducts(): Product[] {
    return this.productData.filter(product => product.feature === false)
  }

  getAllProducts(): Product[] {
    return this.productData
  }

  getProduct(id: String): Product[] {
    return this.productData.filter(product => product.id === id)
  }

}
