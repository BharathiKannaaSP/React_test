import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);

});

const number1=10
test('Greater number',()=>{
  expect(number1).toBeGreaterThan(3)
  console.log('Greater')
})

test('Lesser number',()=>{
  expect(number1).toBeLessThan(20)
  console.log('Lesser')
})

test('Relations', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThanOrEqual(4.5);
  expect(value).toBe(4);
  expect(value).toEqual(4);
  console.log('>= <= toBe =')
});

test('Null',()=>{
  const a=null;
  expect(a).toBeNull()
  console.log('It is null')
})


test('For loop',()=>{
  for(let i=1;i<10;i++){
    expect(i).not.toBeNull();
    console.log(i)
    console.log('For loop')
  }
})


test('Truthiness',()=>{
    const b = 0;
    expect(b).toBeDefined();
    console.log('Defined...')
    expect(b).not.toBeUndefined();
    console.log('UnDefined...')
    expect(b).not.toBeTruthy();
    console.log('Truthy...')
    expect(b).toBeFalsy();
    console.log('Falsy...')

})


const Friends=['Rachel','Monica','Phobe']

test('Array',()=>{
  expect(Friends).toContain('Rachel')
  console.log('Array-Rachel is here!')
})



const Frnds={
  name1:{
    fname:'Rachel',
    lname:'Green',
    city:'NY'
  },
  RachelAge:30,
  name2:{
    fname:'Monica',
    lname:'Geller',
    city:'Washington D.C'
  },
  MonicaAge:35
}


test('Object',()=>{
  expect(Frnds).toHaveProperty('name2.fname','Monica')
  expect(Frnds).toHaveProperty('RachelAge',30)
  console.log('Object-Monica is also here Rachel Green!')
})