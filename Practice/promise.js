function add10(num) {

    setTimeout(() => {
        return Promise.resolve(num + 10).then(res => console.log(res));
    }, 1000);

}

add10(5)