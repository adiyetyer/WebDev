import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, Category } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  categories: Category[] = [];
  products: Product[] = [];
  selectedCategoryId: number | null = null;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.categories = this.productService.getCategories();
    this.products = this.productService.getProducts();
  }

  selectCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
    this.products = this.productService.getProductsByCategory(categoryId);
  }

  removeProduct(productId: number): void {
    this.productService.removeProduct(productId);
    if (this.selectedCategoryId) {
      this.products = this.productService.getProductsByCategory(this.selectedCategoryId);
    } else {
      this.products = this.productService.getProducts();
    }
  }

  likeProduct(productId: number): void {
    this.productService.likeProduct(productId);
  }
}
