interface Props {
  text: Array<string>;
  children?: React.ReactNode;
}

function Tab(props: Props) {
  return (
    <>
      <div>
        <ul className="tab">
          <li className="on">
            <a href="javascript:;">빨간색</a>
          </li>
          <li>
            <a href="javascript:;">노란색</a>
          </li>
          <li>
            <a href="javascript:;">주황색</a>
          </li>
          <li>
            <a href="javascript:;">초록색</a>
          </li>
        </ul>
        <div className="tab_contents">
          탭 콘텐츠 영역
          {/* <div className="tab_item">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/800px-Red_Apple.jpg"
              alt=""
              style={{ width: 500 }}
            />
          </div>
          <div className="tab_item">
            <img
              src="https://cdn.sisajournal.com/news/photo/202105/216731_124666_4150.jpg"
              alt=""
              style={{ width: 500 }}
            />
          </div>
          <div className="tab_item">
            <img
              src="https://m.dyaga.com/web/product/big/20200207/52f33c96359d028cd59e7fac11ee5afb.jpg"
              alt=""
              style={{ width: 500 }}
            />
          </div>
          <div className="tab_item">
            <img
              src="https://www.dailysecu.com/news/photo/201906/53502_45794_3555.jpg"
              alt=""
              style={{ width: 500 }}
            />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Tab;
