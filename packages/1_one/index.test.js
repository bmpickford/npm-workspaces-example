import { name } from './index.js';
import defaultexport from './index.js';
import { expect } from 'chai';

describe('one', () => {
    it('should import named', () => {
        expect(name).to.equal('module:one:named');
    });

    it('should import default', () => {
        expect(defaultexport).to.equal('module:one:default');
    });
});