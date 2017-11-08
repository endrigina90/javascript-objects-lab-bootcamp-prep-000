var recipes = new Object();

function updateObjectWithKeyAndValue(recipes,key,value) {
recipes[key] = value
return recipes
}
function updateObjectWithKeyAndValue(recipes,key,value) {
  return Object.assign({}, recipes, {[key]:value})
}
function destructivelyUpdateObjectWithKeyAndValue(recipes,key,value) {
  return Object.assign(recipes, {[key]:value})
}
function deleteFromObjectByKey(object, key) {
return delete recipes[key]
}
