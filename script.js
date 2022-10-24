const eleSquares = document.querySelector('.squares');
for (let i = 1; i <= 100; i++) {

    if(i % 3 == 0 && i % 5 != 0) {
        eleSquares.innerHTML += `<div class="sq fizz">Fizz</div>`;
    }

    else if(i % 5 == 0 && i % 3 != 0) {
        eleSquares.innerHTML += `<div class="sq buzz">Buzz</div>`;
    }

    else if(i % 5 == 0 && i % 3 == 0) {
        eleSquares.innerHTML += `<div class="sq fizzbuzz">FizzBuzz</div>`;
    }

    else{
        eleSquares.innerHTML += `<div class="sq">${i}</div>`;
    }
}


