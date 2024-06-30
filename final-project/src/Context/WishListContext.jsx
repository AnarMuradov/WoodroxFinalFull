import React, { createContext } from "react";
import useLocalStorage from "use-local-storage";
export const WishListContext = createContext();

function WishListProvider({ children }) {
  const [wishList, setWishList] = useLocalStorage("wishlist", []);
  function addWishList(item) {
    const elementindex = wishList.findIndex((x) => x._id === item._id);
    if (elementindex === -1) {
      setWishList([...wishList, item ]);
      return;
    }
    removeWishList(item)
  }
  function removeWishList(item) {
    setWishList(wishList.filter((x) => x._id !== item._id));
  }
  function isWishList(item) {
    return wishList.findIndex((x) => x._id === item._id) === -1 ? false : true;
  }
  return (
    <WishListContext.Provider
      value={{ wishList, addWishList, removeWishList, isWishList }}
    >
      {children}
    </WishListContext.Provider>
  );
}

export default WishListProvider;