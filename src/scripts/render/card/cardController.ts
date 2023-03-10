import { inject, injectable } from "tsyringe";
import ConcreteItemFactoryProtocol from "../../item/itemFactory";
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
    @inject("CardViewProtocol") private cardViewProtocol: CardViewProtocol
  ) {}
  private create(): HTMLElement {
    const newItem = this.concreteItemFactoryProtocol.getLatestItem();
    return this.cardModelProtocol.convertItemToCard({ ...newItem }, "card");
  }
  render(): void {
    const cardElement = this.create();
    this.cardViewProtocol.render(cardElement, ".card__container");
  }
}
