import app from "./app";
import { initialize } from "./common/config";

// 待ち受け開始
app.listen(3000, () => {
  // サーバ起動
  initialize("./config");
});
