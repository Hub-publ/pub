import Select from "react-select";
import Radio from "../../form/radio";
import Attachment from "../../form/attachment";

interface OptionType {
  label: string;
  value: string;
}

function StorybookDetailTable() {
  const handleChange = (selectedOption: OptionType | null) => {
    console.log(selectedOption);
  };
  return (
    <div className="table_wrap">
      <table className="detail">
        <colgroup>
          <col className="col_th" />
          <col />
          <col className="col_th" />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th>
              TH<span className="red_t">*</span>
            </th>
            <td colSpan={3}>
              <input type="text" placeholder="100자 이내" maxLength={100} />
            </td>
          </tr>
          <tr>
            <th>
              TH<span className="red_t">*</span>
            </th>
            <td>
              <Select
                placeholder="선택"
                options={[
                  { value: "Development", label: "개발팀" },
                  { value: "Plan", label: "기획팀" },
                  { value: "Design", label: "디자인팀" },
                  { value: "Publishing", label: "퍼블팀" },
                ]}
                onChange={handleChange}
              />
            </td>
            <th>
              TH<span className="red_t">*</span>
            </th>
            <td>
              <div className="form_wrap">
                <Radio id="radio_a1" name="radio_a" label="선택1" />
                <Radio id="radio_a2" name="radio_a" label="선택2" />
                <Radio id="radio_a3" name="radio_a" label="선택3" />
              </div>
            </td>
          </tr>
          <tr>
            <th>
              TH / TH<span className="red_t">*</span>
            </th>
            <td>홍길동 / 2024-11-14</td>
            <th>
              TH<span className="red_t">*</span>
            </th>
            <td>1,234,567</td>
          </tr>
          <tr>
            <th>
              TH<span className="red_t">*</span>
            </th>
            <td colSpan={3}>
              <textarea
                name=""
                id=""
                rows={5}
                placeholder="500자 이내"
                maxLength={500}
              />
            </td>
          </tr>
          <tr>
            <th>TH</th>
            <td colSpan={3}>
              <Attachment id="attach_01" maxText={10} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StorybookDetailTable;
