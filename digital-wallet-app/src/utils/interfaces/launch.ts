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
