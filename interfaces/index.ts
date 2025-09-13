export interface propertyprops{
    id: number;
    name: string;
    rating:number;
    category: string;
    price:number;
    image: string;
    discount: number;
    address:{
      state: string;
      city: string;
      country: string;
    }
    offers: {
      bed: string;
      shower: string;
      occupants: string;
    }
}



export interface Reviewprops {
  id: number;
  propertyId: number;
  name: string;
  avatar: string;   // URL to avatar image
  rating: number;   // e.g. 1–5 stars
  comment: string;
}

export interface BookingDetailsprops{
  propertyName: string;
  startDate: string;
  totalNights: number;
  price: number;
  discount: number;
}