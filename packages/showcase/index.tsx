import "react-hot-loader/patch"
import * as React from "react"
import * as ReactDOM from "react-dom"
import glamorous, { ThemeProvider } from "glamorous"
import { AppContainer } from "react-hot-loader"

import App from "./src/App"

const render = (Component: React.ComponentType) => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.querySelector("#app"),
  )
  return true
}

render(App)

if (module.hot) {
  module.hot.accept("./src/App", () => {
    const NextAppContainer = require("./src/App")
    render(NextAppContainer)
  })
}
