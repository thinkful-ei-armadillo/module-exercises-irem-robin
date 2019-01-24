/* global Item, cuid*/ 
'use strict';
const store = (function () {
    
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';
  function findbyId(id){
    return id.find(store.items);
  }
  
  const addItem= function(name){
    try {
      Item.validateName(name);
      Item.create(name);
      this.items.push(Item);
    }
    catch(error) {
      console.log(error.message);
    }
  };
  
  const findAndUpdateName= function(id, newName){
    try{
      Item.validateName(newName);
      Item.findbyId(id);
    }
    catch (error){
      console.log(`Can not update name ${error.message}`); 
    }
  };

  const findAndToggleChecked= function(id){
    this.findbyId(id).checked = !this.findbyId(id).checked;
  };
  
  const findAndDelete= function(id){
    console.log(this.items.filter(el => el.id !== id));
    return this.items.filter(el => el.id !== id);
  };

  return {
    items,
    hideCheckedItems,
    searchTerm,
    addItem,
    findbyId,
    findAndUpdateName,
    findAndToggleChecked,
    findAndDelete,
  };
}());