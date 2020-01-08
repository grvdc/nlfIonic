import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.BASE_URL;
  options: any;
  authToken: any;
  adminToken: any;
  tkn: any = "Bearer mlhqi7ltymvn76dtfo462052qhmp8gft";
  constructor(public HttpClient: HttpClient) {

    // this.options =   {

    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'Accept':'application/json',
    //     'Authorization':'Bearer '+ 'p3b6tfql6vci29b1851c5gw9r1n6ashx'
    //   }
  }

  neww() {
    // let header = new HttpHeaders();
    // header.append('Content-Type', 'application/json');
    // header.append('Accept', 'application/json');
    // header.append('Authorization', 'Bearer ' + 'p3b6tfql6vci29b1851c5gw9r1n6ashx');
    // this.options = header;
    this.options = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + 'p3b6tfql6vci29b1851c5gw9r1n6ashx'

    });
  }
  // admin
  // admin12345

  getAuthToken() {
    const formData = new FormData();
    formData.append('username', 'admin');
    formData.append('password', 'admin12345');

    const adminTokenPoint = 'https://ocodecommerce.com/terraartesana/rest/V1/integration/admin/token';
    // make http post request to magento2 api
    this.HttpClient.post<any>(adminTokenPoint, formData)
      .subscribe(
        res => {
          this.adminToken = res;
          // this.getProducts(res);
        },
        err => {
          console.log(err);
        }
      );
  }
  tesApi() {
//     let dt:any;
//     let headers = new HttpHeaders();
// headers = headers.append('Authorization', 'Bearer 93vbhkxx31u0w2d9udbwzkwo6dv8u834');
// headers = headers.append('Accept', 'application/json');
// headers = headers.append('Content-Type', 'application/json');
//  dt = headers;
 let formData:any;
  formData = new FormData();
    formData.append('Authorization', 'Bearer 93vbhkxx31u0w2d9udbwzkwo6dv8u834');
    formData.append('Accept', 'application/json');
    formData.append('Content-Type', 'application/json');

    // this.getAuthToken();
    // $httpProvider.defaults.headers.common["Accept"] = "application/json";
    // $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    // $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    // const apiEndPoint = `https://ocodecommerce.com/terraartesana/rest/V1/products`;
    return this.HttpClient.get('https://ocodecommerce.com/terraartesana/rest/V1/products?searchCriteria[page_size]=2', formData );
    // return this.HttpClient.get('https://jsonplaceholder.typicode.com/todos/1' );
    // return this.HttpClient.get('http://ang.rishteyindia.co.in/test.php' );
    // return this.HttpClient.get<any>(apiEndPoint,formData)

  }



  getProducts(adminTokenStr: string) {
    const adminToken = adminTokenStr;
    const categoryId = 3; // get products from category id 3
    const sortOderType = 'DESC'; // sort order type
    const pageSize = 10; // number of products
    const currentPage = 1; // get products for first page
    const apiEndPoint = `https://ocodecommerce.com/terraartesana/rest/V1/products`;
    // make http request to magento2's api
    this.HttpClient.get<any>(apiEndPoint, {
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + adminToken }
    }).subscribe(
      res => {
        console.log('res');
        console.log(res);
        const prodsArr = res.items;

        prodsArr.forEach((item) => {
          const imagePath = `${this.baseUrl}pub/media/catalog/product${item.custom_attributes[0].value}`;

        });
      },
      err => {
        console.log(err);
      }
    );
  }
}
