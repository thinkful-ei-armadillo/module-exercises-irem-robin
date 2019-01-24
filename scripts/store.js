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

  const findbyId = function(id){
    return store.items.find(function(element) {
          return  element.id === id
    });
  };
  
  const toggleCheckedFilter = function(){
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setSearchTerm = function(arg){
    this.searchTerm = arg;
  };

  const addItem= function(name){
    // store.items.push({ id: cuid(), name: name, checked: false })
    try {
      Item.validateName(name);
      store.items.push(Item.create(name));
    }
    catch(error) {
      console.log(error.message);
    }
    
  };
  
  const findAndUpdateName= function(id, newName){
    try{
      Item.validateName(newName);
      store.findbyId(id)
          .name = newName;
    }
    catch (error){
      console.log(`Can not update name ${error.message}`); 
    }
  };

  const findAndToggleChecked= function(id){
    const findThis = store.findbyId(id);
    findThis.checked = !findThis.checked;
  };
  
  const findAndDelete= function(id){
    const indexFind = store.items.findIndex(el => el.id == id);
    store.items.splice(indexFind, 1);
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
    toggleCheckedFilter,
    setSearchTerm
  };
}());