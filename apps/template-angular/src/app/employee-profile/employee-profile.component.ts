import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css'],
})
export class EmployeeProfileComponent {
  readonly #productService=inject(ProductService);
  readonly #router=inject(Router);
  products$=this.#productService.getProducts();
  showDetail(id: any) {
    this.#router.navigate([`profile/${id}`]);
  }
}
