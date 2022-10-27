import "./App.css";
import useSound from "use-sound";
import sound1 from "./audio/出題1.mp3";
import sound2 from "./audio/クイズ正解3.mp3";
import sound3 from "./audio/クイズ不正解1.mp3";
import sound4 from "./audio/拍手と歓声.mp3";
import sound5 from "./audio/ドンドンパフパフ.mp3";
import sound6 from "./audio/クイズ・ファンファーレ01.mp3";

function App() {
  const [play1] = useSound(sound1);
  const [play2] = useSound(sound2);
  const [play3] = useSound(sound3);
  const [play4] = useSound(sound4);
  const [play5] = useSound(sound5);
  const [play6] = useSound(sound6);

  return (
    <div className="App">
      <h1>知己のラジオ専用</h1>
      <div className="buttonContainer">
        <button onClick={play1} class="btn1">
          出題
        </button>
        <button onClick={play2} class="btn2">
          クイズ正解
        </button>
        <button onClick={play3} class="btn3">
          クイズ不正解
        </button>
        <button onClick={play4} class="btn4">
          拍手と歓声
        </button>
        <button onClick={play5} class="btn5">
          ドンドンパフパフ
        </button>
        <button onClick={play6} class="btn6">
          ファンファーレ01
        </button>
      </div>
    </div>
  );
}

export default App;
