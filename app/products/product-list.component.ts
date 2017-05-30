import { Component, OnInit} from '@angular/core';
import { IProduct} from './product';
import { ProductService } from './product.service';
@Component({
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List from prop';
    imgWidth: number = 50;
    imgMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    products: IProduct[];
    errorMessage: string;
    constructor(private _productService: ProductService){

    }
    toogleImage(){
        this.showImage = !this.showImage;
    }

    ngOnInit():void{
        this._productService.getProducts()
            .subscribe(products=>this.products = products,
                        error=> this.errorMessage = <any>error);
    }

    onRatingClicked(message: string):void{
        this.pageTitle = 'Product list' + message; 
    }
}