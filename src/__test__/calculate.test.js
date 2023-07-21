import calculate from '../components/Logic/calculate';

const obj = {
  total: null,
  next: null,
  operation: null,
};
describe('test calculate', () => {
  it('should return null value for the object when "AC" button is pressed', () => {
    const buttonName = 'AC';
    const result = calculate({ ...obj, next: '8' }, buttonName);

    expect(result).toMatchSnapshot();
  });

  it('should return  empty object when obj.next = 0 and buttonName = 0 is pressed', () => {
    const buttonName = '0';
    const result = calculate({ ...obj, next: '0' }, buttonName);

    expect(result).toMatchSnapshot();
  });

  it('should return  the object it self when obj.next contain "."and buttonName = "." is pressed', () => {
    const buttonName = '.';
    const result = calculate({ ...obj, next: '0.156' }, buttonName);

    expect(result).toMatchSnapshot();
  });
  it('should return  empty object when  buttonName "=" and no operation is pressed', () => {
    const buttonName = '=';
    const result = calculate({ ...obj, total: '100' }, buttonName);

    expect(result).toMatchSnapshot();
  });
  it('should return  "total : 2" in the object when  buttonName "=" and  add operation is pressed', () => {
    const buttonName = '=';
    const obj = { total: '1', next: '1', operation: '+' };
    const result = calculate(obj, buttonName);
    expect(result).toMatchSnapshot();
  });
  it('should return  "total : 0" in the object when  buttonName "=" and  subtraction operation is pressed', () => {
    const buttonName = '=';
    const obj = { total: '1', next: '1', operation: '-' };
    const result = calculate(obj, buttonName);
    expect(result).toMatchSnapshot();
  });
});
