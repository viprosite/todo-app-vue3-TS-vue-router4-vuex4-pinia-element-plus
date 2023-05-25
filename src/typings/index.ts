// 每个todo项的属性
export interface IToDo {
  id: number;
  name: string;
  status: boolean;
}

// 提交的payload
export interface IPayload {
  type: string;
  id?: number;
  currentPage?: string;
  todo?: string;
}
