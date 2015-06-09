var express = require('express');
var app = express();
var riot = require('riot');
var navigation = require('./public/tags/navigation.tag');
var deck = require('./public/tags/deck.tag');

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.get('/', function(req,res) {
  var html = '';
  var pages = [
    {url: '#', name: 'Top'},
    {url: '#about-us', name: 'About Us'},
    {url: '#new-cars', name: 'New Cars'},
    {url: '#used-cars', name: 'Used Cars'},
    {url: '#contact-us', name: 'Contact Us'},
    {url: '#blog', name: 'Blog'}
  ]
  var title = 'Welcome to Arnold Clark';
  var description = 'With over 60 years of experience, Arnold Clark is Europe\'s largest independently owned, family-run car company. As winner of the sought-after Automotive Management Retailer of the Year award three years running, we are well placed to offer customers not only buying peace of mind but also the best choice and biggest discounts on all new cars, nearly new cars and used cars.';
  html += riot.render(navigation, {pages: pages});
  html += riot.render(deck, {title: title, description: description});

  res.render('index.ejs', {
    html: html
  });
})

app.listen(3333, function() {

})