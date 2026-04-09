import React, { useState, createContext } from "react";

export const Store = createContext();

export default function Context({ children }) {
  const [cart, setCart] = useState([]);

  function AddToCart(item) {
  const product = cart.find((prod) => prod.id === item.id);

  if (product) {
    const updateCart = cart.map((prod) =>
      prod.id === item.id
        ? { ...prod, qua: prod.qua + 1 }
        : prod
    );
    setCart(updateCart);
  } else {
    setCart((prev) => [...prev, { ...item, qua: 1 }]);
  }
}
//   function AddToCart(item) {
//     const product = cart.find((prod) => prod.id == item.id);
//     if (product) {
//       const updateCart = cart.map((prod) => {
//         return prod.id == product.id ? { ...prod, qua: prod.qua + 1 } : prod;
//       });
//       setCart(updateCart);
//     } else {
//       setCart((prev) => [...cart, item]);
//     }
//   }
  const Total = cart.reduce(
  (acc, item) => acc + item.price * item.qua,
  0
);
//   const  Total = cart.reduce((item,sum)=>item.price+sum,0)
//   function quyHandeler(id, flag) {
//     const product = cart.find((prod) => prod.id == id);
//     let updateCart = [];
//     if (flag == "1") {
//       updateCart = cart.map((prod) => {
//         return prod.id == product.id ? { ...prod, qua: prod.qua + 1 } : prod;
//       });
//     } else {
//       updateCart = cart.map((prod) => {
//         return prod.id == product.id ? { ...prod, qua: prod.qua - 1 } : prod;
//       });
//     }
//     setCart(updateCart);
//   }

function quyHandeler(id, flag) {
  const product = cart.find((prod) => prod.id === id);

  let updateCart = [];

  if (flag === 1) {
    updateCart = cart.map((prod) =>
      prod.id === id ? { ...prod, qua: prod.qua + 1 } : prod
    );
  } else {
    updateCart = cart.map((prod) =>
      prod.id === id && prod.qua > 1
        ? { ...prod, qua: prod.qua - 1 }
        : prod
    );
  }

  setCart(updateCart);
}

const removeItem = (id) => {
  setCart((prev) => prev.filter((item) => item.id !== id));
};
  return (
    <Store.Provider value={{ cart, AddToCart, quyHandeler , Total, removeItem}}>
      {children}
    </Store.Provider>
  );
}
