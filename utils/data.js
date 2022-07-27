import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('12345'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'customer@example.com',
      password: bcrypt.hashSync('12345'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'gambar1',
      slug: 'gambar-1',
      category: 'cat1',
      image: '/images/img1.jpg',
      price: 70,
    },
    {
      name: 'gambar2',
      slug: 'gambar-2',
      category: 'cat2',
      image: '/images/img1.jpg',
      price: 80,
    },
    {
      name: 'gambar3',
      slug: 'gambar-3',
      category: 'cat1',
      image: '/images/img2.jpg',
      isFeatured: true,
      price: 90,
    },
    {
      name: 'gambar4',
      slug: 'gambar-4',
      category: 'cat1',
      image: '/images/img2.jpg',
      isFeatured: true,
      price: 100,
    },
    {
      name: 'gambar5',
      slug: 'gambar-5',
      category: 'cat2',
      image: '/images/img1.jpg',
      price: 110,
    },
    {
      name: 'gambar6',
      slug: 'gambar-6',
      category: 'cat2',
      image: '/images/img1.jpg',
      price: 110,
    },
  ],
  banners: [
    {
      title: 'Sale',
      image: '/images/sale.jpeg',
      link: '/search?category=cat2',
    },
  ],
};

export default data;
