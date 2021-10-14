describe("Deve exemplificar o uso do afterAll", () => {
    let cont = 0;
    //execultar depois de um dos testes
    beforeAll(() => {
        cont = 10;
    });

    beforeEach(() => {
        cont++;
    });

    xit('deve garantir o valor 11 para o contador', () => {
        expect(cont).toEqual(11);
    });

    it('deve garantir o valor 12 para o contador', () => {
        expect(cont).toEqual(12);
        pending("desabilitado por.........")
    }); 
})