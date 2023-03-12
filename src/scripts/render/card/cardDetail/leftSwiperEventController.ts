export interface LeftSwipeEventControllerProtocol {
  onLeftSwipe(cardDetail: HTMLElement): void;
}

export default class LeftSwipeEventController
  implements LeftSwipeEventControllerProtocol
{
  onLeftSwipe(cardDetail: HTMLElement): void {
    console.log("ここ", cardDetail);
  }
}
