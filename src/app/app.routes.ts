import { Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageProductComponent } from './pages/page-product/page-product.component';

export const routes: Routes = [{
    path: '',
    component: PageHomeComponent
},{
    path: 'product/:id',
    component: PageProductComponent
}];
