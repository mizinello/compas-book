import nc from 'next-connect';
import Product from '../../models/Product';
import Banner from '../../models/Banner';
import db from '../../utils/db';
import data from '../../utils/data';
import User from '../../models/User';

const handler = nc();
handler.get(async (req, res) => {
  await db.connect;
  await User.deleteMany();
  await User.insertMany(data.users);
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await Banner.deleteMany();
  await Banner.insertMany(data.banners);
  await db.disconnect();
  res.send({ message: 'seed success' });
});

export default handler;
