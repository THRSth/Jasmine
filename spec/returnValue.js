describe("Exemplos do objeto spy", () => {
    let Calculadora = {
        subtrairReturnValue: (n1, n2) => {
            return n1 - n2;
        },
        subtrairReturnValues: (n1, n2) => {
            return n1 - n2;
        }
    };

    beforeAll(() => {
        //Existem exeçoes no spy
        //usando  o returnValue vc informa qual valor deve ser retornado
        //Por exemplo ao  inves de bater ao banco de dados, vc pode infor ao spy  para ja retorna um valor x
        //assim  tornando  o teste mais perfomatico
        spyOn(Calculadora, "subtrairReturnValue").and.returnValue(10);

        //usando  o returnValues vc informa quais valores devem ser retornados para multiplas chamadas
        spyOn(Calculadora, "subtrairReturnValues").and.returnValues(10, 20);
    });

    it("Deve retorna 10 para  o metodo subtrairReturnValue", () => {
        //Mesmo passando  como parametro os valores 2 e 1 que traria  o resultado 1 e esperando 10
        //o teste da sucesso, pq foi mocado para retorna 10;

        expect(Calculadora.subtrairReturnValue(2, 1)).toEqual(10);
    });

    it("Deve retorna valores distintos para o metodo subtrairReturnValues", () => {
        expect(Calculadora.subtrairReturnValues(2, 1)).toEqual(10);
        expect(Calculadora.subtrairReturnValues(5, 6)).toEqual(20);
        expect(Calculadora.subtrairReturnValues(8, 2)).toBeUndefined();
    });
});
