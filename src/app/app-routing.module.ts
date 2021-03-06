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
  },
  {
    path: 'order-success',
    loadChildren: () => import('./pages/order-success/order-success.module').then( m => m.OrderSuccessPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./pages/test/test.module').then( m => m.TestPageModule)
  },
 
  {
    path: 'all-categories',
    loadChildren: () => import('./pages/all-categories/all-categories.module').then( m => m.AllCategoriesPageModule)
  },
  {
    path: 'shop-by-category',
    loadChildren: () => import('./pages/shop-by-category/shop-by-category.module').then( m => m.ShopByCategoryPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./pages/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./pages/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'shop-page',
    loadChildren: () => import('./pages/shop-page/shop-page.module').then( m => m.ShopPagePageModule)
  },
  {
    path: 'filter-product',
    loadChildren: () => import('./pages/filter-product/filter-product.module').then( m => m.FilterProductPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
