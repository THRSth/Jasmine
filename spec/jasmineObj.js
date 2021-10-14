describe("Deve exemplificar o uso dos objetos jasmine", () => {
    let dobro;
    let carro;
    let numeros;
    let exibirTexto;
    let dobroCLock;
    
    beforeAll(() => {
        //cria um spy (mock)
        dobro = jasmine.createSpy("dobro");
        
        carro = {
            'ano': 2017
        };
        
        numeros = [1, 2, 3, 4, 5];
        
        
        exibirTexto = jasmine.createSpy("exibirTexto");


        dobroCLock = jasmine.createSpy('dobroCLock');
    });

    it("Deve demonstrar o uso do jasmine.any", () => {
        // O jasmine.any server para verificar se o valor é de determinado tipo
        dobro(10);
        expect(dobro).toHaveBeenCalledWith(jasmine.any(Number));
    });

    it("Deve demonstrar o uso do jasmine.anything", () => {
        // O jasmine.anything server para verificar se um objeto ou variavel é diferente de null undefined
        dobro(10);
        expect(dobro).toHaveBeenCalledWith(jasmine.anything());

        expect({}).toEqual(jasmine.anything());
    });

    it("Deve demonstrar o uso do jasmine.objectContaining", () => {
        // O jasmine.objectContaining server para verificar uma determinada entrada (cheve ou valor) existe no objeto
       
        expect(carro).toEqual(jasmine.objectContaining({'ano': 2017}));
        expect(carro).not.toEqual(jasmine.objectContaining({'ano': 2016}));
    });

    it("Deve demonstrar o uso do jasmine.arrayContaining", () => {
        // O jasmine.arrayContaining server para verificar se determinados valores existe no array
       
        expect(numeros).toEqual(jasmine.arrayContaining([3]));
        expect(numeros).toEqual(jasmine.arrayContaining([2, 4]));
        expect(numeros).not.toEqual(jasmine.arrayContaining([6]));
    });

    it("Deve demonstrar o uso do jasmine.stringMatching", () => {
        // O jasmine.stringMatching server para verificar se texto em uma string
        //suporta regex

        exibirTexto('Doc de jasmine')
       
        expect(exibirTexto).toHaveBeenCalledWith(jasmine.stringMatching('jasmine'));
        expect(exibirTexto).toHaveBeenCalledWith(jasmine.stringMatching(/Jasmine/i));
        expect("doc de  java").toEqual(jasmine.stringMatching('java'));
    });

    beforeEach(() => {
        jasmine.clock().install();
    });

    afterEach(() => {
        jasmine.clock().uninstall();
    });

    it("Deve demonstrar o uso do jasmine.clock - setTimeout", () => {
        // O jasmine.clock server para tornar sincrino as chamadas so setTimeout ou setInterval

        setTimeout(() => {
            dobroCLock(10);
        }, 1000);

        jasmine.clock().tick(1000);
        expect(dobroCLock).toHaveBeenCalled();
    });
});
