describe("Exemplos do objeto spy", () => {
    let Calculadora = {
        somar: (n1, n2) => {
            return n1 + n2;
        },
        subtrair: (n1, n2) => {
            return n1 - n2;
        }
    };

    beforeAll(() => {
        //callFake substitui a função de um objeto
        spyOn(Calculadora, 'somar').and.callFake((n1, n2) => {
            return n1 - n2;
        });
    });

    it('deve tranformar o meodo somar em subtração', () => {
        expect(Calculadora.somar(5, 2)).toEqual(3);
    })
});
