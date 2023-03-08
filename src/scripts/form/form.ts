export default class Form {
  public Dom: {
    problem: HTMLTextAreaElement;
    answer: HTMLTextAreaElement;
    submit: HTMLInputElement;
  };

  constructor(
    public problem: string = "problem",
    public answer: string = "answer",
    public submit: string = "input[type=submit]"
  ) {
    this.Dom = {
      problem: document.getElementById(problem) as HTMLTextAreaElement,
      answer: document.getElementById(answer) as HTMLTextAreaElement,
      submit: document.querySelector(submit) as HTMLInputElement,
    };
  }
}
