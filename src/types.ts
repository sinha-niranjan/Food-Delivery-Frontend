export type User = {
  message: string;
  user: {
    _id: string;
    email: string;
    name: string;
    addressLine1: string;
    city: string;
    country: string;
  };
};

export type MenuItem = {
  _id: string;
  name: string;
  price: number;
};

export type Restaurant = {
  message: string;
  restaurant: {
    _id: string;
    user: string;
    restaurantName: string;
    city: string;
    country: string;
    deliveryPrice: number;
    estimatedDeliveryTime: number;
    cuisines: string[];
    menuItems: MenuItem[];
    imageUrl: string;
    lastUpdated: string;
  };
};

export type RestaurantItem = {
  _id: string;
  user: string;
  restaurantName: string;
  city: string;
  country: string;
  deliveryPrice: number;
  estimatedDeliveryTime: number;
  cuisines: string[];
  menuItems: MenuItem[];
  imageUrl: string;
  lastUpdated: string;
};

export type RestaurantSeachRequest = {
  data: RestaurantItem[];
  pagination: {
    total: number;
    page: number;
    pages: number;
  };
};
