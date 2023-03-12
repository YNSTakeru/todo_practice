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
import CardDetailEventController from "./render/card/cardDetail/cardDetailEventController";
import CardDetailModel from "./render/card/cardDetail/cardDetailModel";
import CardDetailSwipeEventController from "./render/card/cardDetail/cardDetailSwipeEventController";
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

  container.register("CardDetailEventControllerProtocol", {
    useClass: CardDetailEventController,
  });

  container.register("CardDetailSwipeEventControllerProtocol", {
    useClass: CardDetailSwipeEventController,
  });

  const submitEvent = container.resolve(SubmitEventController);
  const form = new Form();
  submitEvent.onClick(form);

  const cardDetailEventController = container.resolve(
    CardDetailEventController
  );
  const cardDetail = document.querySelector(
    ".card__detail__container"
  ) as HTMLElement;

  cardDetailEventController.setEvent(cardDetail);
})();
