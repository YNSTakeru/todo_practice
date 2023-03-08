import { inject, injectable } from "tsyringe";
import Item from "../item";
import { ConcreteItemFactoryProtocol } from "../item/itemFactory";
import Card from "./card";
import CardList from "./cardList";
export interface ICardListManager {
  render(): void;
}

@injectable()
export default class CardListManager implements ICardListManager {
  constructor(
    @inject("ConcreteItemFactoryProtocol")
    private concreteItemFactoryProtocol: ConcreteItemFactoryProtocol
  ) {}
  private convertItemToCard(item: Item): Card {
    //   templateを持ってくる
    const newCard = new Card(item, "card");
    return newCard;

    //   document.appendで追加する
    // return newCard;
    //   もろもろのデータを登録する
  }
  private convertItemListToCardList(): CardList {
    // return this.itemList.dataArray.map((item) => this.convertItemToCard(item));
    return this.concreteItemFactoryProtocol
      .getItemList()
      .map((item) => this.convertItemToCard(item));
  }
  render(): void {
    const newCardList = this.convertItemListToCardList();
    console.log(newCardList);
    // console.log("newCardList", newCardList);
  }
}
