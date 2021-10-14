describe("Exemplos do objeto spy calls", () => {
    let Calculadora = {
        somar: (n1, n2) => {
            return n1 + n2;
        },
        subtrair: (n1, n2) => {
            return n1 - n2;
        }
    };

    beforeAll(() => {
        spyOn(Calculadora, "somar").and.returnValue(10);
    });
    

    //Todo spy possui o obje calls com informações sobre a chamada

    xit("Deve demonstrar o uso do calls.any", () => {
        //calls.any valida se foi chamado uma vez
        Calculadora.somar(1, 1);
        expect(Calculadora.somar.calls.any()).toBeTruthy();
    });

    
    xit("Deve demonstrar o uso do calls.count", () => {
        //calls.count valida quantas vezes afunção  foi chamada
        Calculadora.somar(1, 1);
        Calculadora.somar(1, 1);
        expect(Calculadora.somar.calls.count()).toEqual(2);
    });


    xit("Deve demonstrar o uso do calls.argsFor", () => {
        //calls.argsFor recebe um index de um array para validar os parametros passados na função
        Calculadora.somar(1, 1);
        Calculadora.somar(2, 2);
        expect(Calculadora.somar.calls.argsFor(0)).toEqual([1, 1]);
        expect(Calculadora.somar.calls.argsFor(1)).toEqual([2, 2]);
    });

    
    xit("Deve demonstrar o uso do calls.allArgs", () => {
        //calls.allArgs retorna todos parametros passados nas funções
        Calculadora.somar(1, 1);
        Calculadora.somar(2, 2);
        expect(Calculadora.somar.calls.allArgs()).toEqual([[1, 1], [2, 2],]);
    });

    it("Deve demonstrar o uso do calls.all", () => {
        //calls.all retorna todos os dados de todas as chamadas
        Calculadora.somar(1, 1);
        Calculadora.somar(2, 2);

        let retorno = Calculadora.somar.calls.all();
        expect(retorno[1].object).toEqual(Calculadora);
        expect(retorno[1].args).toEqual([2, 2]);
        expect(retorno[1].returnValue).toEqual(10);
    });

    it("Deve demonstrar o uso do calls.mostRecent", () => {
        //calls.mostRecent retorna os dados da ultima chamada
        //seria um calls.all[.length - 1]
        Calculadora.somar(1, 1);
        Calculadora.somar(2, 2);

        let retorno = Calculadora.somar.calls.mostRecent();
        expect(retorno.object).toEqual(Calculadora);
        expect(retorno.args).toEqual([2, 2]);
        expect(retorno.returnValue).toEqual(10);
    });

    it("Deve demonstrar o uso do calls.first", () => {
        //calls.first retorna os dados da primeira chamada
        //seria um calls.all[0]
        Calculadora.somar(1, 1);
        Calculadora.somar(2, 2);

        let retorno = Calculadora.somar.calls.first();
        expect(retorno.object).toEqual(Calculadora);
        expect(retorno.args).toEqual([1, 1]);
        expect(retorno.returnValue).toEqual(10);
    });

    it("Deve demonstrar o uso do calls.reset", () => {
        //calls.reset limpa os dados das chamadas dos metodos spy
        Calculadora.somar(1, 1);
        Calculadora.somar(2, 2);

        expect(Calculadora.somar.calls.any()).toBeTruthy();
        
        Calculadora.somar.calls.reset();
        expect(Calculadora.somar.calls.any()).toBeFalsy();
    });
});
