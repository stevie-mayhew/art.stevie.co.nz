export type ItemType = 'print' | 'original' | 'zine';

export interface ShopItem {
  id: string;
  title: string;
  type: ItemType;
  medium?: string;
  dimensions: string;
  edition?: string;
  price: number;
  available: boolean;
  image: string;
  workSlug?: string;
}

export const shopItems: ShopItem[] = [
  {
    id: 'four-cubed-print',
    title: '4³',
    type: 'print',
    medium: 'Relief Print',
    dimensions: '40 × 40 cm',
    edition: 'Edition of 10',
    price: 380,
    available: true,
    image: '/shop/four-cubed.jpg',
    workSlug: 'four-cubed',
  },
  {
    id: 'circular-print',
    title: 'Circular',
    type: 'print',
    medium: 'Relief Print',
    dimensions: '40 × 40 cm',
    edition: 'Edition of 10',
    price: 380,
    available: true,
    image: '/shop/circular.jpg',
    workSlug: 'circular',
  },
  {
    id: 'heart-print',
    title: 'Heart',
    type: 'print',
    medium: 'Screenprint',
    dimensions: '50 × 50 cm',
    edition: 'Edition of 15',
    price: 320,
    available: true,
    image: '/shop/heart.jpg',
    workSlug: 'heart',
  },
  {
    id: 'paper-me-original',
    title: 'Paper Me (Original)',
    type: 'original',
    medium: 'Oil',
    dimensions: '60 × 80 cm',
    price: 2400,
    available: true,
    image: '/shop/paper-me.jpg',
    workSlug: 'paper-me',
  },
  {
    id: 'corban-series-zine',
    title: 'Corban Series (Zine)',
    type: 'zine',
    dimensions: 'A5, 32 pages',
    edition: 'Limited run of 50',
    price: 35,
    available: true,
    image: '/shop/corban-zine.jpg',
  },
];
