console.log('hello');


async function fecthing() {
    await fetch('https://fakestoreapi.com/products/')
        .then((data) => {
            return data.json()
        }).then((res) => {
            console.log(res);
            for (var i = 0; i < res.length; i++) {
                document.getElementById('inner').innerHTML += `
                <div class="card" style="width: 18rem; height: 38rem;" >
                <img src="${res[i].image}" class="card-img-top" alt="..." style="width: 18rem; height: 16rem;" >
                <div class="card-body">
                <h5 class="card-title">${res[i].category}</h5>
                <p class="card-text">${res[i].description}.</p>
                </div>
                </div>
                `
            }
        })
}

fecthing()