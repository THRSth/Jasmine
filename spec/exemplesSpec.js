describe("Exemplos dos comparadores", function() {
    it("Deve exemplificar o uso do 'toBe'; ", function() {
        //toBe compara objetos, "==="
        const obj1 = { valor: true};
        const obj2 = { valor: true};
        
        expect(true).toBe(true);
        expect('teste').toBe('teste');

        //O toBe não compara apenas o valor do Objeto mas tbm se é o mesmo objeto
        //Então a comparção expect(obj1).toBe(obj2); da erro
        expect(obj1).not.toBe(obj2);
        // O not pode ser usado com todos os comparadores 
        // Na comparação anterio, ele espera que o obj1 naõ seja o obj2 
    });

    it("Deve exemplificar o uso do 'toEqual'; ", function() {
        //toEqual compara apenas o valor do objeto, "=="
        const obj1 = { valor: true};
        const obj2 = { valor: true};
        
        expect(true).toEqual(true);
        expect('teste').toEqual('teste');
        expect(obj1).toEqual(obj2);
    });

    it("Deve exemplificar o uso do 'toMatch'; ", function() {
        //toMatch compara usando o regex
        const texto = 'teste com Jasmine';
        

        expect(texto).toMatch("Jasmine");
        expect(texto).toMatch(/jasmine/i);
        expect("12345-456").toMatch(/^\d{5}-\d{3}$/);
    });

    it("Deve exemplificar o uso do 'toBeDefined'; ", function() {
        //toBeDefined qualquel valor diferente de undefined
        const n1 = 10;
        const n3 = undefined;
        let n2;

        expect(n1).toBeDefined();
        expect(null).toBeDefined();
        expect(NaN).toBeDefined();

        expect(n2).not.toBeDefined();
        expect(n3).not.toBeDefined();
    });

    it("Deve exemplificar o uso do 'toBeUndefined'; ", function() {
        //toBeUndefined espera um valor undefined
        let n1;
        const n2 = undefined;
        const n3 = false;

        expect(n1).toBeUndefined();
        expect(n2).toBeUndefined();

        expect(n3).not.toBeUndefined();
        expect(null).not.toBeUndefined();
    });

    it("Deve exemplificar o uso do 'toBeNull'; ", function() {
        //toBeNull espera um valor null
        const n1 = null;
        const n2 = undefined;
        let n3;

        expect(n1).toBeNull();
        expect(null).toBeNull();

        expect(n2).not.toBeNull();
        expect(n3).not.toBeNull();
    });

    it("Deve exemplificar o uso do 'toBeTruthy'; ", function() {
        //toBeTruthy espera um valor valido
        //Diferente de false, 0, undefined, null ou NaN.
        const n1 = 'teste';
        const n2 = 40;
        
        const n3 = null;
        const n4 = undefined;


        expect(n1).toBeTruthy();
        expect(n2).toBeTruthy();

        expect(n3).not.toBeTruthy();
        expect(n4).not.toBeTruthy();
    });

    it("Deve exemplificar o uso do 'toBeFalsy'; ", function() {
        //toBeFalsy espera um valor invalido
        //Igual a false, 0, undefined, null ou NaN.
        const n1 = 'teste';
        const n2 = 40;
        
        const n3 = null;
        const n4 = undefined;

        expect(n3).toBeFalsy();
        expect(n4).toBeFalsy();

        expect(n1).not.toBeFalsy();
        expect(n2).not.toBeFalsy();
    });

    it("Deve exemplificar o uso do 'toContain'; ", function() {
        //toContain busca-se item em um array ou string
        const n1 = ['teste', 'jasmine', 'jest'];
        const n2 = 'usamos o jasmine para testar';

        expect(n1).toContain("jasmine");
        expect(n2).toContain("jasmine");

        expect(n1).not.toContain("Jasmine");
        expect(n2).not.toContain("Jasmine");
    });

    it("Deve exemplificar o uso do 'toBeLessThan'; ", function() {
        //toBeLessThan Compara se um valor é menor que outro
        const n1 = 10
        const n2 = '1.5';

        expect(n1).toBeLessThan(20);
        expect(n2).toBeLessThan(3);

        expect(n1).not.toBeLessThan(5);
        expect(n2).not.toBeLessThan(1);
    });

    it("Deve exemplificar o uso do 'toBeGreaterThan'; ", function() {
        //toBeGreaterThan Compara se um valor é maior que outro
        const n1 = 10
        const n2 = '1.5';

        expect(n1).toBeGreaterThan(5);
        expect(n2).toBeGreaterThan(1);

        expect(n1).not.toBeGreaterThan(20);
        expect(n2).not.toBeGreaterThan(3);
    });

    it("Deve exemplificar o uso do 'toThrow'; ", function() {
        //toThrow espera um error
        const error = function() {
           return numero * 10;
        };
        
        const sucesse = function(numero) {
            return numero * 10;
        }

        expect(error).toThrow();
        expect(sucesse).not.toThrow();
    });

    it("Deve exemplificar o uso do 'toThrowError'; ", function() {
        //toThrow espera um error, valida tipo do erro e mensagem
        //suporta regex
        const calculadora = function(numero) {
           if(numero <= 0) {
               throw new TypeError('O numero deve ser maior que 0');
           }
           return numero * numero;
        };

        expect(() => calculadora(0)).toThrowError();
        expect(() => calculadora(0)).toThrowError('O numero deve ser maior que 0');
        expect(() => calculadora(0)).toThrowError(/maior que 0/);
        expect(() => calculadora(0)).toThrowError(TypeError);
        expect(() => calculadora(0)).toThrowError(TypeError, 'O numero deve ser maior que 0');
        
        expect(() => calculadora(10)).not.toThrowError();
    });

    it("Deve exemplificar o uso do 'Fail'; ", function() {
        //Fail permite parar um teste lançando um error
        const operacao = (execult, callback) => {
            if(execult) {
                callback();
            }
        }

        operacao(false, () => {
            fail('Não deve execultar function de callback');
        });
    });
    
});
