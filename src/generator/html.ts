export function toHtml(title: string, body: string): string {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <style>
          .lines {
            width: min-content;
            border: 1px black solid;
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
        </style>
    </head>
    <body>
        ${body}
    </body>
    </html>`;
}
