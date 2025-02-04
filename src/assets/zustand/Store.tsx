import { create } from "zustand";

//型の定義
type StoreStateType = {
  happys: number;
  happysUp: () => void;
};

//storeの作成
const useStore = create<StoreStateType>()((set) => ({
  //初期値
  happys: 0,
  //状態の更新
  happysUp: () =>
    set((state) => ({
      happys: state.happys + 1,
    })),
}));

export { useStore };
