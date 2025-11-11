import { Component, signal } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  protected readonly title = signal('product list page')
  protected readonly dataTitle = 'test'
  protected selectedProduct: Product | undefined;
  
  products: Product[] = [
    {title: 'JLoka-01', id: 1},
    {title: 'JLoka-02', id: 2},
    {title: 'JLoka-03', id: 3},
    {title: 'JLoka-04', id: 4},
    {title: 'JLoka-05', id: 5},
  ];
}
