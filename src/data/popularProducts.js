import img1 from '../assets/imgs/apple-swiper-1.png';
import img2 from '../assets/imgs/apple-swiper-2.jpg';
import img3 from '../assets/imgs/apple-swiper-3.png';
import img4 from '../assets/imgs/apple-swiper-4.jpg';
import img5 from '../assets/imgs/apple-swiper-5.png';
import img6 from '../assets/imgs/apple-swiper-6.png';
import img7 from '../assets/imgs/apple-swiper-7.jpg';
import img8 from '../assets/imgs/apple-swiper-8.jpg';
import img9 from '../assets/imgs/apple-swiper-9.jpg';

const popularProducts = [
  {
    id: 'iphone-17-pro-max',
    title: 'Smartfon Apple iPhone 17 Pro Max 256 GB',
    price: 20877000,
    oldPrice: 22877000,
    discount: -8,
    monthly: 'dan 1 478 788 so\'m/oyda',
    image: img1,
    description: 'Eng kuchli iPhone hali, ultra katta displey va ilg\'or kamera tizimi bilan.'
  },
  {
    id: 'xiaomi-redmi-14',
    title: 'Smartfon Xiaomi Redmi Note 14 6/128 GB',
    price: 2499000,
    oldPrice: 2960000,
    discount: -16,
    monthly: 'dan 182 219 so\'m/oyda',
    image: img2,
    description: 'Bujet-dostu Xiaomi, katta quvvat va ishlash vaqti.'
  },
  {
    id: 'iphone-16-pro-max',
    title: 'Smartfon Apple iPhone 16 Pro Max 256 GB',
    price: 18990000,
    oldPrice: 19990000,
    discount: -5,
    monthly: 'dan 1 345 125 so\'m/oyda',
    image: img3,
    description: 'Professional kameralar va eng yangi A18 Pro chipprovessori.'
  },
  {
    id: 'samsung-galaxy-a17',
    title: 'Smartfon Samsung Galaxy A17 6/128 GB',
    price: 2449000,
    oldPrice: 3449000,
    discount: -28,
    monthly: 'dan 178 573 so\'m/oyda',
    image: img4,
    description: 'Samsung sifati arzon narx, 6000 mAh batareya.'
  },
  {
    id: 'iphone-16-pro',
    title: 'Smartfon Apple iPhone 16 Pro 256 GB',
    price: 15990000,
    oldPrice: 12990000,
    discount: -11,
    monthly: 'dan 1 132 625 so\'m/oyda',
    image: img5,
    description: 'Mahir fotografiya va kino uchun eng yaxshi telefon.'
  },
  {
    id: 'samsung-galaxy-s25-ultra',
    title: 'Smartfon Samsung Galaxy S25 Ultra 5G',
    price: 14599000,
    oldPrice: 16599000,
    discount: -12,
    monthly: 'dan 1 064 510 so\'m/oyda',
    image: img6,
    description: 'Flagship Samsung, ultra kamera va 120Hz displey.'
  },
  {
    id: 'lg-television-43',
    title: 'Televiazor LG 43\" FHD Smart TV',
    price: 2399000,
    oldPrice: 3399000,
    discount: -29,
    monthly: 'dan 174 927 so\'m/oyda',
    image: img7,
    description: 'Shunorinli sifatli rasm va smart TV imkoniyatlari.'
  },
  {
    id: 'car-wheels-kit',
    title: 'Avtomobil g\'ildirachlari komplekti R17',
    price: 864000,
    oldPrice: 1260000,
    discount: -30,
    monthly: 'dan 63 000 so\'m/oyda',
    image: img8,
    description: 'Avtomobil uchun sifatli g\'ildiraklari va diski.'
  },
  {
    id: 'iphone-13-128',
    title: 'Smartfon Apple iPhone 13 128 GB',
    price: 6888000,
    oldPrice: 8888000,
    discount: -22,
    monthly: 'dan 487 900 so\'m/oyda',
    image: img9,
  },
  {
    id: 'iphone-15-pro-max',
    title: 'Smartfon Apple iPhone 15 Pro Max 256 GB',
    price: 16499000,
    oldPrice: 18000000,
    discount: -8,
    monthly: 'dan 1 200 000 so\'m/oyga',
    image: img1,
    description: 'Titanium korpus va A17 Pro chip.'
  },
  {
    id: 'iphone-15-pro',
    title: 'Smartfon Apple iPhone 15 Pro 128 GB',
    price: 14599000,
    oldPrice: 16000000,
    discount: -9,
    monthly: 'dan 1 050 000 so\'m/oyga',
    image: img2,
    description: 'Ajoyib kamera va engil vazn.'
  },
  {
    id: 'iphone-15',
    title: 'Smartfon Apple iPhone 15 128 GB',
    price: 11499000,
    oldPrice: 12500000,
    discount: -8,
    monthly: 'dan 850 000 so\'m/oyga',
    image: img3,
    description: 'Dynamic Island va USB-C porti.'
  },
  {
    id: 'iphone-14-pro-max',
    title: 'Smartfon Apple iPhone 14 Pro Max 256 GB',
    price: 13499000,
    oldPrice: 15000000,
    discount: -10,
    monthly: 'dan 950 000 so\'m/oyga',
    image: img4,
    description: '48 MP kamera va ajoyib ishlash.'
  },
  {
    id: 'iphone-14-pro',
    title: 'Smartfon Apple iPhone 14 Pro 128 GB',
    price: 12000000,
    oldPrice: 13500000,
    discount: -11,
    monthly: 'dan 880 000 so\'m/oyga',
    image: img5,
    description: 'Yorqin displey va ProMotion.'
  },
  {
    id: 'iphone-14',
    title: 'Smartfon Apple iPhone 14 128 GB',
    price: 9499000,
    oldPrice: 10500000,
    discount: -10,
    monthly: 'dan 700 000 so\'m/oyga',
    image: img6,
    description: 'Ishonchli va kunlik foydalanish uchun mukammal.'
  },
  {
    id: 'iphone-13-pro',
    title: 'Smartfon Apple iPhone 13 Pro 128 GB',
    price: 10499000,
    oldPrice: 11500000,
    discount: -9,
    monthly: 'dan 750 000 so\'m/oyga',
    image: img7,
    description: 'Pro kameralar tizimi va chiroyli dizayn.'
  },
  {
    id: 'iphone-13',
    title: 'Smartfon Apple iPhone 13 256 GB',
    price: 8499000,
    oldPrice: 9500000,
    discount: -11,
    monthly: 'dan 600 000 so\'m/oyga',
    image: img8,
    description: 'Ajoyib kamera va akkumulyator.'
  },
  {
    id: 'iphone-12',
    title: 'Smartfon Apple iPhone 12 128 GB',
    price: 6499000,
    oldPrice: 7500000,
    discount: -13,
    monthly: 'dan 450 000 so\'m/oyga',
    image: img9,
    description: '5G tezligi va ajoyib Super Retina XDR.'
  },
  {
    id: 'iphone-11',
    title: 'Smartfon Apple iPhone 11 128 GB',
    price: 5499000,
    oldPrice: 6000000,
    discount: -8,
    monthly: 'dan 380 000 so\'m/oyga',
    image: img1,
    description: 'Ajoyib suratlar va uzoq batareya vaqti.'
  },
  {
    id: 'ipad-pro-129',
    title: 'Planshet Apple iPad Pro 12.9" M2 256 GB',
    price: 16999000,
    oldPrice: 18500000,
    discount: -8,
    monthly: 'dan 1 250 000 so\'m/oyga',
    image: img2,
    description: 'M2 chipining ajoyib quvvati va Liquid Retina XDR displey.'
  },
  {
    id: 'ipad-pro-11',
    title: 'Planshet Apple iPad Pro 11" M2 128 GB',
    price: 12999000,
    oldPrice: 14000000,
    discount: -7,
    monthly: 'dan 950 000 so\'m/oyga',
    image: img3,
    description: 'Mukammal darajadagi mobil ijodkorlik.'
  },
  {
    id: 'ipad-air-5',
    title: 'Planshet Apple iPad Air 5 256 GB',
    price: 9999000,
    oldPrice: 11000000,
    discount: -9,
    monthly: 'dan 720 000 so\'m/oyga',
    image: img4,
    description: 'M1 chipli ultra-engil dizayn.'
  },
  {
    id: 'ipad-10',
    title: 'Planshet Apple iPad 10-avlod 64 GB',
    price: 6499000,
    oldPrice: 7200000,
    discount: -10,
    monthly: 'dan 450 000 so\'m/oyga',
    image: img5,
    description: 'Yangi dizayn va jonli ranglar.'
  },
  {
    id: 'ipad-mini-6',
    title: 'Planshet Apple iPad Mini 6 64 GB',
    price: 7499000,
    oldPrice: 8500000,
    discount: -12,
    monthly: 'dan 550 000 so\'m/oyga',
    image: img6,
    description: 'Kichik hajm, katta imkoniyatlar.'
  },
  {
    id: 'macbook-pro-16',
    title: 'Noutbuk Apple MacBook Pro 16" M3 Max',
    price: 45999000,
    oldPrice: 48000000,
    discount: -4,
    monthly: 'dan 3 500 000 so\'m/oyga',
    image: img7,
    description: 'Professional darajadagi mutlaq quvvat.'
  },
  {
    id: 'macbook-pro-14',
    title: 'Noutbuk Apple MacBook Pro 14" M3 Pro',
    price: 28999000,
    oldPrice: 31000000,
    discount: -6,
    monthly: 'dan 2 100 000 so\'m/oyga',
    image: img8,
    description: 'Aqlbovar qilmas ishlash tezligi.'
  },
  {
    id: 'macbook-air-15',
    title: 'Noutbuk Apple MacBook Air 15" M2',
    price: 18999000,
    oldPrice: 20500000,
    discount: -7,
    monthly: 'dan 1 350 000 so\'m/oyga',
    image: img9,
    description: 'Katta ekranli, chiroyli va engil noutbuk.'
  },
  {
    id: 'macbook-air-13',
    title: 'Noutbuk Apple MacBook Air 13" M2',
    price: 14999000,
    oldPrice: 16500000,
    discount: -9,
    monthly: 'dan 1 050 000 so\'m/oyga',
    image: img1,
    description: 'Engil dizayndagi M2 chip quvvati.'
  },
  {
    id: 'macbook-air-m1',
    title: 'Noutbuk Apple MacBook Air M1 256 GB',
    price: 10499000,
    oldPrice: 11500000,
    discount: -9,
    monthly: 'dan 750 000 so\'m/oyga',
    image: img2,
    description: 'M1 chipi bilan batareya ishlashida inqilob.'
  },
  {
    id: 'apple-watch-ultra-2',
    title: 'Aqlli Soat Apple Watch Ultra 2',
    price: 11999000,
    oldPrice: 13000000,
    discount: -8,
    monthly: 'dan 850 000 so\'m/oyga',
    image: img3,
    description: 'Ekstremal sharoitlar uchun mustahkam.'
  },
  {
    id: 'apple-watch-series-9-45',
    title: 'Aqlli Soat Apple Watch Series 9 45mm',
    price: 6499000,
    oldPrice: 7500000,
    discount: -13,
    monthly: 'dan 480 000 so\'m/oyga',
    image: img4,
    description: 'Yangi ishora boshqaruvi va yorqin ekran.'
  },
  {
    id: 'apple-watch-series-9-41',
    title: 'Aqlli Soat Apple Watch Series 9 41mm',
    price: 5999000,
    oldPrice: 6800000,
    discount: -12,
    monthly: 'dan 420 000 so\'m/oyga',
    image: img5,
    description: 'Sog`liq uchun ajoyib yordamchi.'
  },
  {
    id: 'apple-watch-se-2',
    title: 'Aqlli Soat Apple Watch SE 2 44mm',
    price: 4499000,
    oldPrice: 5200000,
    discount: -13,
    monthly: 'dan 320 000 so\'m/oyga',
    image: img6,
    description: 'Eng muhim funksiyalar hamyonbop narxda.'
  },
  {
    id: 'airpods-pro-2',
    title: 'Quloqchinlar Apple AirPods Pro 2',
    price: 3499000,
    oldPrice: 4000000,
    discount: -12,
    monthly: 'dan 250 000 so\'m/oyga',
    image: img7,
    description: 'Mukammal shovqin bekor qiluvchi quloqchinlar.'
  },
  {
    id: 'airpods-3',
    title: 'Quloqchinlar Apple AirPods 3',
    price: 2499000,
    oldPrice: 3000000,
    discount: -17,
    monthly: 'dan 180 000 so\'m/oyga',
    image: img8,
    description: 'Mekansal audio texnologiyasi.'
  },
  {
    id: 'airpods-max',
    title: 'Quloqchinlar Apple AirPods Max',
    price: 7499000,
    oldPrice: 8500000,
    discount: -12,
    monthly: 'dan 550 000 so\'m/oyga',
    image: img9,
    description: 'Ajoyib ovoz sifatli premium quloqchin.'
  },
  {
    id: 'mac-mini-m2',
    title: 'Kompyuter Apple Mac mini M2 256 GB',
    price: 8999000,
    oldPrice: 10000000,
    discount: -10,
    monthly: 'dan 650 000 so\'m/oyga',
    image: img1,
    description: 'Kichik o`lchamli haqiqiy kuch.'
  },
  {
    id: 'imac-24-m3',
    title: 'Monoblok Apple iMac 24" M3 256 GB',
    price: 18999000,
    oldPrice: 20500000,
    discount: -7,
    monthly: 'dan 1 350 000 so\'m/oyga',
    image: img2,
    description: 'Go`zal dizaynda hammasi mujassam.'
  },
  {
    id: 'apple-pencil-2',
    title: 'Qalam Apple Pencil 2',
    price: 1899000,
    oldPrice: 2200000,
    discount: -14,
    monthly: 'dan 130 000 so\'m/oyga',
    image: img3,
    description: 'Chizish va yozish uchun aniq asbob.'
  }
];

export default popularProducts;
