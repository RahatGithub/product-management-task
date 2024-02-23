import { Component, OnInit, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-product-view',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './single-product-view.component.html',
  styleUrl: './single-product-view.component.css'
})
export class SingleProductViewComponent implements OnInit{
  httpClient = inject(HttpClient);
  // data: any[] = [];
  data: any = {}
  id: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']; // Access the 'id' parameter from the URL
      console.log('ID:', this.id);
    });

    this.fetchSingleProduct(); 
  }

  fetchSingleProduct() {
    this.httpClient.get(`https://dummyjson.com/products/${this.id}`)
      .subscribe((data: any) => {
          console.log(data);
          this.data = data;
        }
      );
  }
  
}


