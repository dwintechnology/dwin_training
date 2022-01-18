doSomething().then(function(result) {
    return doSomethingElse(result)
    .then(newResult => doThirdThing(newResult));
  }).then(() => doFourthThing());