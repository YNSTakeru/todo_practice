export interface FormResetterProtocol {
  reset(): void;
}

export class FormResetter implements FormResetterProtocol {
  reset(): void {}
}
