export interface IToDo {
  id: number;
  name: string;
  status: boolean;
}

export interface IPayload {
  id?: number;
  currentPage?: string;
  todo?: string;
}
