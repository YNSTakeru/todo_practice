export type ItemObj = {
  problem: string;
  answer: string;
  id: number;
  complete: boolean;
};

export abstract class Item {
  public problem;
  public answer;
  public id;
  public complete;

  constructor({ problem, answer, id, complete }: ItemObj) {
    this.problem = problem;
    this.answer = answer;
    this.id = id;
    this.complete = complete;
  }
}

export default class ConcreteItem extends Item {}
