import { inject, injectable } from "tsyringe";
import { Item } from "../../../item";
import { CardDetailControllerProtocol } from "./cardDetailController";

export interface ClickEventControllerProtocol {
  onClick(cardElement: HTMLElement, item: Item): void;
}

@injectable()
export default class ClickEventController
  implements ClickEventControllerProtocol
{
  constructor(
    @inject("CardDetailControllerProtocol")
    private cardDetailController: CardDetailControllerProtocol
  ) {}
  onClick(cardElement: HTMLElement, item: Item): void {
    const cardInnerElement = cardElement.querySelector(".card__inner");

    cardInnerElement?.addEventListener("click", () => {
      this.cardDetailController.render(item);
    });
  }
}
