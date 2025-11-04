import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  protected readonly title = signal('product list page')
  protected readonly dataTitle = 'test'
}
