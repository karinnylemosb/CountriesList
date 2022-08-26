var {getAll} = require('../services/apiservice');

module.exports.searchCountries = async() => {

  const countries = await getAll();
  const format = formatCountries(countries);
  return format;
  }

function formatCountries (countries){
  const myCountries =[];
  //Como capital não possui todos os dados: 
  countries.map(d => {
      var capital = "-";
      if (d.capital && d.capital instanceof Array) {
      capital = d.capital.length > 0 ? d.capital[0] : "-";};
      
      var area = "-";
      if(d.area){
          var value = (d.area).toLocaleString(
          "pt-BR",  { minimumFractionDigits: 2 }
          );
          area = value.toString()};
      
      let currencies = "-";
      if(d.currencies && typeof d.currencies === 'object' && d.currencies !== null){
      currencies = Object.keys(d.currencies).join(",");
      
      }
  // const currencies = Object.keys(d.currencies).join(",");  
  myCountries.push(
  {  nome: d.name.common,  capital: capital,  area: area,  currencies: currencies}
  )})

  myCountries.sort((a, b) => {
      if (a.nome < b.nome)
        return -1;
      if (a.nome > b.nome)
        return 1;
      return 0;
    })

  return myCountries;
}

