// ações do carrinho 

//CASOS DE USO

// adicionar item no carrinho
async function addItem(userCart) {
    userCart.push(item);
}

// calcular o total do carrinho
async function calculateTotal(userCart) {
    return userCart.reduce((total, item) => total + item.subtotal());
}

async function deleteItem(userCart, name) { 
}

// remover um item
async function removeItem(userCart, index) {
}

//  calular o total do carrinho
async function  calculateTotal(userCart) {
}

export { addItem, calculateTotal, deleteItem, removeItem };
