'use strict';

suite('Sample2', function () {

  var sample;

  suiteSetup(function () {
    sample = new Sample2();
  });

  suiteTeardown(function () {
    delete window.Welcome;
  });

  suite('#show', function () {

    test('should append a message to #sample2 div', function (done) {
      sample.load('/app/js/welcome.js', function () {
        var target;

        sample.show();

        target = document.querySelector('#sample2 label');

        assert(target !== null);
        assert(target.innerHTML === 'I am sample2');

        done();
      });
    });

  });

});