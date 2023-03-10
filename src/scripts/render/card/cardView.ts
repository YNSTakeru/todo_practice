export interface CardViewProtocol {
  render(cardElement: HTMLElement, cardContainerClassNameQuery: string): void;
}

export default class CardView implements CardViewProtocol {
  render(cardElement: HTMLElement, cardContainerClassNameQuery: string): void {
    document
      .querySelector(cardContainerClassNameQuery)
      ?.insertAdjacentElement("afterbegin", cardElement);
  }
}
