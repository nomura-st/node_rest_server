import app from "./app.js";
import { initialize } from "./common/config.js";

// 待ち受け開始
app.listen(3000, () => {
  // サーバ起動
  initialize("./config");
});
