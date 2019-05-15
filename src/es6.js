// object 使用
const obj = {
  name: "imooc",
  languas: "react开发"
};

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

// class 构造

class Myapp {
  constructor() {
    this.name = "imooc";
  }

  sayHello() {
    console.log(`hello ${this.name} !`);
  }
}

const app = new Myapp();

app.sayHello();

const arr = [1, 2, 3, 4, 5, 3, 2, 4, 6];
// 是否有元素通过检测
console.log(arr.some(v => v > 3));

// 是否所有的元素都通过检测
console.log(arr.every(v => v > 3));

// 数组去重
console.log([...new Set(arr)]);

// 查找符合条件的
console.log(arr.filter(v => v > 3));
