import { Operation } from "../Operation";
import { Balance } from "../Balance";

describe("Balance of operations", () => {
  it('should instantiate OperationsCollection class', () => {
    const collection = new Balance();
    expect(collection).toBeInstanceOf(Balance);
  });

  it('should add an operation to the collection', () => {
    const collection = new Balance();

    expect(() => {
      collection.add({amount: 1, timestamp: 99999999});
    }).not.toThrowError();
  });

  it('should return operations list', () => {
    const balance = new Balance();

    const operations: Operation[] = [
      {amount: 1, timestamp: 99999990},
      {amount: 3, timestamp: 99999991},
      {amount: -2, timestamp: 99999991},
    ];

    balance.add(operations[0]);
    balance.add(operations[1]);
    balance.add(operations[2]);

    expect(balance.operations).toEqual(operations);
  });

  it('should calculate operations balance', () => {
    const balance = new Balance();

    balance.add({amount: 1, timestamp: 99999990});
  });
});