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
      name: 'Don Quixote By Miguel de Cervante',
      slug: 'Don Quixote oleh Miguel de Cervante',
      category: 'Popular',
      image: '/images/book1.jpg',
      price: 70,
    },
    {
      name: 'A Tale of Two Cities By Charles Dickens',
      slug: 'A Tale of Two Cities oleh Charles Dickens',
      category: 'Fiction',
      image: '/images/book2.jpg',
      price: 80,
    },
    {
      name: 'The Lord of the Rings By J.R.R',
      slug: 'The Lord of the Rings oleh J.R.R',
      category: 'Fiction',
      image: '/images/book3.jpg',
      isFeatured: true,
      price: 90,
    },
    {
      name: 'The Little Prince By Antoine de Saint-Exupery',
      slug: 'The Little Prince oleh Antoine de Saint-Exupery',
      category: 'Popular',
      image: '/images/book4.jpg',
      isFeatured: true,
      price: 100,
    },
    {
      name: 'Harry Potter and the Sorcerers Stone By J.K. Rowling',
      slug: 'Harry Potter and the Sorcerers Stone oleh J.K. Rowling',
      category: 'Popular',
      image: '/images/book5.jpg',
      price: 110,
    },
    {
      name: 'And Then There Were None By Agatha Christie',
      slug: 'And Then There Were None oleh Agatha Christie',
      category: 'Fiction',
      image: '/images/book6.jpg',
      price: 110,
    },
  ],
  banners: [
    {
      title: 'Sale',
      image: '/images/sale.jpeg',
      link: '/search?category=Fiction',
    },
    {
      title: 'Popular',
      image: '/images/sale2.jpeg',
      link: '/search?category=Popular',
    },
  ],
};

export default data;
