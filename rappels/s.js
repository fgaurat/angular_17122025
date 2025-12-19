const a =[0,1,2,3]
// const [b,c] = [0,1,2,3]
const [b,c,...d] = [0,1,2,3]
console.log(b,c);

const a1 =[0,1,2,3]
console.log(a1);
const a2 = [...a1,4,5]
console.log(a2);

const o = {name:'GAURAT',firstname:'Fred',age:22}
const o2 ={...o,age:49,job:"dev"} 
console.log(o2);
