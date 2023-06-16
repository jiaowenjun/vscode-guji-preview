export function toHtml({ title, body }: { title: string; body: string }) {
  return `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${title}</title>
          <style>
          html {
            font-size: 25px;
          }

          .lines {
            width: min-content;
            border: 1px solid;
            display: flex;
            flex-direction: row-reverse;
          }
    
          .grid {
            box-sizing: border-box;
            text-align: center;
          }
    
          .large .grid {
            font-family: "康熙傳承版 KangXiZiDian.com";
            height: 2rem;
            width: 2rem;
            font-size: 1.8rem;
            line-height: 2rem;
          }
    
          .large-circle {
            box-sizing: border-box;
            height: 2rem;
            width: 2rem;
            display: flex;
          }
    
          .large-circle .grid {
            font-family: "康熙傳承版 KangXiZiDian.com";
            height: 1.7rem;
            width: 1.7rem;
            margin: auto;
            font-size: 1.5rem;
            line-height: 1.7rem;
            border: 1px solid;
            border-radius: 50%;
          }
    
          .small {
            display: flex;
            flex-direction: row-reverse;
          }
    
          .small-line {
            margin-left: auto;
            margin-right: auto;
          }
    
          .small .grid {
            font-family: "中华书局宋体00平面","中华书局宋体02平面","中华书局宋体15平面";
            height: 1rem;
            width: 1rem;
            font-size: 0.8rem;
            line-height: 1rem;
          }
    
          .book {
            border: 1px solid;
            border-radius: 0.3rem;
            margin-top: -1px;
            margin-bottom: -1px;
            margin-left: -1px;
          }
    
          .line:first-child .small-line:first-child .book {
            margin-right: -1px;
          }
    
          .book:has(+ .book) {
            border-bottom: 0;
          }
    
          .book-start {
            border-bottom: 0;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            margin-bottom: 0;
          }
    
          .book-end {
            border-top: 0;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            margin-top: 0;
          }
    
          .book-middle {
            border-top: 0;
            border-top-left-radius: 0.2rem;
            border-top-right-radius: 0.2rem;
            margin-top: 0;
            border-bottom: 0;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            margin-bottom: 0;
          }
          </style>
      </head>
      <body>
          ${body}
      </body>
      </html>`;
}
