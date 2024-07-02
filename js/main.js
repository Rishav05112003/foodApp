/*document.addEventListener("DOMContentLoaded", () => {
    function counter (id, start, end, duration){
        let obj = document.getElementById(id),
        current = start;
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration/range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current === end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1", 0, 314, 3000);
    counter("count2",0,200,4000);
    counter("count3", 0, 314, 3000);
    counter("count4",0,200,4000);
});*/

const counters = document.querySelectorAll('.count');
const speed = 200;

console.log(counters);

counters.forEach(counter => {
    const animate = () => {
        const value = +counter.getAttribute('start');
        const data = +counter.innerText;

        const time  = value / speed;

        if(data < value){
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 1);
        }else{
            counter.innerText = value;
        }
    }

    animate();
});




