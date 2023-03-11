import { inject, injectable } from "tsyringe";
import { Item } from "../../../item";
import { CardDetailModelProtocol } from "./cardDetailModel";
import { CardDetailViewProtocol } from "./cardDetailView";

export interface CardDetailControllerProtocol {
  render(item: Item): void;
}

@injectable()
export default class CardDetailController
  implements CardDetailControllerProtocol
{
  constructor(
    @inject("CardDetailModelProtocol")
    private cardDetailModelProtocol: CardDetailModelProtocol,
    @inject("CardDetailViewProtocol")
    private cardDetailViewProtocol: CardDetailViewProtocol
  ) {}

  render(item: Item): void {
    const cardDetail = this.cardDetailModelProtocol.create(item, {
      cardDetailClassQueryName: ".card__detail__container",
      cardDetailContentClassQueryName: ".card__content",
      dataProblemKey: "data-problem",
      dataAnswerKey: "data-answer",
      checkIconClassQueryName: ".card__icon__check",
      hiddenClassName: "hidden",
    });
    this.cardDetailViewProtocol.render(cardDetail, "hidden");
  }
}
