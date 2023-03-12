import { inject, injectable } from "tsyringe";
import { CardDetailViewProtocol } from "./cardDetailView";

export interface CardDetailSwipeEventControllerProtocol {
  setSwipeEvent(cardDetail: HTMLElement): void;
}

@injectable()
export default class CardDetailSwipeEventController
  implements CardDetailSwipeEventControllerProtocol
{
  private cardDetail?: HTMLElement;
  private touchStartX: number = 0;
  private touchEndX: number = 0;
  private swipeDistance: number = 0;
  private touchStartHandler = this.setTouchStart.bind(this);
  private touchMoveHandler = this.setTouchMove.bind(this);
  private touchEndHandler = this.setTouchEnd.bind(this);

  constructor(
    @inject("CardDetailViewProtocol")
    private cardDetailViewProtocol: CardDetailViewProtocol
  ) {}

  setTouchStart(e: TouchEvent) {
    this.touchStartX = e.touches[0].clientX;
    this.touchEndX = this.touchStartX;
  }

  setTouchStartEvent() {
    this.cardDetail?.addEventListener("touchstart", this.touchStartHandler);
  }

  setTouchMove(e: TouchEvent) {
    this.touchEndX = e.touches[0].clientX;
  }

  setTouchMoveEvent() {
    this.cardDetail?.addEventListener("touchmove", this.touchMoveHandler);
  }

  setTouchEnd() {
    this.setSwipeDistance();
    this.back();
  }

  setTouchEndEvent() {
    this.cardDetail?.addEventListener("touchend", this.touchEndHandler);
  }

  back() {
    this.isSwipeOverThreshold() && this.isLeft()
      ? this.cardDetailViewProtocol.back(
          this.cardDetail as HTMLElement,
          "hidden"
        )
      : false;
  }

  isSwipeOverThreshold() {
    const screenWidth = window.innerWidth / 3;
    return this.swipeDistance > screenWidth;
  }

  isLeft() {
    return this.touchEndX - this.touchStartX > 0 ? true : false;
  }

  setSwipeDistance() {
    this.swipeDistance = Math.abs(this.touchEndX - this.touchStartX);
  }

  setSwipeEvent(cardDetail: HTMLElement): void {
    this.cardDetail = cardDetail;
    this.setTouchStartEvent();
    this.setTouchMoveEvent();
    this.setTouchEndEvent();
  }
}
