export interface Product{
    [x: string]:  any;
    reviews: number;
    rating: number;
    category: string;
    discountPercentage: number;
    stockLevel: number;
    name: string;
    _id : string;
    productName : string;
    _type : "product";
    image? :{
        asset : {
            _ref : string;
            _type : "image";
        }
    };
    price : number;
    description? : string;
    slug : {
         _type : "slug"
         current : string;
    };

}
