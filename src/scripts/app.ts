import "reflect-metadata";
import { container } from "tsyringe";
import "../styles/main.scss";
import "../styles/vendors/css-reset.css";
import Form from "./form/form";
import FormDataSender from "./form/formDataSender";
import ConcreteItemFactory from "./item/itemFactory";
import CardListManager from "./render/cardListManager";
import SubmitEvent from "./submitEvent";
(function run() {
  const form = new Form();

  container.register("IFormDataSender", { useClass: FormDataSender });
  container.register("ItemFactoryProtocol", {
    useClass: ConcreteItemFactory,
  });
  container.register("ConcreteItemFactoryProtocol", {
    useClass: ConcreteItemFactory,
  });
  container.register("ICardListManager", { useClass: CardListManager });

  const submitEvent = container.resolve(SubmitEvent);
  submitEvent.onClick(form);
})();
