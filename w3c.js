import { w3cHtmlValidator } from 'w3c-html-validator';

const options = { filename: 'empire-ships.html' };

w3cHtmlValidator.validate(options).then(w3cHtmlValidator.reporter);

// console.log(w3cHtmlValidator.validate(options).then(w3cHtmlValidator.reporter))