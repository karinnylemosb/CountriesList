const xl = require("excel4node");
const wb = new xl.Workbook('Countries List'); //Criando um objeto para manipular
const ws = wb.addWorksheet ('Tabela de países'); 

module.exports.convertToXslx = (data) => {
    console.log("Criando o arquivo xlsx ...");    
    const headingColumnNames = ["Name","Capital","Area","Currencies"];
    
    ws.cell(1,1).string("Countries List").style({font: {bold: true, size: 16, vertAlign: 'center',
            color:'#4F4F4F'}, alignment: {horizontal: 'center', vertical: 'center'}});
    ws.cell(1,1,1,4,true);

    let headingColumnIndex =1; 

    headingColumnNames.forEach((heading) => {
        //passa por todos itens do array
        // cria uma célula do tipo string para cada título
        ws.cell(2, headingColumnIndex++).string(heading).style ({font: {bold: true, size: 12, vertAlign: 'baseline',color:'#808080'}, alignment: {horizontal: 'left', vertical: 'center'}})});


    let rowIndex = 3; //Vai começar da segunda linha

    data.forEach(record => { //Vai passar por cada item o obj data
        let columnIndex =1; //Setar que vai começar da primeira coluna
        Object.keys(record).forEach(columnName =>{
            ws.cell (rowIndex, columnIndex++).string(record[columnName]).style ({font: {bold: false, size: 12, vertAlign: 'left', color:'black'}, alignment: {horizontal: 'left', vertical: 'center'} })});

        rowIndex++;
    });

wb.write("Countries.xlsx") 
console.log("Arquivo gerado!");

}