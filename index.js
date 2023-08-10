const arr = [5, 1, 2, 3, 6];

// find max or sum

const output = arr.reduce(function (acc, curr) {
    return acc + curr
}, 0);
//console.log(output);
const output1 = arr.reduce((acc, curr) => acc + curr);
//console.log(output1);
const result = arr.reduce(function (max, curr) {
    if (curr > max) {
        max = curr
    }
    return max;
}, 0);

//console.log(result)
const users = [{ firstName: "Yashvant", lastName: "Yadav", age: 52 },
{ firstName: "Rahul", lastName: "Singh", age: 34 },
{ firstName: "Meena", lastName: "Yadav", age: 45 },
{ firstName: "Sunita", lastName: "Yadav", age: 45 },
{ firstName: "Shashank", lastName: "Yadav", age: 18 },
{ firstName: "Mahika", lastName: "Yadav", age: 12 }
];

const result1 = users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1
    }
    return acc;

}, {})
//console.log(result1) 
const result2 = users.filter((x) => x.age < 30).map(x => x.firstName);
console.log(result2)
const result3 = users.reduce((acc, curr) => {
    if (curr.age < 30) {
        acc.push(curr.firstName)
    }
    return acc;
}, []);
console.log(result3)