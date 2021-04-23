import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import ExchangeService from './js/exchange-service.js'

function showMeTheMoney(response) {
  if (response) {
    // let inputAmount = $('input-money').val();
    // let newCurrency = $('select-exchange').val();
    // console.log('amount: ', inputAmount, 'currency selected: ', newCurrency)
    console.log(response);
    $('#returned-money').html(response.conversion_rates.AUD);
  } else {
    console.log('the response failed')
  }
}

$(document).ready(function() {
  console.log(API_KEY)
  $('form').submit(function(event) {
    event.preventDefault();
    ExchangeService.getNewMoney()
    .then(function(response) {
      console.log(response);
      showMeTheMoney(response);
      });
  });
});