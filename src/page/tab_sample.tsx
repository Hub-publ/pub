import Container from "../component/layout/container";
import Header from "../component/layout/header";
import Select from "react-select";
import Switch from "../component/form/switch";
import Checkbox from "../component/form/checkbox";
import Radio from "../component/form/radio";
import SearchInput from "../component/form/search_input";
import Tab from "../component/tab/tab";

interface OptionType {
  label: string;
  value: string;
}

function TabSample() {
  const handleChange = (selectedOption: OptionType | null) => {
    console.log(selectedOption);
  };
  return (
    <>
      <Header />
      <Container className="index_page">
        <div className="search_area">
          <ul>
            <li>
              <p className="label">input</p>
              <input type="text" placeholder="placeholder" />
            </li>
            <li>
              <p className="label">input disabled</p>
              <input type="text" disabled />
            </li>
            <li>
              <p className="label">search input</p>
              <SearchInput />
            </li>
            <li>
              <p className="label">select</p>
              <Select
                options={[
                  { value: "chocolate", label: "Chocolate" },
                  { value: "strawberry", label: "Strawberry" },
                  { value: "vanilla", label: "Vanilla" },
                ]}
                onChange={handleChange}
              />
            </li>
            <li>
              <p className="label">select disabled</p>
              <Select
                options={[
                  { value: "Almond", label: "Almond" },
                  { value: "Peanut", label: "Peanut" },
                  { value: "Macadamia", label: "Macadamia" },
                ]}
                value={{ value: "Almond", label: "Almond" }}
                onChange={handleChange}
                isDisabled
              />
            </li>
            <li>
              <p className="label">switch</p>
              <Switch id="switch" />
            </li>
            <li>
              <p className="label">checkbox</p>
              <div className="form_wrap">
                <Checkbox id="checkbox1" label="체크박스1" />
                <Checkbox id="checkbox2" label="체크박스2" />
                <Checkbox id="checkbox3" label="체크박스3" />
              </div>
            </li>
            <li>
              <p className="label">radio</p>
              <div className="form_wrap">
                <Radio id="radio1" name="radio" label="라디오1" />
                <Radio id="radio2" name="radio" label="라디오2" />
                <Radio id="radio3" name="radio" label="라디오3" />
              </div>
            </li>
          </ul>
        </div>
        <div className="contents_wrap">
          <div className="area">
            <Tab text={["빨간색", "노란색", "주황색", "초록색"]}>
              <div className="tab_item">
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
              </div>
              {/* <div>탭1 내용</div>
              <div>탭2 내용</div>
              <div>탭3 내용</div> */}
            </Tab>
          </div>
        </div>
      </Container>
    </>
  );
}

export default TabSample;
