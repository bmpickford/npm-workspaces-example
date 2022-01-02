import { name } from './index.js';
import defaultexport from './index.js';
import { expect } from 'chai';

describe('three', () => {
    it('should import named', () => {
        expect(name).to.equal('module:three:named');
    });

    it('should import default', () => {
        expect(defaultexport).to.equal('module:three:default');
    });
});