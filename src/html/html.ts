export function toHtml(title: string, body: string): string {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <style>
          html {
            font-size: 23px;
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
            height: 2rem;
            width: 2rem;
            font-size: 1.6rem;
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
            height: 1rem;
            width: 1rem;
            font-size: 0.8rem;
            line-height: 1rem;
          }
          
          .book {
            border: 1px solid;
            border-radius: 0.2rem;
            margin-top: -1px;
            margin-left: -1px;
            margin-right: -1px;
          }
          
          .book-half:first-child {
            border-left: 1px solid;
            border-right: 1px solid;
            border-bottom: 1px solid;
            border-bottom-left-radius: 0.2rem;
            border-bottom-right-radius: 0.2rem;
            margin-bottom: -1px;
            margin-left: -1px;
            margin-right: -1px;
          }
          
          .book-half:last-child {
            border-top: 1px solid;
            border-left: 1px solid;
            border-right: 1px solid;
            border-top-left-radius: 0.2rem;
            border-top-right-radius: 0.2rem;
            margin-top: -1px;
            margin-left: -1px;
            margin-right: -1px;
          }
          
          .book + div {
            margin-top: -1px;
          }
          
          .book + .book {
            margin-top: -2px;
          }
          
          .book + .book-half {
            margin-top: -2px;
          }
          
          .book-half + .book {
            margin-top: -2px;
          }
        </style>
    </head>
    <body>
        ${body}
    </body>
    </html>`;
}
