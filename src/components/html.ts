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
            
            .small {
              display: flex;
              flex-direction: row-reverse;
            }
            
            .small-line {
              margin-left: auto;
              margin-right: auto;
            }
            
            .small .grid {
              font-family: "中华书局宋体00平面";
              height: 1rem;
              width: 1rem;
              font-size: 0.8rem;
              line-height: 1rem;
            }
            
            .book {
              border: 1px solid;
              border-radius: 0.3rem;
              margin-top: -1px;
              margin-left: -1px;
            }
            
            .book:last-child {
              margin-bottom: -1px;
            }
            
            .book-half:first-child {
              border-left: 1px solid;
              border-right: 1px solid;
              border-bottom: 1px solid;
              border-bottom-left-radius: 0.3rem;
              border-bottom-right-radius: 0.3rem;
              margin-bottom: -1px;
              margin-left: -1px;
            }
            
            .book-half:last-child {
              border-top: 1px solid;
              border-left: 1px solid;
              border-right: 1px solid;
              border-top-left-radius: 0.3rem;
              border-top-right-radius: 0.3rem;
              margin-top: -1px;
              margin-left: -1px;
            }
            
            .book + div {
              margin-top: -1px;
            }
            
            .book + .book {
              margin-top: -1px;
              margin-bottom: -2px;
            }
            
            .book + .book-half {
              margin-top: -2px;
            }
            
            .book-half + .book {
              margin-top: -2px;
            }
            
            .line:first-child .small-line:first-child .book {
              margin-right: -1px;
            }
            
            .line:first-child .small-line:first-child .book-half {
              margin-right: -1px;
            }
          </style>
      </head>
      <body>
          ${body}
      </body>
      </html>`;
}
