import { Component, inject } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css'],
})
export class EmployeeProfileComponent {
  private readonly productService=inject(ProductService);
  products$=this.productService.getProducts();
  constructor() {

  }
  ngOnInit() {
  }
}
