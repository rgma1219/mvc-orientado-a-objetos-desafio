import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  contacts: ContactsCollection;

  constructor() {
    this.contacts = new ContactsCollection();
    this.contacts.load();
  }

  processOptions(options: ContactsControllerOptions) {
    if (options.action === "get" && !options.params) {
      return this.contacts.getAll();
    }
    if (options.action === "get" && options.params) {
      return this.contacts.getOneById(options.params);
    }
    if (options.action === "save") {
      this.contacts.addOne(JSON.parse(options.params));
      this.contacts.save();
      return true;
    }
    return null;
  }
}

export { ContactsController };
