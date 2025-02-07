import { create } from "zustand";

//型の定義
type StoreStateType = {
  happys: number;
  happysUp: () => void;
  showhappys: () => void;
};

//storeの作成
const useStore = create<StoreStateType>()((set) => ({
  //初期値
  happys: 0,
  //状態の更新（set関数を使用）
  happysUp: () =>
    set((state) => ({
      happys: state.happys + 1,
    })),
  //状態の読み取り
  showhappys: () => {
    alert(`Current happys:${useStore.getState().happys}`);
  },
}));

export { useStore };
