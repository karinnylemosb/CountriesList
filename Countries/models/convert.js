const xl = require("excel4node");
const wb = new xl.Workbook('Countries List'); //Criando um objeto para manipular
const ws = wb.addWorksheet ('Tabela de países'); 

module.exports.convertToXslx = (data) => {

    const headingColumnNames = ["Name","Capital","Area","Currencies"];

    let wb = ('Countries List', 1);

    let headingColumnIndex =2; 

    headingColumnNames.forEach((heading) => {
        //passa por todos itens do array
        // cria uma célula do tipo string para cada título
        ws.cell(2, headingColumnIndex++).string(heading) //.style(textStyle('#808080'))
    });

    let rowIndex = 3; //Vai começar da segunda linha

    data.forEach(record => { //Vai passar por cada item o obj data
        let columnIndex =1; //Setar que vai começar da primeira coluna
        Object.keys(record).forEach(columnName =>{
            ws.cell (rowIndex, columnIndex++).string(record[columnName]) //.style(textStyle);
        });
        rowIndex++;
    });

wb.write("Teste.xlsx");

}




