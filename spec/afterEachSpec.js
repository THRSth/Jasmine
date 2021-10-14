describe("Deve exemplificar o uso do afterEach", () => {
    let cont = 0;
    beforeEach(() => {
        cont++;
    });
    
    //execultar depois de todos os testes
    afterEach(() => {
        cont = 0;
    });

    it('deve garantir o valor 1 para o contador', () => {
        expect(cont).toEqual(1);
    });

    it('deve ainda garantir o valor 1 para o contador', () => {
        expect(cont).toEqual(1);
    }); 
})