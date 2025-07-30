//CASOS DE USO DOS ITENS

// criar item com subtotal certo
async function createItem(name, price, quantity) {
 return {
  name,
  price: Number(price),       
  quantity: Number(quantity),
  subtotal: function () {
      return this.price * this.quantity;
    },
 };
}

export default createItem;