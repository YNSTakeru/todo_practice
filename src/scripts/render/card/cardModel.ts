import { Item } from "../../item";

export interface CardModelProtocol {
  convertItemToCard(
    { problem, answer, id, complete }: Item,
    templateId: string
  ): HTMLElement;
}

export default class CardModel implements CardModelProtocol {
  private cardElement?: HTMLElement;

  convertItemToCard(
    { problem, answer, id, complete }: Item,
    templateId: string
  ): HTMLElement {
    this.cardElement = this.getCardDom(templateId);
    this.setCardConfig({ problem, answer, id, complete });
    return this.cardElement;
  }

  private getCardDom(templateId: string): HTMLElement {
    const cardTemplate = document.getElementById(
      templateId
    ) as HTMLTemplateElement;

    const importedNode = document.importNode(cardTemplate.content, true);

    return importedNode.firstElementChild as HTMLElement;
  }
  private setCardConfig({ problem, answer, id, complete }: Item): void {
    this.setCardContent({ problem, answer } as Item, {
      contentClassNameQuery: ".card__content",
      dataAnswer: "data-answer",
      dataProblem: "data-problem",
    });
    this.setCardId(id.toString(), "data-id");
    this.validateCheck(complete, {
      cardIconClassNameQuery: ".card__icon__check",
      hiddenClassName: "hidden",
    });
  }

  private setCardContent(
    { problem, answer }: Item,
    {
      contentClassNameQuery,
      dataAnswer,
      dataProblem,
    }: {
      contentClassNameQuery: string;
      dataAnswer: string;
      dataProblem: string;
    }
  ): void {
    if (!this.cardElement) return;
    const cardContent = this.cardElement.querySelector(contentClassNameQuery)!;
    cardContent.textContent = problem;
    cardContent.setAttribute(dataAnswer, answer);
    cardContent.setAttribute(dataProblem, problem);
  }

  private setCardId(id: string, dataKey: string): void {
    if (!this.cardElement) return;
    this.cardElement.setAttribute(dataKey, id);
  }

  private validateCheck(
    complete: boolean,
    {
      cardIconClassNameQuery,
      hiddenClassName,
    }: { cardIconClassNameQuery: string; hiddenClassName: string }
  ): void {
    if (!this.cardElement) {
      return;
    }
    const cardCheckElement = this.cardElement.querySelector(
      cardIconClassNameQuery
    )!;
    complete
      ? cardCheckElement.classList.remove(hiddenClassName)
      : cardCheckElement.classList.add(hiddenClassName);
  }
}
