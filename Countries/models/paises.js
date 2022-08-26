var {getAll} = require('../services/apiservice'); 

module.exports.BuscaPaises = async() => {
const paises = await getAll();
const tratar = trataPaises(paises);
return tratar;
}

function trataPaises(paises){
const meusPaises =[];
//Como capital não possui todos os dados: 
paises.map(d => {
    var capital = "";
    if (d.capital && d.capital instanceof Array) {
     capital = d.capital.length > 0 ? d.capital[0] : "-";}
    var area = d.area ? d.area.toString() : '-' 
// const moedas = Object.keys(d.currencies).join(",");  
meusPaises.push(
{  nome: d.name.official,  capital: capital,  area: area,  moedas: 'moedas'}
)})


return meusPaises;
}

