import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import Form from "./form/form";
import { IFormDataSender } from "./form/formDataSender";
import { ICardListManager } from "./render/cardListManager";

@injectable()
export default class SubmitEvent {
  constructor(
    @inject("IFormDataSender") private formDataSender: IFormDataSender,
    @inject("ICardListManager") private cardListManager: ICardListManager
  ) {}

  onClick(form: Form): void {
    const { Dom } = form;
    Dom.submit.addEventListener("click", (event) => {
      event.preventDefault();
      // このメソッドのitemListと
      this.formDataSender.addItemToItemList(form);

      // このメソッドのitemListを一致させたい
      this.cardListManager.render();
    });
  }
}
