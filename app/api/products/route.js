const products = [
  {
    id: 1,
    name: 'Custom T-Shirt',
    price: 29.99,
    description: 'Premium cotton custom t-shirt',
    image: 'https://via.placeholder.com/250?text=T-Shirt'
  },
  {
    id: 2,
    name: 'Designer Hoodie',
    price: 59.99,
    description: 'Comfortable custom hoodie',
    image: 'https://via.placeholder.com/250?text=Hoodie'
  },
  {
    id: 3,
    name: 'Custom Jacket',
    price: 99.99,
    description: 'Premium custom jacket',
    image: 'https://via.placeholder.com/250?text=Jacket'
  }
];

export async function GET() {
  return Response.json(products);
}
