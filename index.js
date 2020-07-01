const driver = {}

function updateDriverWithKeyAndValue(obj, key, value) {
    const NewDriver = { ...obj };
 
  NewDriver[key] = value;
 
  return NewDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    obj[key] = value;

    return obj;
}

function deleteFromDriverByKey(obj, key) {
    const newDriver = Object.assign({}, obj, key)
    delete newDriver[key]
    return newDriver
}

function destructivelyDeleteFromDriverByKey(obj, key) {
    delete obj[key]
    return obj
}
