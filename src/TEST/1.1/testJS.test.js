import { testJS } from './testJS';

test('Заменить пробелы на заданный разделитель', () => {
  expect(testJS('testName')).toBe('testName');
});
