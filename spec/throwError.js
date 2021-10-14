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
        //.and.throwError faz retornar um error
        spyOn(Calculadora, 'somar').and.throwError('error');
    });

    it('deve lançar um error ao somar', () => {
        expect(() => Calculadora.somar(1, 1)).toThrowError('error');
    })
});
