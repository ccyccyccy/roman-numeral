import convert from './convert';

test('convert 1000 to be equal M', () => {
  expect(convert(1000)).toBe('M');
});

test('convert 3000 to be equal MMM', () => {
  expect(convert(3000)).toBe('MMM');
});

test('convert 900 to be equal CM', () => {
  expect(convert(900)).toBe('CM');
});

test('convert 400 to be equal CD', () => {
  expect(convert(400)).toBe('CD');
});

test('convert 500 to be equal D', () => {
  expect(convert(500)).toBe('D');
});

test('convert 100 to be equal C', () => {
  expect(convert(100)).toBe('C');
});

test('convert 90 to be equal XC', () => {
  expect(convert(90)).toBe('XC');
});

test('convert 5990 to be equal MMMMMCMXC', () => {
  expect(convert(5990)).toBe('MMMMMCMXC');
});

test('convert 50 to be equal L', () => {
  expect(convert(50)).toBe('L');
});

test('convert 40 to be equal XL', () => {
  expect(convert(40)).toBe('XL');
});

test('convert 5940 to be equal MMMMMCMXL', () => {
  expect(convert(5940)).toBe('MMMMMCMXL');
});

test('convert 10 to be equal X', () => {
  expect(convert(10)).toBe('X');
});

test('convert 9 to be equal IX', () => {
  expect(convert(9)).toBe('IX');
});

test('convert 5949 to be equal MMMMMCMXLIX', () => {
  expect(convert(5949)).toBe('MMMMMCMXLIX');
});

test('convert 5 to be equal V', () => {
  expect(convert(5)).toBe('V');
});

test('convert 4 to be equal IV', () => {
  expect(convert(4)).toBe('IV');
});

test('convert 5944 to be equal MMMMMCMXLIV', () => {
  expect(convert(5944)).toBe('MMMMMCMXLIV');
});

test('convert 1 to be equal I', () => {
  expect(convert(1)).toBe('I');
});

test('convert 2 to be equal II', () => {
  expect(convert(2)).toBe('II');
});

test('convert 4927 to be equal MMMMCMXXVII', () => {
  expect(convert(4927)).toBe('MMMMCMXXVII');
});

test('convert 555 to be equal DLV', () => {
  expect(convert(555)).toBe('DLV');
});

test('convert 478 to be equal CDLXXVIII', () => {
  expect(convert(478)).toBe('CDLXXVIII');
});