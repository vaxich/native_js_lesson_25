

const stydents = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true,
        scores: 85
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true,
        scores: 89
    },
    {
        id: 3,
        name: 'Ann',
        isStudent: true,
        scores: 120
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: true,
        scores: 100
    }
]

//push() - метод массива, который добавляет один или более элементов в конец массива и возвращает новую длину массива (данный метод массива мутирует исходный массив).

//js
let names = ['Alex', 'Bob', 'Ivan', 'Sasha']
const total = names.push('Nina')
 
console.log('names', names) // [ 'Alex', 'Bob', 'Ivan', 'Sasha', 'Nina' ]
console.log('total', total) //5

//pop() - метод массива, который удаляет последний элемент массива и возвращает его значение (данный метод массива мутирует исходный массив).

//js
let names1 = ['Alex', 'Bob', 'Ivan', 'Sasha']
const popped = names.pop()
 
console.log('names', names) // [ 'Alex', 'Bob', 'Ivan' ]
console.log('poppedArr', popped) //”Sasha”

//shift() - удаляет первый элемент из массива и возвращает его значение. Этот метод изменяет длину массива. Метод shift удаляет элемент по нулевому индексу, сдвигает значения по последовательным индексам вниз, а затем возвращает удалённое значение. Если свойство length массива равно 0, вернётся значение undefined (данный метод массива мутирует исходный массив).

//js
const names2 = ['Alex', 'Bob', 'Ivan', 'Sasha']
const shifted = names2.shift()
 
console.log('names', names2) //[ 'Bob', 'Ivan', 'Sasha' ]
console.log('shiftedArr', shifted) //”Alex”

//unshift() - добавляет один или более элементов в начало массива и возвращает новую длину массива (данный метод массива мутирует исходный массив).

//js
const names3 = ['Alex', 'Bob', 'Ivan', 'Sasha']
const unshifted = names3.unshift('Nina')
 
console.log('names', names3) //[ 'Nina', 'Alex', 'Bob', 'Ivan', 'Sasha' ]
console.log('unshiftedARR', unshifted) //5

//reverse() - метод массива, который меняет порядок элементов в массиве на обратный (данный метод массива мутирует исходный массив).

//js
const names4 = ['Alex', 'Bob', 'Ivan', 'Sasha']
const reversed = names4.reverse()
 
console.log('names', names4) // reverse мутировал исходный массив и мы
// получили: [ 'Sasha', 'Ivan', 'Bob', 'Alex' ]
console.log('reversedArr', reversed) //[ 'Sasha', 'Ivan', 'Bob', 'Alex' ]

//split() - разбивает строки в массив по указанному в первом параметре разделителю. Если он не задан - вернется вся строка. Если он задан как пустые кавычки, то каждый символ строки попадает в отдельный элемент массива. Вторым необязательным параметром можно указать максимальное количество элементов в получившемся массиве.

//Разобьем строку в массив по разделителю “-”:

//js
const str = 'ab-cd-ef'
const arr = str.split('-')
 
console.log('str', str) // "ab-cd-ef"
console.log('arr', arr) // [ 'ab', 'cd', 'ef' ]