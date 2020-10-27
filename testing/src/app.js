const helloIronhack = () => "Hello, merluzo!"

const calculateMe = arr => {
    if (Array.isArray(arr)) {
        return arr.reduce((acc, elm) => acc + elm)
    }
}

const person = {
    age: 30,
    grow(val) {
        this.age += val
    }
}