//
///OBJECT DESTRUCTURING
//

// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philippines',
//         temp: 92
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature ) {
//     console.log(`it's ${temperature} in ${city}`);
// }



// const book = {
//     title: 'Ego is the Enemey',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);



//
//ARRAY DESTRUCTURING 
//

const address = ['1299 S Juniper Street', 'Cainta', 'Philippines', '19147']
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (iced)', '$2.00', '$3.50', '3.75'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);