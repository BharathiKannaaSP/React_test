const sum =require('./Sum')
const difference =require('./Difference')
const multiply =require('./Multiply')
const divide =require('./Divide')

test('Sum of two numbers',()=>{
    expect(sum(2,3)).toBe(5);
    console.log('Sum of two numbers');
})

test('Difference of two numbers',()=>{
    expect(difference(2,3)).toBe(-1);
    console.log('Difference of two numbers')
})

test('Multiplication of two numbers',()=>{
    expect(multiply(2,3)).toBe(6);
    console.log('Multiplication of two numbers')
})

test('Division of two numbers',()=>{
    expect(divide(2,3)).toBe(0.6666666666666666);
    console.log('Division of two numbers')
})