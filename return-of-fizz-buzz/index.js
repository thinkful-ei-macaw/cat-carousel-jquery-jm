'use strict';

$('#number-chooser').submit(e => {
  e.preventDefault();
  let input = $('#number-choice').val();
  const results = $('.js-results');
  results.empty();
  for(let i = 1; i <= input; i++) {
    let className = '';
    if(i % 3 === 0 && i % 5 === 0) {
      className = 'fizzbuzz';
    } else if (i % 5 === 0) {
      className = 'buzz';
    } else if (i % 3 === 0) {
      className = 'fizz';
    }
    $(results).append(
      `<div class="fizz-buzz-item ${className}">
      <span>${className ? className : i}</span>
      </div>`
    );
  }
});