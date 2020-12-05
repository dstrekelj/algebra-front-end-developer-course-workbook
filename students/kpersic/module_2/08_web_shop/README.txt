Exercise #8 - Web Shop
This exercise requires knowledge from example #15

A web shop contains index, login, products, and checkout pages. Each page contains a commented section of markup where a form is waiting to be inserted.

Complete the given pages by implementing missing forms at the commented locations.

Sign up form

The form must define the following fields and validation rules:

first_name - Required. A string of text.
last_name - Required. A string of text.
email - Required. A valid email address.
phone - Optional. A valid telephone number.
password - Required. A string of text. Minimum of 6 characters.
gdpr - Required. Value "on" when checked.
The form data must be sent to login.html on submission. The method must be GET.

Sign in form

The form must define the following fields and validation rules:

email - Required. A string of text.
password - Required. A string of text. Minimum of 6 characters.
The form data must be sent to products.html on submission. The method must be GET.

Purchase form

The form must define the following fields and validation rules:

product_sku - Hidden. Value must be equal to product SKU.
The form data must be sent to checkout.html on submission. The method must be GET.

Checkout form

The form must define the following fields and validation rules:

sender_first_name - Required. A string of text.
sender_last_name - Required. A string of text.
sender_email - Required. A valid email address.
sender_phone - Required. A valid telephone number.
sender_address_line_1 - Required. A string of text.
sender_address_line_2 - Optional. A string of text.
sender_city - Required. A string of text.
sender_zip - Required. A string of text.
sender_country - Required. One of the following ISO 3166 Alpha 2 country codes: hr, rs, ba, si, me, al, mk
payment_method - Required. One of the following: credit, debit, paypal
payment_card_hold - Required. A string of text.
payment_card_number - Required. A numeric string of text.
payment_card_expiration_month - Required. Month and year.
The form data must be sent to success.html on submission. The method must be GET.