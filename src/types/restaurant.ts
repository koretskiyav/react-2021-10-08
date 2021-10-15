export interface IRestaurant {
  id: string;
  name: string;
  menu: IMenu[];
  reviews: IReviews[];
}

export interface IMenu {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
}

export interface IReviews {
  id: string;
  user: string;
  text: string;
  rating: number;
}
