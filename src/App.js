import React from "react";
import { List } from "./List";
import { Form } from "./Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "クリック前の表示",
      tab: 'list',
    }
  }
  changeDescription() {
    this.setState({
      description: "クリック後の表示です。"
    })
  }
  render() {
    const { tab, description } = this.state;
    return (
      <div>
        <header>
          <ul>
            <li
              onClick={() =>
                this.setState({tab: 'list'})}
            >
              リスト
            </li>
            <li
              onClick={() =>
                this.setState({tab: 'form'})}
            >
              フォーム
            </li>
          </ul>
        </header>
        <hr />
        { description }
        {
          tab === "list" ?
            <List title="取り扱い言語一覧" /> :
            <Form />
        }
        <button onClick={() => this.changeDescription()}>
          ボタン
        </button>
      </div>
    )
  }
}

export default App;
