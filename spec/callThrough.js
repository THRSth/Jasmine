describe("Exemplos do objeto spy", () => {
    let Calculadora = {
        somar: (n1, n2) => {
            return n1 + n2;
        },
        subtrair: (n1, n2) => {
            return n1 - n2;
        },

    };

    beforeAll(() => {
        //Existem exeçoes no spy
        //usando o callThrough() o spy  vai executar o objeto original
        spyOn(Calculadora, "subtrair").and.callThrough();
    });

    it("Deve executar o metodo subtrair original", () => {
        expect(Calculadora.subtrair(3, 1)).toEqual(2);
    });
});
