import { Component, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink, RouterLinkActive],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  httpClient = inject(HttpClient);
  data: any[] = [];

  ngOnInit(): void{
    this.fetchAllProducts();
  }

  fetchAllProducts() {
    this.httpClient.get('https://dummyjson.com/products')
    .subscribe((data: any) => {
      console.log(data.products);
      this.data = data.products;
    })
  }
}