
//Variable storing student data

  var student = {
	  name : "John",
	  age : 25,
	  dob : "04/04/1977",
	  placeofbirth : "london"
  }
  
  // Access object properties by both ways
  
  console.log(student.name);
  console.log(student.age);
  console.log(student["dob"]);
  console.log(student["placeofbirth"]);