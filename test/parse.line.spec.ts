import { expect, test } from "vitest";
import { parseLine } from "../src/parser/parse-line";
import { split } from "../src/parser/split-line";

test("parseLine", () => {
  const text = `// 0312.gj

  @312

  #  康熙字典
  
  ## 子集上
  
  ###   一部
  
  #一古文#弌【唐韻】【韻會】於悉切【集韻】【正韻】益悉切，𠀤漪入聲。 
  【說文】惟初大始，道立於一。造分天地，化成萬物。
  
  【廣韻】數之始也，物之極也。【易·繫辭】天一地二。【老子·道德經】道生
  一，一生二。　又【廣韻】同也。【禮·樂記】禮樂𠛬政，其極一也。【史記·儒
  
  林傳】韓生推詩之意，而爲內外傳數萬言，其語頗與齊魯閒殊，
  然其歸一也。　又少也。【顏延之·庭誥文】選書務一不尚煩密。【何
  
  承天·答顏永嘉書】竊願吾子舍兼而遵一也。　又【增韻】純也。【易·
  繫辭】天下之動貞夫一。【老子·道德經】天得一以淸，地得一以寧，
  
  神得一以靈，谷得一以盈，萬物得一以生，侯王得一以爲天下
  正。　又均也。【唐書·薛平傳】兵鎧完礪，徭賦均一。　又誠也。【中庸】
  
  
`;
  const lines = split(text);
  lines.forEach((line, i) => {
    console.log("\n" + i + ":");
    console.log(line);
    console.log(parseLine(line));
  });
});
