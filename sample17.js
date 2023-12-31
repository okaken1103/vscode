class MessageH1 extends React.Component {
  // コンストラクター
  constructor() {
    super();
  }

  //　出力処理
  render() {
    // Reactオブジェクトで「<h1>おはよう</h1>」という新たな要素を作成
    let newElement = React.createElement(
      "h1",       // タグ名
      null,       // props（パラメーターの集合）
      "おはよう"   // 子の値
    );
    return newElement;
  }
}

class OkButton extends React.Component {
  // コンストラクター
  constructor(props) {
    super(props);
    // 状態を保持するプロパティstate
    this.state = { ok: false };
  }

  //　出力処理
  render() {
    if (this.state.ok) {
      return "OKが押されました（" + this.state.ok + ")";
    }
    return React.createElement(
      "button",
      { onClick: () => this.setState({ ok: true }) },
      "押してください"
    );
  }
}

class CountButton extends React.Component {
  // コンストラクター
  constructor(props) {
    super(props);
    // 状態を保持するプロパティstate
    this.state = { count: 100 };
  }

  // ボタンが押されたときの処理
  handleButtonClick = () => {
    // 現在のcountの値を取得
    let currentCount = this.state.count;

    // 新しいcountの値を計算（0の次は100に戻る）
    let newCount = currentCount === 0 ? 100 : currentCount - 1;

    // stateを更新して再描画
    this.setState({ count: newCount });
  };

  //　出力処理
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "button",
        { onClick: this.handleButtonClick },
        "カウント数：" + this.state.count
      )
    );
  }
}

// 表示される場所の要素とコンポーネントを結び付けて表示させる
const domContainer1 = document.querySelector("#app1");
const domContainer2 = document.querySelector("#app2");
const domContainer3 = document.querySelector("#app3");

// ReactDOMに出力処理を行う
ReactDOM.render(
  React.createElement(MessageH1),
  domContainer1
);

ReactDOM.render(
  React.createElement(OkButton),
  domContainer2
);

ReactDOM.render(
  React.createElement(CountButton),
  domContainer3
);
