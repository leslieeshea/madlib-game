function displayMadLib () {
    // get inputs by id
    var nounOneInput = document.getElementById('noun-1');
    var pluralNounOneInput = document.getElementById('plural-noun-1');
    var properNounOneInput = document.getElementById('proper-noun-1');
    var adjectiveOneInput = document.getElementById('adjective-1');
    var nounTwoInput = document.getElementById('noun-2');
    var nounThreeInput = document.getElementById('noun-3');
    var nounFourInput = document.getElementById('noun-4');

    // get value of inputs
    var nounOne = nounOneInput.value;
    var pluralNounOne = pluralNounOneInput.value;
    var properNounOne = properNounOneInput.value;
    var adjectiveOne = adjectiveOneInput.value;
    var nounTwo = nounTwoInput.value;
    var nounThree = nounThreeInput.value;
    var nounFour = nounFourInput.value;

    // make the mad lib
    var makeMadLib = 'Yesterday I went to the ' + nounOne + ', because I wanted ' + properNounOne + '. I walked on ' + properNounOne + ' and saw ' + adjectiveOne + ' dogs. At the store, they ran out of ' + nounTwo + ', so I bought ' + nounThree + ' instead. I love my new ' + nounFour + '!';

    // display mad lib
}