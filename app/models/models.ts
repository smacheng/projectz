
export class Shop {
    constructor(
    public title: string ="",
    public description: string ="",
    public image: string="http://lorempixel.com/390/195/food/",
    public start_time: string ="",
    public end_time: string ="",
    public delivery_time: string ="",
    public delivery_cost: string =""
    
    ) {}
} 
export class Category {
    constructor(
    public title: string ="",
    public description: string =""
    ) {}
} 

export class Item {
    category_key: string;
    shop_key: string;    
    
    constructor(
    public title: string ="",
    public description: string ="",
    public image: string ="http://lorempixel.com/390/195/food/",
    public price: number = null
    ) {}

} 


export class ItemEntity {
    constructor(
        public key: string, 
        public item: any, 
        public quantity: number
    ){}
} 




export class ItemCat {
    constructor(
        public id: string, 
        public title: string, 
        public form: any,
        public db: any){
    }
} 

