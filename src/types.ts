export type RootStackParamList = {
  DayList: undefined;
  DayEdit: { mode: CountingMode } | undefined;
};

export type CountingMode = "due" | "duration";
