// Write your code in this file!

function scuberGreetingForFeet (someValue) {
  if (someValue <= 400) {
    return "This one is on me!";
  } else if ( someValue > 2000 && someValue <= 2500) { 
    return "I will gladly take your thirty bucks.";
  } else if (someValue > 2500) {
    return "No can do.";  
  }
}

function ternaryCheckCity(city) {
  
}

describe('ternaryCheckCity()', function () {
    it('returns "Ok, sounds good." when the city is NYC', function () {
      expect(ternaryCheckCity('NYC')).to.equal('Ok, sounds good.');
    });

    it('should return "No go." if the destination city is not NYC', function () {
      expect(ternaryCheckCity('Pittsburgh')).to.equal('No go.');
    });
  });





  describe('switchOnCharmFromTip()', function () {
    it('should return "Thank you so much." if the tip is generous', function () {
      expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.');
    });

    it('should return "Thank you." if the tip is not as generous', function () {
      expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.');
    });

    it('should return "Bye." if anything else', function () {
      expect(switchOnCharmFromTip('thanks for everything')).to.equal('Bye.');
    });
  });
});