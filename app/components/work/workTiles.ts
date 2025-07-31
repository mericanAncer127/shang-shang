export type WorkTile = {
  title: string;
  description: string;
  video: {
    desktop_src: string;
    mobile_src: string;
    width: number;
    height: number;
  };
};

export const workTiles: WorkTile[] = [
  {
    title: 'Savotta',
    description: `Store Locator & Map Integration`,
    video: {
      desktop_src: 'landscape_shop_tablet.mp4',
      mobile_src: 'mobile_uber_eats_food_order.mp4',
      width: 600,
      height: 717,
    },
  },
  {
    title: `Bremont`,
    description: `Product use Case & Seamless Article Navigation`,
    video: {
      desktop_src: 'lancescape_shop_jacket.mp4',
      mobile_src: 'mobile_virtual_try_on.mp4',
      width: 544,
      height: 304,
    },
  },
  {
    title: 'Daniel Wellington',
    description: `Perfect Match Suggestion`,
    video: {
      desktop_src: 'landscape_mobile_menu.mp4',
      mobile_src: 'mobile_shopping.mp4',
      width: 600,
      height: 717,
    },
  },
  {
    title: 'Toysrus',
    description: `User-Friendly Brand Navigation`,
    video: {
      desktop_src: 'landscape_shipping.mp4',
      mobile_src: 'mobile_shop_mobile.mp4',
      width: 600,
      height: 717,
    },
  },
  {
    title: 'Burga',
    description: 'Collection Navigation & Instant Checkout',
    video: {
      desktop_src: 'landscape_in_store_shop.mp4',
      mobile_src: 'mobile_order_tracking.mp4',
      width: 600,
      height: 554,
    },
  },
  {
    title: 'Happy Earth Tea',
    description: `Simple UI for Product Browsing`,
    video: {
      desktop_src: 'landscape_shop_mobile.mp4',
      mobile_src: 'mobile_delivering.mp4',
      width: 600,
      height: 717,
    },
  },
];
