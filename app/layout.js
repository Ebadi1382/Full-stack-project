import "../styles/globals.css";
import Header from "../components/Header";
const RootLayout = ({ children }) => {
  return (
    <html dir="rtl">
      <body className="container mx-auto px-10">
        <header className="container">
          <Header />
        </header>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
