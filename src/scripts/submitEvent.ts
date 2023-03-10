import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import Form from "./form/form";
import { IFormDataSender } from "./form/formDataSender";
import { CardControllerProtocol } from "./render/card/cardController";

@injectable()
export default class SubmitEvent {
  constructor(
    @inject("IFormDataSender") private formDataSender: IFormDataSender,
    @inject("CardControllerProtocol")
    private cardController: CardControllerProtocol
  ) {}

  onClick(form: Form): void {
    const { Dom } = form;
    Dom.submit.addEventListener("click", (event) => {
      event.preventDefault();
      this.formDataSender.addItemToItemList(form);
      this.cardController.render();
    });
  }
}
