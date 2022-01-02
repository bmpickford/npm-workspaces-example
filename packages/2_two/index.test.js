import { name } from './index.js';
import defaultexport from './index.js';
import { expect } from 'chai';

describe('two', () => {
    it('should import named', () => {
        expect(name).to.equal('module:two:named');
    });

    it('should import default', () => {
        expect(defaultexport).to.equal('module:two:default');
    });
});