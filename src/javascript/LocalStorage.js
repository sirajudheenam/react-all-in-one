const data = {
  abc: 'abc',
  bcd: {
    def: 'def',
    ghi: 'ghi',
  },
};

Storage.prototype.setObj = function (key, obj) {
  return this.setItem(key, JSON.stringify(obj));
};
Storage.prototype.getObj = function (key) {
  return JSON.parse(this.getItem(key));
};

function setAndGetLocalStorageItems(name = 'data', data) {
  localStorage.setObj(name, data);
  const localData = localStorage.getObj(name);
  localData && console.log(localData);
}

setAndGetLocalStorageItems('data', data);
