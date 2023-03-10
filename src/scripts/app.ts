import "reflect-metadata";
import { container } from "tsyringe";
import "../styles/main.scss";
import "../styles/vendors/css-reset.css";
import Form from "./form/form";
import FormDataSender from "./form/formDataSender";
import { FormResetter } from "./form/formResetter";
import ConcreteItemFactory from "./item/itemFactory";
import CardController from "./render/card/cardController";
import CardModel from "./render/card/cardModel";
import CardView from "./render/card/cardView";
import SubmitEventController from "./submitEventController";
(function run() {
  const form = new Form();

  container.register("IFormDataSender", { useClass: FormDataSender });
  container.register("CardControllerProtocol", { useClass: CardController });

  container.register("ItemFactoryProtocol", {
    useClass: ConcreteItemFactory,
  });
  container.register("ConcreteItemFactoryProtocol", {
    useClass: ConcreteItemFactory,
  });
  container.register("CardModelProtocol", { useClass: CardModel });
  container.register("CardViewProtocol", { useClass: CardView });
  container.register("FormResetterProtocol", { useClass: FormResetter });

  const submitEvent = container.resolve(SubmitEventController);

  submitEvent.onClick(form);
})();
