import React from 'react';
import faker from 'faker';
import dayjs from 'dayjs';
import './App.css';


faker.locale = 'zh_CN';

const rows = (new Array(100)).fill(0).map((_: any, id: number) => {
    return {
        id: id + 1,
        name: faker.name.findName().replace(/[a-z. ]/ig, ''),
        time: dayjs(faker.date.past().getTime()).locale('zh-cn').format('YYYY-MM-DD HH:mm:ss'),
    }
});


function App() {

    let views = rows.map((row) => {
        return <div key={row.id} className='item'>
            <div className='item-name'>{row.name}</div>
            <div className='item-time'>{row.time}</div>
            <div className='item-arrow'>
                <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1911"><path d="M689.621 512l-328.832-328.832-60.331 60.331 268.501 268.501-268.501 268.501 60.331 60.331z" p-id="1912"></path></svg>
            </div>
        </div>
    });

  return (
      <div className="App">
          <div className='items'>{views}</div>
      </div>
  );
}

export default App;
