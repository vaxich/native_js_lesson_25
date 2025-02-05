// -- lesson 1

// 1. string => "", '', ``
// 2. number =>  number, NAN, Infinity
// 3. undefined => undefined
// 4. null => null
// 5. boolean => true, false
// 6. 
// 7. Symbol => Symbol
// 8. bigInt => BigInt


// 9. object => object, array, function
// объукты
// -составной (комбинированный)
// - ссылочный тип


const users = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true,
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true,
    },
    {
        id: 3,
        name: 'Ann',
        isStudent: true,
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: true,
    }
]

const newUser = {
    id: 5,
    name: 'Farid',
    isStudent: true,
}

const copyUsers = [...users, newUser] // глубокое копирование

const updateUsers = copyUsers.map(u => u.id === 2 ? { ...u, isStudent: false } : u) //  пробегаемся по массиву, и если находим 2 - то значение isStudent заменяем

const superUser = {
    "id": 1,
    'name': 'Leanne Graham',
    'username': 'Bret',
    'email': 'Sincere@april.biz',
    'address': {
        'street': 'Kulas Light',
        'suite': 'Apt. 556',
        'city': 'Gwenborough',
        'zipcode': '92998-3874',
        'geo': {
            'lat': '-37.3159',
            'lng': '-81.1496'
        }
    },
    'phone': '1-770-736-8031-x56442',
    'website': 'hildegard.org',
    'company': {
        'name': 'Romaguera-Crona',
        'catchPhrase': 'Multi-layered client-server neural-net',
        'bs': 'harness real-time e-markets'
    }
}

const superUserCopy = { ...superUser, company: { ...superUser.company, catchPhrase: "new" } }
const superUserCopy2 = {
    ...superUser,
    address:
    {
        ...superUser.address,
        geo: { ...superUser.address.geo, lng: "-61.1496" }
    }
}


const superUserCopy3 =  {...superUser, email: "vaxich"}       