import { inject, injectable } from "tsyringe";
import { Item } from "../../item";
import ConcreteItemFactoryProtocol from "../../item/itemFactory";
import { ClickEventControllerProtocol } from "../card/cardDetail/clickEventController";
import { CardModelProtocol } from "./cardModel";
import { CardViewProtocol } from "./cardView";
export interface CardControllerProtocol {
  render(): void;
}

@injectable()
export default class CardController implements CardControllerProtocol {
  constructor(
    @inject("ConcreteItemFactoryProtocol")
    private concreteItemFactoryProtocol: ConcreteItemFactoryProtocol,
    @inject("CardModelProtocol") private cardModelProtocol: CardModelProtocol,
    @inject("CardViewProtocol") private cardViewProtocol: CardViewProtocol,
    @inject("ClickEventControllerProtocol")
    private clickEventControllerProtocol: ClickEventControllerProtocol
  ) {}
  private create(): HTMLElement {
    const newItem = this.concreteItemFactoryProtocol.getLatestItem();
    const cardElement = this.cardModelProtocol.convertItemToCard(
      { ...newItem },
      "card"
    );
    this.onClick(cardElement, newItem);
    return cardElement;
  }
  render(): void {
    const cardElement = this.create();
    this.cardViewProtocol.render(cardElement, ".card__container");
  }
  onClick(cardElement: HTMLElement, item: Item): void {
    this.clickEventControllerProtocol.onClick(cardElement, item);
  }
}
