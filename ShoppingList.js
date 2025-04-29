let shoppingList = ['milk', 'eggs', 'bread'];

console.log(shoppingList);

shoppingList.push('butter');
console.log(shoppingList);

shoppingList.unshift('juice');
console.log(shoppingList);

shoppingList.pop();
console.log(shoppingList);

shoppingList.shift();
console.log(shoppingList);

let count = shoppingList.length;
console.log(count);

if (count >= 5){
    console.log('your shopping list is full')
} else {
    console.log('you can add more items')
}

for (let i = 0; i < shoppingList.length; i++){
    console.log(`${i+1}. ${shoppingList[i]}`);
}

function checklist(product){
    if (shoppingList.includes(product)){
        console.log(`${product} is on the list`);
    } else {
        console.log(`${product} is not on the list`);
    }
}

checklist('milk');

function addbrief(product,price,quantity){
    let brief = {
        product: product,
        price: price,
        quantity: quantity
    };
    return brief;
}

let item1 = addbrief('milk', 12, 1);

console.log(item1);
