import { Item } from "../item/index";

export default class Card {
  private convertItemToCard(
    { problem, answer, id, complete }: Item,
    templateId: string
  ): void {
    const cardTemplate = document.getElementById(
      templateId
    ) as HTMLTemplateElement;
    const cardTemplateContent = cardTemplate.content;
    const cardCloneTemplate = cardTemplateContent.cloneNode(true);
    console.log(problem, answer, id, complete);
    console.log(cardCloneTemplate);
  }
  constructor(public item: Item, public templateId: string) {
    this.convertItemToCard(item, templateId);
  }
}
