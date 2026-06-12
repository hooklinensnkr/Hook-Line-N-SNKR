import './globals.css';

export const metadata = {
  title: 'Hook Line N SNKR',
  description: 'Custom clothes e-commerce',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <h1>Hook Line N SNKR</h1>
          <nav>
            <a href="/">Home</a>
            <a href="/products">Shop</a>
            <a href="/cart">Cart</a>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
