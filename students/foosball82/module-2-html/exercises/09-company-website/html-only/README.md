# Exercise #9 - Company Website

> This exercise requires knowledge from examples #1, #2, #3, #4, #5, #6, #7, #8, #13, #15, #16, #17.

A company website is outlined in `about.txt`, `index.txt`, and `products.txt` text files.

Each text file contains content that must be correctly marked up and saved as an HTML document of the same name.

Each HTML document must _at least_ contain relevant title and description metadata.

Each HTML document must contain a header with the logo (`logo.svg`) and navigation to other company website pages.

Each HTML document must contain a footer with the following:

- &copy; Company 2019-2010
- info@company.example.com

**Contact form**

The form must define the following fields and validation rules:

- full_name - Required. A string of text representing the sender's first and last name.
- email - Required. A valid email address representing the sender's email address.
- message - Required. A text area representing the sender's message.

The form data must be sent to `contact.html` on submission. The method must be `GET`.
