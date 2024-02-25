import React from 'react';
import ReactDOM from 'react-dom/client';

import { Media } from './Media.tsx';
import bio from './assets/bio.jpg';
//import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Media
      title="Taiju Muto"
      imageUrl={bio}
      content="酒も飲みたいけど、仕事もしなくちゃならん。間をとって、エールハウスでギネス飲みながらコードを書こう"
      date={new Date()}
      onDeleteClick={() => {}}
    />
  </React.StrictMode>
);
