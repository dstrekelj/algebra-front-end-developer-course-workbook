// function that replaces all the extra whitespaces using regex 

function removeWhitespace(content) {
 
    return content.replace(/\s+/g, ' ').trim();
}

// function that replaces confidential information with [REDACTED] placeholder

function replaceConfidentContent(content) {

// call to function that removes extra whitespaces + method split separates text words into an array of strings    

    var confident_content = removeWhitespace(content).split(' ');
    
// declaration and initilization of an array that will be populated with the content of the array including the replaced content

    var new_array = [];

// declaration and initilization of a string that will be return value of the function 

    var parsedDocument = '';

// iterate each element (word) of the array to check if it contains confidential information

    for (var i = 0; i < confident_content.length; i++) {

// convert element of the array to String object to be able to use startsWith and endsWith methods 

        var str_content = String(confident_content[i]);

// if an element starts or ends with "XXX"/"xxx" replace the entire element with "[REDACTED]"
        
      if (str_content.startsWith("XXX") || str_content.endsWith("XXX") || str_content.startsWith("xxx") || str_content.endsWith("xxx")) {
        
// if the conditions are fulfilled replace the entire element with [REDACTED]

        confident_content[i] = str_content.replace(str_content, "[REDACTED]");
        
// populate array with the replaced content

        new_array.push(confident_content[i]);
      }

// populate array with the elements that don't contain confidential information 

      else new_array.push(confident_content[i]);

    }

// iterates if there are two subsequent [REDACTED] elements that are the same and removes one 
    
    for (var j = 0; j < new_array.length; j++) {

        if ((String(new_array[j]) == "[REDACTED]") && (String(new_array[j+1]) == "[REDACTED]")) {
            new_array.splice(j, 1);
        }
    }
       
    for (var k = 0; k < new_array.length; k++) {
        parsedDocument = parsedDocument + String(new_array[k]) + ' ';
    }

    return parsedDocument;
    
}

// function calls the function that prepares the parsed document and puts its return value in place of the placeholder 

function prepareConfidentialDocument(content, template) {
        
    return template.replace(`::content::`, replaceConfidentContent(content));

}

var template = '== CONFIDENTIAL ==\n\n::content::\n\n == CONFIDENTIAL ==';
var content = 'LoremXXX    ipsum XXXdolor sitxxx amet consecteturXXX adipiscing xxxelit, sed doXXX eiusmodxxx tempor incididunt utxxx XXXlabore et doloreXXX magna aliqua.';

console.log(prepareConfidentialDocument(content, template));

