import { BlockModel } from "../components/model";

type State = "normal" | "book" | "book-half" | "large" | "large-circle";
let state: State = "normal";

export function isChar(c: string) {
  return !c.match(/[#【】\n]/);
}

export function parseInline(line: string, idx: number) {
  let blocks: BlockModel[] = [];
  let frag = "";

  const consumeFrag = function () {
    if (frag.length > 0) {
      blocks.push({
        t: frag,
      });
      frag = "";
    }
  };

  const consumeBookFrag = function (half: boolean) {
    if (frag.length > 0) {
      blocks.push({
        t: frag,
        st: half ? "book-half" : "book",
      });
      frag = "";
    }
  };

  [...line].forEach((c) => {
    // * 转为空格
    if (c === "*") {
      c = " ";
    }

    switch (state) {
      // large状态
      case "large":
        if (c === "(") {
          state = "large-circle";
          break;
        }
        if (isChar(c)) {
          blocks.push({
            t: c,
            si: "large",
          });
        }
        // 消耗一个字符后恢复到 normal
        state = "normal";
        break;

      case "large-circle":
        if (isChar(c)) {
          blocks.push({
            t: c,
            si: "large",
            st: "circle",
          });
        }
        // 消耗一个字符后恢复到 normal
        state = "normal";
        break;

      // normal状态
      case "normal":
        // 进入 large 状态
        if (c === "#") {
          // 保存小字片段
          consumeFrag();
          state = "large";
        }
        // 进入 book 状态
        else if (c === "【") {
          // 保存小字片段
          consumeFrag();
          state = "book";
        }
        // 换行
        else if (c === "\n") {
          // 保存小字片段
          consumeFrag();
          // 加换行标记
          blocks.push({ st: "br" });
        }
        // book 后半部结束
        else if (c === "】") {
          // 保存小字片段
          consumeBookFrag(true);
        }
        // 普通字符，添加到小字片段
        else if (isChar(c)) {
          frag += c;
        }
        break;

      // book 状态
      case "book":
        // 书名结束
        if (c === "】") {
          // 保存书名
          consumeBookFrag(false);
          // 恢复到 normal 状态
          state = "normal";
        }
        // 换行
        else if (c === "\n") {
          // 保存前半书名
          consumeBookFrag(true);
          // 加换行标记
          blocks.push({ st: "br" });
          // 进入 book-half 状态
          state = "book-half";
        }
        // 普通字符，添加到书名片段
        else if (isChar(c)) {
          frag += c;
        } else {
          state = "normal";
        }
        break;
      // 后半书名
      case "book-half":
        // 书名结束
        if (c === "】") {
          // 保存书名
          consumeBookFrag(true);
          // 恢复到 normal 状态
          state = "normal";
        }
        // 普通字符，添加到书名片段
        else if (isChar(c)) {
          frag += c;
        } else {
          state = "normal";
        }
        break;
    }
  });

  if (state === "normal") {
    consumeFrag();
  } else if (state === "book") {
    consumeBookFrag(true);
    state = "book-half";
  }
  return blocks;
}
