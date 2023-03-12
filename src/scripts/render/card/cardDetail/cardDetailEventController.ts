import { inject, injectable } from "tsyringe";
import { CardDetailSwipeEventControllerProtocol } from "./cardDetailSwipeEventController";

export interface CardDetailEventControllerProtocol {
  setEvent(cardDetail: HTMLElement): void;
}

@injectable()
export default class CardDetailEventController
  implements CardDetailEventControllerProtocol
{
  constructor(
    @inject("CardDetailSwipeEventControllerProtocol")
    private cardDetailSwipeEventControllerProtocol: CardDetailSwipeEventControllerProtocol
  ) {}

  setEvent(cardDetail: HTMLElement): void {
    this.cardDetailSwipeEventControllerProtocol.setSwipeEvent(cardDetail);
  }
}
