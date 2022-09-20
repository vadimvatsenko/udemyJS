console.log('запрос данных....');

const req = new Promise((resolve, reject) => {//resolve - выполнилось правельно. reject - не правельно
    setTimeout(() => {
        console.log('Подготовка Данных...');
        const product = {
            name: 'TV',
            price: 5000,
        }
        resolve(product);
    }, 2000);
    
});

req.then((product) => {//
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'ordered';
            // console.log(product)
            resolve(product);
            // reject();// -если хотим ошибку
        }, 2000);
        
    }).then((data) => {
        // console.log(data);
        data.color = 'red';
        return data;

    }).then((data) => {
        console.log(data);
    }).catch(() => {
        console.error('Critical Error!!!')
    }).finally(() => {
        console.log('Finally')
    })
})

///

const newTime = time => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, time);
    })
};

// newTime(1000).then(() => console.log('1000 ms'));
// newTime(2000).then(() => console.log('2000 ms'));
Promise.all([newTime(1000), newTime(2000)]).then(() => {//ждет выполнение всех promisse
    console.log('All')
});

Promise.race([newTime(1000), newTime(2000)]).then(() => {//ждет выполнение первого promisse
    console.log('Race')
})
