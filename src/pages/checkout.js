import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/react";

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session } = useSession();

  return (
    <div>
      <Header />

      <main className="lg:flex max-w-screen-xl mx-auto bg-gray-100">
        {/* Left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="/checkout_banner.jpeg"
            width={1920}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col space-y-10 p-5 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your shopping cart is Empty."
                : "Your Cart:"}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        {/* Right */}
        {items.length > 0 && (
          <div className="flex flex-col bg-white p-10 shadow-md">
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):
                <span className="font-bold">
                  <Currency quantity={total} currency="GBP" />
                </span>
              </h2>

              <button
                disabled={!session}
                className={`button ${
                  !session &&
                  "from-gray-300 to-gray-500 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to checkout" : "Proceed to Checkout"}
              </button>
            </>
          </div>
        )}
      </main>
    </div>
  );
}

export default Checkout;
