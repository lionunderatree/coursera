(function() {
  var names = [
      "Yaakov", 
      "John", 
      "Jen", 
      "Jason", 
      "Paul", 
      "Frank", 
      "Larry", 
      "Paula", 
      "Laura", 
      "Jim"];
        
  for (i = 0; i < names.length; i++) {
      firstLetter = []
      letter = names[i].charAt(0).toLowerCase();
      firstLetter = firstLetter + letter;
      // console.log(firstLetter);

      if (firstLetter === "j") {
          console.log(speakBye + names[i]);
      } else {
          console.log(speakHello + names[i]);
      }
  }  
}());