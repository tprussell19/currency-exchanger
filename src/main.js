import $, { error } from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchange-service.js';

function showMeTheMoney(response) {
  if (response.result === "success") {
    let newCurrency = $('#select-exchange').val();
    let inputAmount = parseFloat($('#input-money').val());
    $('#input-money').val("");
    let outputAmount;
    if (isNaN(inputAmount)) {
      $('#returned-money').hide();
      $('#api-error').hide();
      $('#show-error').show();
      $('#show-error').html("Please enter a valid number");
    } else {
      $('#api-error').hide();
      $('#show-error').hide();
      $('#returned-money').show();
      if (newCurrency === "EUR") {
        outputAmount = (inputAmount * response.conversion_rates.EUR).toFixed(2);
        $('#returned-money').html(`€ ${outputAmount}`);
      } else if (newCurrency === "CNY") {
        outputAmount = (inputAmount * response.conversion_rates.CNY).toFixed(2);
        $('#returned-money').html(`¥ ${outputAmount}`);
      } else if (newCurrency === "NGN") {
        outputAmount = (inputAmount * response.conversion_rates.NGN).toFixed(2);
        $('#returned-money').html(`₦ ${outputAmount}`);
      } else if (newCurrency === "BRL") {
        outputAmount = (inputAmount * response.conversion_rates.BRL).toFixed(2);
        $('#returned-money').html(`R$ ${outputAmount}`);
      } else if (newCurrency === "AUD") {
        outputAmount = (inputAmount * response.conversion_rates.AUD).toFixed(2);
        $('#returned-money').html(`$ ${outputAmount}`);
      } else {
        $('returned-money').html('The selected currency is currently unavaliable. Please select another');
      }
    }
  } else {
    $('#show-error').hide();
    $('#returned-money').hide();
    $('#api-error').show();
    if (response.result === "error") {
      $('#api-error').html(`This is an error: ${response["error-type"]}`);
    } else {
      $('#api-error').html(`This is an error: ${error.message} ${response}`);
    }
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