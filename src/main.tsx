import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize/modern-normalize.css";
import { Media } from "./Media.tsx";
import bio from "./assets/bio.jpg";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Media
      title="Taiju Muto"
      imageUrl={bio}
      content="酒も飲みたいけど、仕事もしなくちゃならん。間をとって、エールハウスでギネス飲みながらコードを書こう。"
      date={new Date('2010-11-12T17:35:00.000+09:00')}
      onDeleteClick={() => {}}
    />
  </React.StrictMode>
);
