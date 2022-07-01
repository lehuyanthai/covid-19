import {
  FacebookIcon,
  LinkedInIcon,
  PrinterestIcon,
  TwitterIcon,
  YoutubeIcon,
} from '../icons';

export const DESCRIPTION_PRODUCT_TAB = [
  { label: 'Description', key: 'description' },
  { label: 'Information', key: 'information' },
  { label: 'Review', key: 'review' },
];

export const HEADER_MENU = [
  { label: 'Home', key: 'home', link: '/home' },
  { label: 'About us', key: 'about us', link: '/aboutus' },
  { label: 'Product view', key: 'product view', link: '/products' },
  { label: 'Shop now', key: 'shop now', link: '/products' },
  { label: 'Contact us', key: 'contact us', link: '/contactus' },
];

export const FOOTER = [
  {
    label: 'Link',
    links: ['Shop', 'Product', 'Collection', 'About Corona', 'Company', 'Blog'],
  },
  {
    label: 'Company Support',
    links: [
      'Maintenance',
      'Support',
      'Reviews',
      'Contact us',
      'Privacy policy',
      'Frequently Asked Questions',
    ],
  },
  {
    label: 'Follow us on Instagram',
    images: [
      'https://m.media-amazon.com/images/I/61+ilDgVVwS._UX569_.jpg',
      'https://m.media-amazon.com/images/I/61+ilDgVVwS._UX569_.jpg',
      'https://m.media-amazon.com/images/I/61+ilDgVVwS._UX569_.jpg',
      'https://m.media-amazon.com/images/I/61+ilDgVVwS._UX569_.jpg',
    ],
  },
];

export const COLORS = [
  '#FF4646',
  '#9C46FF',
  '#FFA346',
  '#4677FF',
  '#76FF46',
  '#FF46A9',
];

export const CATEGORIES = [
  { label: 'N95 Mask', name: 'mask' },
  { label: 'Mask', name: 'n95-mask' },
  { label: 'Hand Sanitizer', name: 'hand-sanitizer' },
  { label: 'Sunglasses', name: 'sunglasses' },
];

export const SOCIAL_MEDIA = [
  {
    label: 'Facebook',
    icon: <FacebookIcon />,
  },
  {
    label: 'Youtube',
    icon: <YoutubeIcon />,
  },
  {
    label: 'Twitter',
    icon: <TwitterIcon />,
  },
  {
    label: 'LinkedIn',
    icon: <LinkedInIcon />,
  },
];

export const SOCIAL_MEDIA_SHARE = [
  {
    label: 'Facebook',
    icon: <FacebookIcon />,
  },
  {
    label: 'Twitter',
    icon: <TwitterIcon />,
  },
  {
    label: 'Printerest',
    icon: <PrinterestIcon />,
  },
];

export const DEFAULT_PRODUCT_DATA = {
  id: '1',
  name: 'Customized Reusable Face Mask',
  category: 'Mask',
  price: 35,
  discount: 10,
  rating: 5,
  colors: ['#fff', '3d3d3d'],
  description:
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tookng. to make a type speing to vertu jlsoj fhdsu kflsd cimen book. It has survived not only five centuries, but also the leap  into verronic typesetting important. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently em Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
  customerReview: 10,
  images: [
    'https://m.media-amazon.com/images/I/61+ilDgVVwS._UX569_.jpg',
    'https://m.media-amazon.com/images/I/61+ilDgVVwS._UX569_.jpg',
    'https://m.media-amazon.com/images/I/61+ilDgVVwS._UX569_.jpg',
    'https://m.media-amazon.com/images/I/61+ilDgVVwS._UX569_.jpg',
  ],
};

export const TEX_FEE: number = 10;

export const SHIPPING_FEE: number = 5;

export const PAYMENT_METHODS = {
  CREDIT_CARD: 'CREDIT_CARD',
  CASH_PAYMENT: 'CASH_PAYMENT',
  PAYPAL: 'PAYPAL',
  GOOGLE_PAY: 'GOOGLE_PAY',
};

export const API_ROOT = 'http://localhost:8000';

export const EMPTY_FILTER_DATA = {
  colors: [],
  price: 100,
  category: ''
};
