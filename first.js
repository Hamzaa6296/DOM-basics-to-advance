let input = document.querySelector('.input')
let increase = document.querySelector('#increase')
let decrease = document.querySelector('#decrease')
let reset = document.querySelector('#reset')

count = 0
increase.addEventListener("click", function() {
  count += 1;
  input.value = count;
});
decrease.addEventListener("click", function() {
  count -= 1;
  input.value = count;
});
reset.addEventListener("click", function() {
  count = 0;
  input.value = count
});






