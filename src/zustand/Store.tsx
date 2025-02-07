import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

//型の定義
type StoreStateType = {
  happys: number;
  happysUp: () => void;
  showhappys: () => void;
};

// logger、状態を更新するたびにその変更をコンソールに記録する
// const logger =
//   (config: StateCreator<StoreStateType>) => (set: any, get: any, api: any) =>
//     config(
//       (args) => {
//         console.log("前の状態:", get().happys);
//         set(args);
//         //argの中身を取得(どのような処理が行われているか確認できる)
//         console.log(args);
//         console.log("次の状態:", get().happys);
//       },
//       get,
//       api
//     );

//storeの作成
const useStore = create<StoreStateType>()(
  immer((set, get) => ({
    //初期値
    happys: 0,
    //状態の更新（set関数を使用）
    happysUp: () =>
      set((state) => {
        //immerを使うとコードがより直感的にかける
        state.happys++;
      }),
    //状態の読み取り
    showhappys: () => {
      alert(`Current happys:${get().happys}`);
    },
  }))
);

export { useStore };
