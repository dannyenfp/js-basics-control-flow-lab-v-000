// Write your code in this file!

function scuberGreetingForFeet (someValue) {
  if (someValue <= 400) {
    return "This one is on me!";
  } else if { someValue > 2000 && someValue <= 2500) 
    return "I will gladly take your thirty bucks!";
  } else {someValue > 2500) {
    
  }
}

 it('charges 30 dollars for a distance over 2000 feet', function () {
      expect(scuberGreetingForFeet(2001)).to.equal('I will gladly take your thirty bucks.');
    });

    it('does not allow rides over 2500 feet', function () {
      expect(scuberGreetingForFeet(2501)).to.equal('No can do.');
    });
  });