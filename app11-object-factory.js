require('./rebecca11');
require('./darryl11');

// Summary: By using an object factory for the module.exports in movies11.js, we can create other objects. This will allow multiple copies of module.exports so that darryl and rebecca can have their own favMovie instead of referencing the same module.exports which would give the same favMovie to both Darryl and Rebecca as seen in app10.js.