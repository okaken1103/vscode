let app = new Vue({
    el: '#app',             // 関連付けるDOM要素
    data: {
      msgs: ["おはよう", "こんばんは", "お元気ですか"],
      selectedMsg: "" // 選択されたメッセージを保持するデータ
    }
  });
  