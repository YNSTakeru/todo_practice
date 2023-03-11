import { Item } from "../../../item";

type CardDetailProperty = {
  cardDetailClassQueryName: string;
  cardDetailContentClassQueryName: string;
  dataProblemKey: string;
  dataAnswerKey: string;
  checkIconClassQueryName: string;
  hiddenClassName: string;
};

export interface CardDetailModelProtocol {
  create(
    item: Item,
    {
      cardDetailClassQueryName,
      cardDetailContentClassQueryName,
      dataProblemKey,
      dataAnswerKey,
      checkIconClassQueryName,
      hiddenClassName,
    }: CardDetailProperty
  ): HTMLElement;
}

export default class CardDetailModel implements CardDetailModelProtocol {
  private cardDetail?: HTMLElement;

  private setCardDetailContent({
    cardDetailContentClassQueryName,
    problem,
    answer,
    dataProblemKey,
    dataAnswerKey,
  }: {
    cardDetailContentClassQueryName: string;
    problem: string;
    answer: string;
    dataProblemKey: string;
    dataAnswerKey: string;
  }): void {
    const cardDetailContent = this.cardDetail?.querySelector(
      cardDetailContentClassQueryName
    ) as HTMLElement;

    cardDetailContent.textContent = problem;
    cardDetailContent.setAttribute(dataProblemKey, problem);
    cardDetailContent?.setAttribute(dataAnswerKey, answer);
  }
  private setCheckIconSituation({
    complete,
    checkIconClassQueryName,
    hiddenClassName,
  }: {
    complete: boolean;
    checkIconClassQueryName: string;
    hiddenClassName: string;
  }) {
    const checkIcon = this.cardDetail?.querySelector(checkIconClassQueryName);
    complete
      ? checkIcon?.classList.remove(hiddenClassName)
      : checkIcon?.classList.add(hiddenClassName);
  }
  private setCardDetailConfig(
    { problem, answer, complete }: Item,
    {
      cardDetailContentClassQueryName,
      dataProblemKey,
      dataAnswerKey,
      checkIconClassQueryName,
      hiddenClassName,
    }: CardDetailProperty
  ) {
    this.setCardDetailContent({
      cardDetailContentClassQueryName,
      problem,
      answer,
      dataProblemKey,
      dataAnswerKey,
    });
    this.setCheckIconSituation({
      complete,
      checkIconClassQueryName,
      hiddenClassName,
    });
  }

  create(
    item: Item,
    {
      cardDetailClassQueryName,
      cardDetailContentClassQueryName,
      dataProblemKey,
      dataAnswerKey,
      checkIconClassQueryName,
      hiddenClassName,
    }: CardDetailProperty
  ): HTMLElement {
    this.cardDetail = document.querySelector(
      cardDetailClassQueryName
    ) as HTMLElement;
    this.setCardDetailConfig(
      { ...item },
      {
        cardDetailClassQueryName,
        cardDetailContentClassQueryName,
        dataProblemKey,
        dataAnswerKey,
        checkIconClassQueryName,
        hiddenClassName,
      }
    );
    return this.cardDetail as HTMLElement;
  }
}
