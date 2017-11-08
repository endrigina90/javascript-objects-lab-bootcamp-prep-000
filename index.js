var recipes = new Object();

function updateObjectWithKeyAndValue(recipes,key,value) {
recipes[key] = value
return recipes
}
function destructivelyUpdateObjectWithKeyAndValue(recipes,key,value) {
  return Object.assign({}, recipes, {[key]:value})
}
function destructivelyDeleteFromObjectByKey(recipes, key) {
return delete recipes[key]
}

