import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchange-service.js';

function showMeTheMoney(response) {
  if (response) {
    let newCurrency = $('#select-exchange').val();
    let inputAmount = parseFloat($('#input-money').val());
    $('#input-money').val("");
    let outputAmount;
    console.log(newCurrency);
    if (newCurrency === "EUR") {
      outputAmount = (inputAmount * response.conversion_rates.EUR).toFixed(2);
      $('#returned-money').html(`${outputAmount}`);
    } else if (newCurrency === "CNY") {
      outputAmount = (inputAmount * response.conversion_rates.CNY).toFixed(2);
      $('#returned-money').html(`${outputAmount}`);
    } else if (newCurrency === "NGN") {
      outputAmount = (inputAmount * response.conversion_rates.NGN).toFixed(2);
      $('#returned-money').html(`${outputAmount}`);
    } else if (newCurrency === "BRL") {
      outputAmount = (inputAmount * response.conversion_rates.BRL).toFixed(2);
      $('#returned-money').html(`${outputAmount}`);
    } else if (newCurrency === "AUD") {
      outputAmount = (inputAmount * response.conversion_rates.AUD).toFixed(2);
      $('#returned-money').html(`${outputAmount}`);
    }
  } else {
    console.log('the response failed');
  }
}

$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    ExchangeService.getNewMoney()
      .then(function(response) {
        showMeTheMoney(response);
      });
  });
});