/* eslint-disable @typescript-eslint/no-explicit-any */
import { create, StateCreator } from "zustand";

//型の定義
type StoreStateType = {
  happys: number;
  happysUp: () => void;
  showhappys: () => void;
};

// logger、状態を更新するたびにその変更をコンソールに記録する
const logger =
  (config: StateCreator<StoreStateType>) => (set: any, get: any, api: any) =>
    config(
      (args) => {
        console.log("前の状態:", get().happys);
        set(args);
        //argの中身を取得(どのような処理が行われているか確認できる)
        console.log(args);
        console.log("次の状態:", get().happys);
      },
      get,
      api
    );

//storeの作成
const useStore = create<StoreStateType>()(
  logger((set, get) => ({
    //初期値
    happys: 0,
    //状態の更新（set関数を使用）
    happysUp: () =>
      set((state) => ({
        happys: state.happys + 1,
      })),
    //状態の読み取り
    showhappys: () => {
      alert(`Current happys:${get().happys}`);
    },
  }))
);

export { useStore };
