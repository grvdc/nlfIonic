import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CheckoutFormStepperComponent } from './components/checkout-form-stepper/checkout-form-stepper.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login-page',
    loadChildren: () => import('./pages/login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'cart-page',
    loadChildren: () => import('./pages/cart-page/cart-page.module').then( m => m.CartPagePageModule)
  },
  {
    path: 'shop-bycaegorie',
    loadChildren: () => import('./pages/shop-bycaegorie/shop-bycaegorie.module').then( m => m.ShopBycaegoriePageModule)
  },
  {
    path: 'product-detail-page',
    loadChildren: () => import('./pages/product-detail-page/product-detail-page.module').then( m => m.ProductDetailPagePageModule)
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./pages/wishlist/wishlist.module').then( m => m.WishlistPageModule)
  },
  {
    path:'stepper',
    component:CheckoutFormStepperComponent,
  },
  {
    path: 'address-screen',
    loadChildren: () => import('./pages/address-screen/address-screen.module').then( m => m.AddressScreenPageModule)
  },
  {
    path: 'all-address',
    loadChildren: () => import('./pages/all-address/all-address.module').then( m => m.AllAddressPageModule)
  },
  {
    path: 'invoice-page',
    loadChildren: () => import('./pages/invoice-page/invoice-page.module').then( m => m.InvoicePagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
