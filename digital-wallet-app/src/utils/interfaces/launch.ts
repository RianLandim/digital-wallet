import { z } from "zod";
import { categoryEnum } from "../enums/category";

export enum LaunchTypeEnum {
  CREDIT = "CREDIT",
  DEBIT = "DEBIT",
}

export type LaunchProps = {
  title: string;
  data: {
    id: string;
    value: number;
    title: string;
    type: LaunchTypeEnum;
    createdAt: Date;
    updatedAt: Date;
  }[];
};

export type LaunchPropsChart = {
 title: z.infer<typeof categoryEnum>;
 data: string
}
