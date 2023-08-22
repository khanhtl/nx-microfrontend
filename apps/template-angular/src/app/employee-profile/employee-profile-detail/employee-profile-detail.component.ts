import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-employee-profile-detail',
  templateUrl: './employee-profile-detail.component.html',
  styleUrls: ['./employee-profile-detail.component.css'],
})
export class EmployeeProfileDetailComponent {
  readonly #route=inject(ActivatedRoute);
  readonly #productService=inject(ProductService);
  product$=this.#route.paramMap.pipe(switchMap(param => {
    return this.#productService.getProduct(param.get('id'));
  }))
  ngOnInit(): void {
    const id = this.#route.snapshot.paramMap.get('id');
    if (id) {
      console.log(id);
    }
  }
}
