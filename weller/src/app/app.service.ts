import {
    Injectable
} from '@angular/core';

export class Product {
    name: string;
    count: number;
    active: boolean;
}

let products: Product[] = [{
    name: 'Moisture in % ',
    count: 41,
    active: true
}, {
    name: 'Temperature in °C ',
    count: 32,
    active: true
}, {
    name: 'Humidity in % ',
    count: 13,
    active: true
}, {
    name: 'Battery in % ',
    count: 53,
    active: true
}];

@Injectable()
export class Service {
    getProducts(): Product[] {
        return products;
    }
}