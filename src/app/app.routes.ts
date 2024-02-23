import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { SingleProductViewComponent } from './single-product-view/single-product-view.component';

export const routes: Routes = [
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', component: SingleProductViewComponent },
    { path: '', redirectTo: '/products', pathMatch: 'full' }
];
