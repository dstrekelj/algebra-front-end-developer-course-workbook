// function that replaces all the extra whitespaces using regex 

function removeWhitespace(content) {
 
    return content.replace(/\s+/g, ' ').trim();
}

// function that replaces confidential information with [REDACTED] placeholder

function replaceConfidentContent(content) {

// call to function that removes extra whitespaces + method split separates text words into an array of strings

  var confident_content = removeWhitespace(content).split(' ');

// declaration and initilization of a string that will be the return value from the function

    var parsedDocument = '';

// iterate each element (words) and check if it contains confidential information

    for (var i = 0; i < confident_content.length; i++) {

       var str_content = String(confident_content[i]);
        
      if (str_content.startsWith("XXX") || str_content.endsWith("XXX") || str_content.startsWith("xxx") || str_content.endsWith("xxx")) {
        
        confident_content[i] = str_content.replace(str_content, "[REDACTED]");
        
        parsedDocument = parsedDocument + String(confident_content[i]) + ' ';
      }
      else parsedDocument = parsedDocument + String(confident_content[i]) + ' ';

    }

    return parsedDocument;
    
}

function prepareConfidentialDocument(content, template) {
        
  return template.replace(`::content::`, replaceConfidentContent(content));

}

var template = '== CONFIDENTIAL ==\n\n::content::\n\n == CONFIDENTIAL ==';
var content = 'Lorem    ipsum XXXdolor sitxxx amet consecteturXXX adipiscing xxxelit, sed do eiusmodXXX tempor xxxincididunt ut laborexxx et dolore magna aliqua. ';

console.log(prepareConfidentialDocument(content, template));

