describe("Deve exemplificar o uso do beforeAll", () => {
    let cont = 0;
    //execultar antes de um dos testes
    beforeAll(() => {
        cont = 10;
    });

    beforeEach(() => {
        cont++;
    });

    it('deve garantir o valor 11 para o contador', () => {
        expect(cont).toEqual(11);
    });

    xit('deve garantir o valor 12 para o contador', () => {
        expect(cont).toEqual(12);
    });
})