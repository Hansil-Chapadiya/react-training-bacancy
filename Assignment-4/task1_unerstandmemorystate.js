
//Creation of registery object
const registry = {
  active: [{ id: 1, name: "Alpha" }],
  archived: []
};

function cloneAndModify(data) {
  // Goal: Create a copy so the original registry isn't changed
  const copy = { ...data };
  
  copy.active.push({ id: 2, name: "Beta" });
  copy.active[0].name = "Gamma";
  copy.version = 2.0;
  
  return copy;
}

const newRegistry = cloneAndModify(registry);

console.log(registry.active.length); // it will return 2 : -> Because ...(spread ) operator only copy outer structure not internal structure
console.log(registry.active[0].name); // it will also override name of original registery because it is not deep copy // ?
console.log(registry.version);       // it will print undefine , because version is not propety of registery, it is included in CopyObject after copy of registery
