import React from 'react';
//<link rel="shortcut icon" href={favicon} />

const inlinedStyles = require('!raw-loader!../public/styles.css');

export default class HTML extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <link rel="stylesheet" type="text/css" href="styles.css">
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          {this.props.headComponents}
          <title>Len Smith</title>
          {css}
        </head>

        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
