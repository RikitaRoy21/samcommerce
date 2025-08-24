import React, { useContext } from "react";
import data from "../data/websites";
import { WishlistContext } from "../App";

function Sams() {
  const { wishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext);

  const isInWishlist = (item) => wishlist.some((w) => w.name === item.name);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Marketplace</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
          >
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.name}
              className="h-48 w-full object-cover"
            />

            {/* Content */}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h2>
              <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                {item.description}
              </p>

              {/* Price + Seller */}
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold text-green-600">
                  ₹{item.price}
                </span>
                <span className="text-sm text-gray-400">By {item.seller}</span>
              </div>

              {/* File Type + Buttons */}
              <div className="flex justify-between items-center mt-4">
                <span className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">
                  {item.fileType}
                </span>
                <div className="flex flex-col gap-2">
                  <button className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition">
                    Buy Now
                  </button>
                  {isInWishlist(item) ? (
                    <button
                      disabled
                      className="px-4 py-2 bg-gray-400 text-white text-sm rounded-lg cursor-not-allowed"
                    >
                      Already in Wishlist
                    </button>
                  ) : (
                    <button
                      onClick={() => addToWishlist(item)}
                      className="px-4 py-2 bg-gray-600 text-white text-sm rounded-lg hover:bg-gray-700 transition"
                    >
                      Add to Wishlist
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sams;
