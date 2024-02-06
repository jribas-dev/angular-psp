import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product } from '../../model/product';
import { ServiceProductService } from '../../services/service-product.service';

@Component({
  selector: 'app-page-product',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './page-product.component.html',
  styleUrl: './page-product.component.css'
})
export class PageProductComponent implements OnInit {

  private id: String = "0"
  product : Product | any = null

  constructor (
    private route: ActivatedRoute,
    private service: ServiceProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.id = value.get("id") || "0"
    })
    const result = this.service.getProduct(this.id)
    this.product = result[0]
  }

}
