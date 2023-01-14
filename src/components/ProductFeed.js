import React from "react";
import Product from "./Product";
import Image from "next/image";

function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products
        .slice(0, 4)
        .map(({ id, title, price, image, description, category }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            image={image}
            description={description}
            category={category}
          />
        ))}
      <img
        className="md:col-span-full h-[400px] w-full"
        src="/pexel_banner.jpeg"
        alt=""
      />
      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ id, title, price, image, description, category }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              image={image}
              description={description}
              category={category}
            />
          ))}
      </div>
      {products
        .slice(5, products.length)
        .map(({ id, title, price, image, description, category }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            image={image}
            description={description}
            category={category}
          />
        ))}
    </div>
  );
}

export default ProductFeed;
