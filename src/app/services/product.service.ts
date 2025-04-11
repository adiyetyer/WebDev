import { Injectable } from '@angular/core';
import { Product, Category } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Audio' },
    { id: 4, name: 'Gaming' }
  ];

  private products: Product[] = [
    // Smartphones
    {
      id: 1,
      categoryId: 1,
      name: 'iPhone 15 Pro Max',
      description: 'Apple iPhone 15 Pro Max 256Gb серый',
      price: 699990,
      rating: 5,
      likes: 0,
      liked: false,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/ha3/hda/86319874048030.jpg?format=gallery-medium' ,
        'https://resources.cdn-kaspi.kz/img/m/p/he8/hdf/86319874211870.jpg?format=gallery-medium' ,
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/heb/86319874310174.jpg?format=gallery-medium'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/'
    },
    {
      id: 2,
      categoryId: 1,
      name: 'Samsung Galaxy S24 Ultra',
      description: 'Samsung Galaxy S24 Ultra 12 ГБ/512 ГБ серый',
      price: 649990,
      rating: 5,
      likes: 0,
      liked: false,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h0a/h2d/85135957622814.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0f/h5f/85135957688350.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h01/h1d/85135957753886.jpg?format=gallery-medium'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-ds-12-gb-512-gb-seryi-116534733/'
    },
    {
      id: 3,
      categoryId: 1,
      name: 'Google Pixel 8 Pro',
      description: 'Google Pixel 8 Pro 12 ГБ/128 ГБ черный',
      price: 499990,
      rating: 5,
      likes: 0,
      liked: false,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hdf/haf/63603321208862.jpg?format=gallery-medium'],
      kaspiLink: 'https://kaspi.kz/shop/p/google-pixel-7-pro-12-gb-256-gb-belyi-107066176/?c=750000000'
    },
    {
      id: 4,
      categoryId: 1,
      name: 'Xiaomi 13 Ultra',
      description: 'Xiaomi 13 Ultra 5G 12 ГБ/256 ГБ черный',
      price: 599990,
      rating: 5,
      likes: 0,
      liked: false,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hd3/hda/81333697871902.jpg?format=gallery-medium'],
      kaspiLink: '	https://resources.cdn-kaspi.kz/img/m/p/hd3/hda/81333697871902.jpg?format=gallery-medium'
    },
    {
      id: 5,
      categoryId: 1,
      name: 'OnePlus 12',
      description: 'OnePlus 12 16 ГБ/512 ГБ черный',
      price: 549990,
      rating: 5,
      likes: 0,
      liked: false,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p83/p98/24035715.jpg?format=gallery-large'],
      kaspiLink: 'https://kaspi.kz/shop/p/oneplus-13-16-gb-512-gb-sinii-132460014/?c=750000000'
    },

    // Laptops
    {
      id: 6,
      categoryId: 2,
      name: 'MacBook Pro 14',
      description: 'Apple MacBook Pro 14 MRX33 серый',
      price: 989990,
      rating: 5,
      likes: 0,
      liked: false,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hd3/h7b/84577188020254.jpg?format=gallery-medium'],
      kaspiLink: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-mrx33-seryi-114861358/'
    },
    {
      id: 7,
      categoryId: 2,
      name: 'ASUS ROG Strix G16',
      description: 'ASUS ROG Strix G16 G614JV-N3163 черный',
      price: 799990,
      rating: 5,
      likes: 0,
      liked: false,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hd2/hf8/85732590944286.jpg?format=gallery-medium'],
      kaspiLink: 'https://kaspi.kz/shop/p/asus-rog-strix-g16-16-16-gb-ssd-1000-gb-dos-g614jv-n4190-90nr0c61-m00yz0-118376617/?c=750000000'
    },
    {
      id: 8,
      categoryId: 2,
      name: 'Lenovo Legion Pro 7',
      description: 'Lenovo Legion Pro 7 16IRX8 черный',
      price: 899990,
      rating: 5,
      likes: 0,
      liked: false,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p91/p2d/25755345.png?format=gallery-medium'],
      kaspiLink: 'https://kaspi.kz/shop/p/lenovo-legion-pro-7-16irx9h-16-32-gb-ssd-1024-gb-bez-os-83de004hrk-134976693/?c=750000000'
    },
    {
      id: 9,
      categoryId: 2,
      name: 'Razer Blade 16',
      description: 'Razer Blade 16 черный',
      price: 1299990,
      rating: 5,
      likes: 0,
      liked: false,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/ha7/h05/66699043897374.jpg?format=gallery-medium'],
      kaspiLink: 'https://kaspi.kz/shop/p/razer-blade-17-17-3-32-gb-ssd-1000-gb-win-11-d8-5-nt-rz09-0423qef3-r3e1-107970477/?c=750000000'
    },

    // Audio
    {
      id: 11,
      categoryId: 3,
      name: 'AirPods Pro 2',
      description: 'Apple AirPods Pro 2nd generation белый',
      price: 129990,
      rating: 5,
      likes: 0,
      liked: false,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg'],
      kaspiLink: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/'
    },
    {
      id: 12,
      categoryId: 3,
      name: 'Sony WH-1000XM5',
      description: 'Sony WH-1000XM5 черный',
      price: 199990,
      rating: 5,
      likes: 0,
      liked: false,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium'],
      kaspiLink: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-105259822/'
    },

    // Gaming
    {
      id: 16,
      categoryId: 4,
      name: 'PlayStation 5 Slim',
      description: 'Sony PlayStation 5 Slim Digital Edition',
      price: 299990,
      rating: 5,
      likes: 0,
      liked: false,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h20/h7e/84776332984350.jpg?format=gallery-medium'],
      kaspiLink: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-geimpad-charging-station-115629963/?c=750000000'
    },
    {
      id: 17,
      categoryId: 4,
      name: 'Xbox Series X',
      description: 'Microsoft Xbox Series X 1TB',
      price: 329990,
      rating: 5,
      likes: 0,
      liked: false,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h26/ha1/63982141407262.jpg?format=gallery-medium'],
      kaspiLink: 'https://kaspi.kz/shop/p/xbox-series-x-1tb-chernyi-100824897/'
    }
  ];

  constructor() { }

  getCategories(): Category[] {
    return this.categories;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(product => product.categoryId === categoryId);
  }

  removeProduct(productId: number): void {
    const index = this.products.findIndex(p => p.id === productId);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  likeProduct(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      if (product.liked) {
        product.likes--;
        product.liked = false;
      } else {
        product.likes++;
        product.liked = true;
      }
    }
  }

  shareOnWhatsApp(product: Product): string {
    const text = `Check out this product: ${product.name}\n${product.kaspiLink}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  }

  shareOnTelegram(product: Product): string {
    const text = `Check out this product: ${product.name}\n${product.kaspiLink}`;
    return `https://t.me/share/url?url=${encodeURIComponent(product.kaspiLink)}&text=${encodeURIComponent(product.name)}`;
  }
}
