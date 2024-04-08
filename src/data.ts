import { Realm } from "@realm/react";

export class Event extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  countingMode!: string;
  selectedDate!: string;
  title!: string;
  createdAt!: Date;

  static generate(mode: string, selectedDate: string, title: string) {
    return {
      _id: new Realm.BSON.ObjectId(),
      countingMode: mode,
      selectedDate,
      title,
      createdAt: new Date(),
    };
  }

  static schema = {
    name: "Event",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      countingMode: "string",
      selectedDate: "string",
      title: "string",
      createdAt: "date",
    },
  };
}
