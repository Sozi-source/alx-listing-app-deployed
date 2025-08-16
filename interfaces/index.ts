export interface PropertyProps{
<<<<<<< HEAD
  id: number
  name: string;
=======
  id: number;
  name: string;
  description?: string;
>>>>>>> b560877029514670485d05ac887510730c8de948
  address: {
    state: string;
    city: string;
    country: string;
  };
<<<<<<< HEAD
  description?: string
=======
>>>>>>> b560877029514670485d05ac887510730c8de948
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}
    
export interface PillProps {
  label: string;
  isActive?: boolean;
  onClick: () => void;
<<<<<<< HEAD
}

export interface ReviewsProps{
propertyId: number,
    name: string,
    avatar: string,
    rating: number,
    comment: string
=======
>>>>>>> b560877029514670485d05ac887510730c8de948
}