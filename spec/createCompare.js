let MeuMatcher = {
    toBeValidEmail: (util, customEqualityTesters) => {
        let emailRegex = /\S+@\S+\.\S+/;

        return {
            compare: (actual, expectd) => {
                let result = {};

                if(expectd === undefined) {
                    result.pass = emailRegex.test(actual);
                } else {
                    result.pass = expectd.test(actual);
                }

                if(result.pass) {
                    result.message = actual + "é um email valido";
                } else {
                    result.message = actual + "não é um email valido";
                }

                return result;
            }
        }
    }
};

describe('Deve exemplificar a criação de comparadores', () => {
    beforeEach(() => {
        jasmine.addMatchers(MeuMatcher);
    });

    it('Deve verificar se um email é valido', () => {
        expect('email@teste.com').toBeValidEmail();
        expect('email').not.toBeValidEmail();
    });
});
