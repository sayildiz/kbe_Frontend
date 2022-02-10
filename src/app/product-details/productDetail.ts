export interface ProductDetail{
  uuid: string;
  name: string;
  price: number;
  vat: number;
  location: string;
  amount: number;
  deliveryTime: number;
  priceUSD?: number;
  description: string;
}
