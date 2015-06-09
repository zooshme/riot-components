$(document).ready(function() {
  riot.mount('navigation', {
    pages: [
      {url: '#', name: 'Top'},
      {url: '#about-us', name: 'About Us'},
      {url: '#new-cars', name: 'New Cars'},
      {url: '#used-cars', name: 'Used Cars'},
      {url: '#contact-us', name: 'Contact Us'},
      {url: '#blog', name: 'Blog'}
    ]
  });

  riot.mount('deck', {
    title: 'Welcome to Arnold Clark',
    description: 'With over 60 years of experience, Arnold Clark is Europe\'s largest independently owned, family-run car company. As winner of the sought-after Automotive Management Retailer of the Year award three years running, we are well placed to offer customers not only buying peace of mind but also the best choice and biggest discounts on all new cars, nearly new cars and used cars.'
  })
});

