# Emma Prager
# itmd562-wk5-lab

## ASSIGNMENT DESCRIPTION:

### Please create an HTML page and an accompanying JavaScript file that contains all of the action code. The only script lines in the HTML file should be referencing a file location or library outside of the HTML page itself. Your HTML page should allow a user to enter in their first name, last name, and favorite number, and a button that submits the form data. Your JavaScript file should use jQuery to find and assign the submit button function as well as create a person object based on the form data submitted.

### Next, create another button on your web page that when clicked will output all of the person objects created in JSON format into a paragraph element with each object’s JSON text string on its own line. Please use jQuery to find all elements on your HTML page.

##### HINTS: Check out W3Schools if you need a refresher on HTML forms: https://www.w3schools.com/html/html_forms.asp. You’ll probably want to save your person objects into an array of person objects. To get the data out of your person objects, iterate through the array of objects, then inside of that iteration you can convert the person object into a JSON object and append the text and a line break to a variable. Use jQuery and that variable to populate a paragraph placeholder in your HTML when the second button gets clicked.

##### After creating three person objects, your HTML output should look something like:
##### {"field_name":"value", "field_name":"value", "field_name":number}
##### {"field_name":"value", "field_name":"value", "field_name":number}
##### {"field_name":"value", "field_name":"value", "field_name":number}
##### Where field name is whatever you called your object property, and the value/number are the HTML user’s form input values.

##### **2 pts Extra Credit: Clear the HTML form fields when you submit the form data with the button.