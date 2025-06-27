const assert = require('assert');
const { parseDataUrl } = require('../src/utils/index.js');

describe('parseDataUrl', () => {
  it('parses valid data url', () => {
    const input = 'data:image/png;base64,abcd';
    const res = parseDataUrl(input);
    assert.deepStrictEqual(res, { type: 'png', base64: 'abcd' });
  });

  it('returns original string when not a data url', () => {
    const input = 'hello';
    const res = parseDataUrl(input);
    assert.strictEqual(res, 'hello');
  });

  it('returns null for malformed data url', () => {
    const input = 'data:imagepng;base64,abcd';
    const res = parseDataUrl(input);
    assert.strictEqual(res, null);
  });
});
