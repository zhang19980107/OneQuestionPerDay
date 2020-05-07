/*   main   */

// 双问号  相当于  || 符号
let a = null ?? true;
console.log(a);

// 双选链
let body = {
    value: {
        a: '123321'
    }
}
let flag = body ? body.value : undefined
// 相当于
let result = body?.value
console.log(result);

//  实际
let select = {
    value: {
        a: null
    }
}
let entirely = select?.value?.a || 100
// 这句话的意思是如果 select和select.value和select.value.a 都为null或undefined时 entirely等于100
console.log(entirely)
// 如果 a = 0的话 entirely也要等于100 只能像下面这样写了

let over = select.value.a === null ? 100 : select?.value?.a