// let countdoww = document.getElementById("countdoww");
// let n = 10;
// function countdown() {
// n--;
// countdoww.ineerText = n;
// if(n==0)
// {
//     countdoww.innerText = n;
//     clearInterval(countt);
//     alert("Time's up!");
// }

// }
// let countt;
// function count() {
//   countt = setinterval(countdown, 1000);
// }

 let count = 10;
        let timer = null;
        const countdownEl = document.getElementById('countdown');
        const startBtn = document.getElementById('startBtn');

        startBtn.addEventListener('click', () => {
            startBtn.disabled = true;
            count = 10;
            countdownEl.textContent = count;
            timer = setInterval(() => {
                count--;
                countdownEl.textContent = count;
                if (count === 0) {
                    clearInterval(timer);
                    setTimeout(() => {
                        alert('Time Sakiyo ghr jau aba!!');
                        startBtn.disabled = false;
                    }, 200); 
                }
            }, 1000);
        });
