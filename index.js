const { spy } = require("chai");

function receivesAFunction(callback)
{
  return(callback());
}
receivesAFunction(function(){ return spy})

function returnsANamedFunction()
{
  return function namedFunction()
  { 
      return("cherera");
  };

}

function returnsAnAnonymousFunction(){
  return() => 
  {
    "uda"; 
  }
};