// ações do carrinho 

//CASOS DE USO

// adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

// calcular o total do carrinho
async function calculateTotal(userCart) {
   console.log("\nShopee Cart TOTAL IS:");
   const result = userCart.reduce((total, item) => total + item.subtotal(), 0);

   console.log(`🛍️  Total: ${result.toFixed(2)}`);
   return result; 
}

// deletar item do carrinho
async function deleteItem(userCart, name) { 
    const index = userCart.findIndex((item) => item.name === name);
    if(index !== -1) {
        userCart.splice(index, 1);
    }
}

// remover um item
async function removeItem(userCart, item) {
 //1. encontrar o indice do item
  const indexFound = userCart.findIndex((p) => p.name === item.name);
  
  //2. Caso não encontre o item
  if (indexFound == -1) {
    console.log("item não encontrado");
    return;
  }

  //3. item > 1 subtrair um item
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  //4. caso item = 1 deletar o item
  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
    return;
  }
}
 
//  mostra todos os items do carrinho
async function displayCart(userCart) {
    console.log("\nShopee cart list:");
    userCart.forEach((item, index) => {
        console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      }x | Subtotal = ${item.subtotal().toFixed(2)}`
        );
    });
}

// aplicar cupom de desconto
async function applyCoupon(total, couponCode) {
  total = Number(total); // <<=== força ser número
  const coupons = {
    FRETEGRATIS: { type: "shipping", discount: 100 },
    CASHBACK20: { type: "cashback", discount: 20 },
    DESCONTO15: { type: "discount", discount: 15 },
    PROGRESSIVO: { type: "progressive", discount: null },
  };
  if (!coupons[couponCode]) {
    console.log("❌ Invalid coupon!");
    return { total, discount: 0, couponCode: null };
  }
  const coupon = coupons[couponCode];
  let discount = 0;
  switch (coupon.type) {
    case "shipping":
      console.log("🎉 Free shipping applied!");
      break;

    case "cashback":
      discount = total * (coupon.discount / 100);
      console.log(`💸 Cashback of R$ ${discount.toFixed(2)} applied!`);
      break;

    case "discount":
      discount = total * (coupon.discount / 100);
      total = total - discount; 
      console.log(`🔖 Discount of R$ ${discount.toFixed(2)} applied!`);
      break;

    case "progressive":
      if (total >= 200) {
        discount = total * 0.2;
        total = total - discount;
        console.log("📈 Progressive discount of 20% applied!");
      } else if (total >= 100) {
        discount = total * 0.1;
        total = total - discount;
        console.log("📈 Progressive discount of 10% applied!");
      } else {
        console.log("📈 Add more items to get progressive discounts!");
      }
      break;
  }

  return { total, discount, couponCode };
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart,  applyCoupon };