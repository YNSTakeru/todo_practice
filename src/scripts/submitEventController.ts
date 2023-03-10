import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import Form from "./form/form";
import { IFormDataSender } from "./form/formDataSender";
import { FormResetterProtocol } from "./form/formResetter";
import { CardControllerProtocol } from "./render/card/cardController";

@injectable()
export default class SubmitEventController {
  constructor(
    @inject("IFormDataSender") private formDataSender: IFormDataSender,
    @inject("CardControllerProtocol")
    private cardController: CardControllerProtocol,
    @inject("FormResetterProtocol") private formResetter: FormResetterProtocol
  ) {}
  onClick(form: Form): void {
    const { Dom } = form;
    const { submit, formElement } = Dom;
    submit.addEventListener("click", (event) => {
      event.preventDefault();
      this.formDataSender.addItemToItemList(form);
      this.cardController.render();
      this.formResetter.reset(formElement);
    });
  }
}
