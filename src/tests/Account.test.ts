import { Account } from "../Account";

describe(
  'Acceptance for Account class', () => {
    it('should instantiate the Account class', () => {
      const account = new Account();
      expect(account).toBeInstanceOf(Account);
    });

    it('should deposit sum', () => {
      const account = new Account();
      expect(() => {
        account.deposit(1);
      }).not.toThrowError();
    });

    it('should withdraw sum', () => {
      const account = new Account();
      expect(() => {
        account.withdraw(1);
      }).not.toThrowError();
    });

    it('should print statement', () => {
      
    });
  }
);