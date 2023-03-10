export interface FormResetterProtocol {
  reset(form: HTMLFormElement): void;
}
export class FormResetter implements FormResetterProtocol {
  reset(form: HTMLFormElement): void {
    form.reset();
  }
}
