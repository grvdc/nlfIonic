import { Injectable ,} from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
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
    
   
  }
  // admin
  // admin12345

  getAuthToken() {
    const formData = new FormData();
    formData.append('username', 'admin');
    formData.append('password', 'admin12345');

    const adminTokenPoint = 'https://ocodecommerce.com/terraartesana/rest/V1/integration/admin/token';
    
    return this.HttpClient.post(adminTokenPoint, formData);
      
  }
  tesApi() {
    return this.HttpClient.get('https://74e37f3412f07c416015254388b0404a:7f46f7bf0452eb854fa458293586b4f5@kiwi-diamond.myshopify.com/admin/api/2019-07/products.json');
    

  //  'https://74e37f3412f07c416015254388b0404a:7f46f7bf0452eb854fa458293586b4f5@kiwi-diamond.myshopify.com/admin/api/2019-07/products.json'
   
    
// 'https://6fd46174aee173f412cc77ade4e45373:b172769a231abb12bce3caa984077b8e@shovava-com.myshopify.com/admin/api/2019-07/products.json'
    // return this.HttpClient.get('https://jsonplaceholder.typicode.com/posts' );
    
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
