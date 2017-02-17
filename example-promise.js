function addPromise(a, b){
  return new Promise(function(resolve, reject){
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a + b);
    }else {
      reject('A & b need to be numbers');
    }
  });
}

addPromise(2, 4).then(function(sum){
  console.log('sucess', sum);
}, function(err){
  console.log('erro', err);
});

addPromise('Text', 4).then(function(sum){
  console.log('this should not show up');
}, function(err){
  console.log('This should appear', err);
});
