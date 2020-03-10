let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');
let numberInput = document.querySelector('#numberInput');

numberInput.addEventListener('input', getFactAjax);

function getFactAjax() {
  let number = numberInput.value;
  const response = fetch(`http://numbersapi.com/${number}`);
  response.then(response => response.text())
          .then(data => {
            if(number != '') {
              fact.style.display = 'block';
              factText.innerText = data;
            }
          })
          .catch(err => console.log(err));

}