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
  private cardDetail?: HTMLElement;
  constructor(
    @inject("CardDetailModelProtocol")
    private cardDetailModelProtocol: CardDetailModelProtocol,
    @inject("CardDetailViewProtocol")
    private cardDetailViewProtocol: CardDetailViewProtocol
  ) {}

  private create(item: Item): HTMLElement {
    return this.cardDetailModelProtocol.create(item, {
      cardDetailClassQueryName: ".card__detail__container",
      cardDetailContentClassQueryName: ".card__content",
      dataProblemKey: "data-problem",
      dataAnswerKey: "data-answer",
      checkIconClassQueryName: ".card__icon__check",
      hiddenClassName: "hidden",
    });
  }

  render(item: Item): void {
    this.cardDetail = this.create(item);
    this.cardDetailViewProtocol.render(this.cardDetail, "hidden");
  }
}
