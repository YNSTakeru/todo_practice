import { inject, injectable } from "tsyringe";
import { ItemFactoryProtocol } from "../item/itemFactory";
import Form from "./form";

export interface IFormDataSender {
  addItemToItemList(form: Form): void;
}
@injectable()
export default class FormDataSender implements IFormDataSender {
  constructor(
    @inject("ItemFactoryProtocol")
    private itemFactoryProtocol: ItemFactoryProtocol
  ) {}

  private convertFormDataToFormContents(form: Form): {
    problem: string;
    answer: string;
    complete: boolean;
  } {
    const { Dom } = form;
    const { problem, answer } = Dom;
    return { problem: problem.value, answer: answer.value, complete: false };
  }
  addItemToItemList(form: Form): void {
    const formObj = this.convertFormDataToFormContents(form);
    this.itemFactoryProtocol.create(formObj);
  }
}
