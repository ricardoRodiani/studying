// cada arquivo é um módulo, em node.js
// tudo que está no módulo fica no módulo
console.log(this)

this.ola = 'Fala Pessoal' // "exporta" 
exports.bemVindo = 'Bem vindo ao node!'
module.exports.ateLogo = 'Até próximo exemplo'