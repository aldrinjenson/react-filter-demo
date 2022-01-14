import { useEffect, useState } from "react";
import Card from "./Card";

const Dashboard = ({ products, filters }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  useEffect(() => {
    if (Object.values(filters).filter(Boolean).length === 0) {
      setFilteredProducts(products);
      return;
    }
    const filtered = products.filter((p) => {
      if (filters.rating && filters.rating === p.rating) {
        return true;
      }
      if (filters.quality && filters.quality === p.quality) {
        return true;
      }
      if (filters.service && filters.service === p.service) {
        return true;
      }
      if (filters.comfort && filters.comfort === p.comfort) {
        return true;
      }
      return false;
    });
    setFilteredProducts(filtered);
  }, [products, filters]);
  return (
    <>
      <p>{filteredProducts.length} matching product(s) </p>
      <div style={{ height: "85vh", overflow: "auto", overflowX: "hidden" }}>
        <div
          className=' '
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {filteredProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
