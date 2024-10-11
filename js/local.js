const hello = localStorage.getItem('hello')
console.log(hello);

const setAge = () => {
    localStorage.setItem('age', 31);
}

//localStorage: setItem, getItem, removeItem, clear, length