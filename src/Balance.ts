import { Operation } from "./Operation";

export class Balance {
  private operationsList: Operation[] = [];
  add(operation: Operation): void {
    this.operations.push(operation);
  }

  get operations(): Operation[] {
    return this.operationsList;
  }
}