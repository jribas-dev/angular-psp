import { Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';

export const routes: Routes = [{
    path: '',
    component: PageHomeComponent
},{
    path: 'product',
    component: ProductInfoComponent
}];
