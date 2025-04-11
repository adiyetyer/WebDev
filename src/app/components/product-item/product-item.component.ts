import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<number>();
  @Output() like = new EventEmitter<number>();
  currentImageIndex = 0;

  constructor(private productService: ProductService) {}

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
  }

  previousImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.product.images.length) % this.product.images.length;
  }

  onLike(): void {
    this.like.emit(this.product.id);
  }

  onRemove(): void {
    this.remove.emit(this.product.id);
  }

  shareOnWhatsApp(): void {
    window.open(this.productService.shareOnWhatsApp(this.product), '_blank');
  }

  shareOnTelegram(): void {
    window.open(this.productService.shareOnTelegram(this.product), '_blank');
  }

  getRatingStars(): string[] {
    return Array(this.product.rating).fill('⭐');
  }
}
