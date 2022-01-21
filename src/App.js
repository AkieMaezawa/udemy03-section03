import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);
  // 関数は毎回新しいものとしてみなされるのでChildAreaに渡すたびにレンダリングされる。
  // それを避けるためにはuseCallbackを使うとよい。
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  // 変数をレンダリングしないようにする（毎回1+3をしない）ためにはuseMemoを使う
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose}/>
    </div>
  );
}
