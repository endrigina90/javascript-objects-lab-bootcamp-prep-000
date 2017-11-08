var recipes = new Object();

function updateObjectWithKeyAndValue(recipes,key,value) {
recipes[key] = value
return recipes
}

function updateObjectWithKeyAndValue(object,key,value) {
recipes[key] = value
  return recipes.assign({}, object, {[key]:value})
}
