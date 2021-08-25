//no.1-variable declaration

let name = 'Sanjida';
const topicName = 'es6';

const student = {
    id: 12,
    cgpa: 3.47,
    subject: 'CSE'
};


//no.2- template string

const sentence = `Hello, ${name}! Welcome to the new world of ${topicName}. Your ID no. is ${student.id} and your subject name is : ${student.subject}`;
console.log(sentence);

//no.3- arrow function

const value = x => x / 5;
console.log(value(15));

const value1 = (x, y) => (x + 2) * (y + 2);
console.log(value1(2, 3));

const value2 = (x, y, z) => x * y * z;
console.log(value2(2, 4, 6));

const value3 = (x, y) => {
    const x1 = x + 2;
    const y1 = y + 2;
    return x1 * y1;
};
console.log(value3(4, 5));


//no.5- array map

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array1 = array.map(x => x * 5);
console.log(array1);

//no.6-filter

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const oddNumbers = numbers.filter(x => x % 2 != 0);
console.log(oddNumbers);

//no.7-find

const priceArray = [
    {
        name: 'vivo',
        price: 11000
    },
    {
        name: 'redmi',
        price: 15000
    },
    {
        name: 'samsung',
        price: 5000
    },
    {
        name: 'apple',
        price: 5000
    }
];
console.log(priceArray.find(x => x.price == 5000));
priceArray.forEach(x => console.log(x));


//no.8,9-destructuring

const elements = {
    name: 'abc',
    age: 123,
    city: 'dhaka',
    address: 'universe'
};
const { address } = elements;
console.log(address);

const { city: three = 'saskatoon' } = elements;
console.log(three);


//no.10-default parameter

const sum = (x, y, z = 7) => (x + y + z);
console.log(sum(1, 2));
console.log(sum(5, 2, 9));


//no.11,12-nested object,threedot(...)

const page = {
    number: 120,
    color: {
        background: 'mauve',
        border: {
            borderColor: 'black',
            borderRadius: [10, 20, 30, 10]
        }
    }
}
const backgroundColor = page.color?.background;
console.log(backgroundColor);

const borderColor = page.color?.border?.borderColor;
console.log(borderColor);