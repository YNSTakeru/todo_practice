import "reflect-metadata";
import { container } from "tsyringe";
import "../styles/main.scss";
import "../styles/vendors/css-reset.css";
import Form from "./form/form";
import FormDataSender from "./form/formDataSender";
import { FormResetter } from "./form/formResetter";
import ConcreteItemFactory from "./item/itemFactory";
import CardController from "./render/card/cardController";
import CardDetailController from "./render/card/cardDetail/cardDetailController";
import CardDetailModel from "./render/card/cardDetail/cardDetailModel";
import CardDetailView from "./render/card/cardDetail/cardDetailView";
import ClickEventController from "./render/card/cardDetail/clickEventController";
import CardModel from "./render/card/cardModel";
import CardView from "./render/card/cardView";
import SubmitEventController from "./submitEventController";

(function run() {
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
  container.register("ClickEventControllerProtocol", {
    useClass: ClickEventController,
  });
  container.register("CardDetailControllerProtocol", {
    useClass: CardDetailController,
  });
  container.register("CardDetailModelProtocol", {
    useClass: CardDetailModel,
  });

  container.register("CardDetailViewProtocol", {
    useClass: CardDetailView,
  });

  const submitEvent = container.resolve(SubmitEventController);
  const form = new Form();
  submitEvent.onClick(form);
})();
