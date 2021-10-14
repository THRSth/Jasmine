describe("Exemplos do objeto spy", () => {
    let Calculadora = {
        somar: (n1, n2) => {
            return n1 + n2;
        }
    };

    let somarCreate;
    let CalculadoraCreate;

    beforeAll(() => {
        //Serve para fazer um mock do objeto
        //Um mock feito pelo spy retorna undefined  por default
        spyOn(Calculadora, "somar");


        //Cria um spy
        somarCreate = jasmine.createSpy('somarCreate');

        //Cria um spy obj
        CalculadoraCreate = jasmine.createSpyObj('CalculadoraCreate', ["somar", "subtarir"]);
        CalculadoraCreate.somar.and.returnValue(5);
    });

    xit("Deve possuir o metodo somar como não definido", () => {
        //Espera undefined do spyOn sem config
        expect(Calculadora.somar(1, 1)).toBeUndefined();
    });

    xit("Deve somar o metodo  somar ao menos  uma vez", () => {
        //Verifica se o objeto do spy não foi  chamado 
        expect(Calculadora.somar).not.toHaveBeenCalled();
        Calculadora.somar(1, 1);
        //Verifica se o objeto do spy foi  chamado 
        expect(Calculadora.somar).toHaveBeenCalled();
    });

    xit("Deve chamar o metodo somar duas vezes", () => {
        Calculadora.somar(1, 1);
        Calculadora.somar(1, 2);
        //Verifica se o objeto do spy foi  chamado 2 vezes
        expect(Calculadora.somar).toHaveBeenCalledTimes(2);
    });

    it("Deve chamar o metodo somar com os parametros validos", () => {
        Calculadora.somar(1, 1);
        Calculadora.somar(2, 3);

        //Verifica se o objeto do spy foi  chamado com os expectivos parametros
        expect(Calculadora.somar).toHaveBeenCalledWith(1, 1);
        expect(Calculadora.somar).toHaveBeenCalledWith(2, 3);
    });


    it("Deve demonstrar o uso do jasmine.createSpy", () => {
        //jasmine.createSpy cria um spy do zero e só
        //apenas função
        somarCreate(1, 2);

        expect(somarCreate).toHaveBeenCalled();
        expect(somarCreate).toHaveBeenCalledWith(1, 2);
    });

    it("Deve demonstrar o uso do jasmine.createSpyObj", () => {
        //jasmine.createSpyObj cria um spy obj
        //Recomendasse usar quando não tem acesso ao obejto
        //diferente do createSpy tem acesso aos and
        let retorno = CalculadoraCreate.somar(1, 2)

        expect(CalculadoraCreate.somar).toHaveBeenCalled();
        expect(CalculadoraCreate.somar).toHaveBeenCalledWith(1, 2);
        expect(retorno).toEqual(5);
    });
});
