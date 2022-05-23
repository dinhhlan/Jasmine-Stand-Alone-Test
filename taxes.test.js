
describe('calculateTaxes tests', function() {
   it('should calculate the high tax bracket', function() {
      expect (calculateTaxes(50000)).toEqual(12500);
      expect (calculateTaxes(100000)).toEqual(25000);
   })
   
   it('should calculate the high tax bracket', function() {
      expect (calculateTaxes(10000)).toEqual(1500);  
      expect (calculateTaxes(1000)).toBe(150);  
      expect (calculateTaxes(0)).toBe(0);  
   })
   
   it('should reject invalid income', function() {
      expect (()=>calculateTaxes(aksljdlkas)).toThrowError();  
      expect (()=>calculateTaxes([])).toThrowError();  
      expect (()=>calculateTaxes(true)).toThrowError();  
   })
})
describe('removeDupes tests', function(){
   it('should remove duplicates from an array', function() {
      expect(removeDupes([1, 1, 2, 2, 2, 3, 4])).toEqual([1, 2, 3, 4]);
      expect(removeDupes([1, 2, 3])).toEqual([1, 2, 3]);
      expect(removeDupes([1, 2, 3])).toBeInstanceOf(Array);
   })
   it('should remove duplicates from a string', function() {
      expect(removeDupes('hello')).toEqual('helo');
      expect(removeDupes('hello')).toBeInstanceOf(String);
   })   
})
describe('remeve tests', function() {
   it('should remove value from array', function() {
      expect(remove ([1, 2, 3, 4, 5, 6], 6)).not.toContain(6);
   })
})
describe('submitForm() tests', () => {
   it('saves input val to usernames array', () => {
      input.value = 'chickenGal';
      submitForm();
      expect(usernames.length).toBe(1);
      expect(usernames).toContain('chickenGal');
   })
   it('saves long usernames', () => {
      input.value = 'I am a panda lover 567';
      submitForm();
      expect(usernames.length).toBe(1);
   })
})
afterEach(function() {
   input.value ='';
   usernames = [];
})
beforeEach(() => {
   console.log("BEFORE!")
})
beforeAll(() => {
   console.log("BEFORE ALL")
})
afterAll(() => {
   console.log("AFTER ALL")
})
