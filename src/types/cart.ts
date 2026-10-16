import { MenuItem } from '../data/restaurantData';

export interface CartItem {
  item: MenuItem;
  quantity: number;
  notes?: string;
}

export type OrderType = 'delivery' | 'retirada';
export type PaymentMethod = 'pix' | 'cartao_entrega' | 'dinheiro';

export interface CustomerOrderData {
  name: string;
  phone: string;
  orderType: OrderType;
  address: string;
  number: string;
  neighborhood: string;
  complement?: string;
  paymentMethod: PaymentMethod;
  cashChangeFor?: string;
  orderNotes?: string;
}
