export interface CardDetailViewProtocol {
  render(cardDetail: HTMLElement, hiddenClassName: string): void;
}

export default class CardDetailView implements CardDetailViewProtocol {
  private isHiddenValidate(cardDetail: HTMLElement, hiddenClassName: string) {
    cardDetail.classList.contains(hiddenClassName)
      ? cardDetail.classList.remove(hiddenClassName)
      : cardDetail.classList.add(hiddenClassName);
  }
  render(cardDetail: HTMLElement, hiddenClassName: string): void {
    this.isHiddenValidate(cardDetail, hiddenClassName);
  }
}
