import ConcreteItem, { Item, ItemObj } from "../item/index";

type FormContents = {
  problem: string;
  answer: string;
  complete: boolean;
};

export interface ItemFactoryProtocol {
  create(formObj: FormContents): void;
}

export interface ConcreteItemFactoryProtocol {
  getItemList(): Item[];
}

export abstract class ItemFactory implements ItemFactoryProtocol {
  get(): Item[] {
    return itemList;
  }

  abstract createItem(formObj: FormContents): Item;
  abstract registerItem(itemObj: ItemObj): void;

  create(formObj: FormContents): void {
    const item = this.createItem(formObj);
    this.registerItem(item);
  }
}

const itemList: Item[] = [];

export default class ConcreteItemFactory
  extends ItemFactory
  implements ConcreteItemFactoryProtocol
{
  createItem(formObj: FormContents): Item {
    const newItemObj = Object.assign(formObj, {
      id: itemList.length + 1,
    }) as ItemObj;
    return new ConcreteItem(newItemObj);
  }
  registerItem(item: Item): void {
    itemList.push(item);
  }
  getItemList() {
    return itemList;
  }
}
