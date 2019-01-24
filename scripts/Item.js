'use strict';
const Item = (function (){
  // const create = create();
  // const validateName = validateName();
  return {
    create,
    validateName
  };
}());

const validateName = function(name){
  if (!name){
    return new TypeError('Name does not exist'); 
  };
}
const create = function(name){
  return {
    id: cuid(),
    name: name,
    checked: false  
  };
};