#!/bin/sh

# Constants

COMP_ROOT="packages/components/src"
SHOWCASE_ROOT="packages/showcase/pages/components"

# Create component

touch $COMP_ROOT/$1.tsx

cat > $COMP_ROOT/$1.tsx << EOL
import * as React from "react"
import glamorous from "glamorous"
import { Theme } from "@operational/theme"

interface IProps {
  css?: {}
  className?: string
  value: string
  children?: React.ReactNode
}

const Container = glamorous.div(
  // Static styles
  {
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.1)"
    }
  },
  // Dynamic/theme-dependent styles
  ({ theme }: { theme: Theme }): {} => ({
    margin: theme.spacing * 2
  })
)

const Content = glamorous.div(
  // Static styles
  {
    color: 'green'
  }, ({ theme, active }: { theme: Theme, active: boolean }): {} => ({
  // Local prop-dependent styling (see active prop assignment in component definition below)
  backgroundColor: active ? theme.colors.palette.info : "green"
  })
)

export default (props: IProps) => (
  <Container css={props.css} className={props.className}>
    <Content active>{props.value}</Content>
  </Container>
)
EOL

# Create test file

touch $COMP_ROOT/__tests__/$1.test.tsx

cat > $COMP_ROOT/__tests__/$1.test.tsx << EOL
import * as React from "react"
import { render } from "enzyme"

import { $1 as Themeless$1 } from "../index"
import wrapDefaultTheme from "../../utils/wrap-default-theme"

const $1 = wrapDefaultTheme(Themeless$1)

describe("$1 Component", () => {
  it("Should render", () => {
    const renderedComponent = render(<$1 value="SomeValue" />)
    expect(renderedComponent).toMatchSnapshot()
  })
})
EOL

# Create showcase file

touch $SHOWCASE_ROOT/$1s.js

cat > $SHOWCASE_ROOT/$1s.js << EOL
import * as React from "react"
import { Card, Heading2Type, $1 } from "@operational/components"

import Table from "../../components/PropsTable"
import Playground from "../../components/Playground"
import Layout from "../../components/Layout"

const simpleSnippet = \`
<div>
  <$1 />
</div>
\`

const propDescription = [
  {
    name: "value",
    description: "",
    defaultValue: "",
    type: "string",
    optional: false
  }
]

export default props => (
  <Layout pathname={props.url.pathname}>
    <Card>
      <p>
        $1s are great components!
      </p>

      <Heading2Type>Usage</Heading2Type>
      <Playground snippet={simpleSnippet} components={{ $1 }} />

      <Heading2Type>Props</Heading2Type>
      <Table props={propDescription} />
    </Card>
  </Layout>
)
EOL

echo
echo "🎉 $1 component created!"
echo "A few things to do manually:"
echo "* import component into packages/components/src/index.ts + add to named exports"
echo "* add the page to the static page entries directory to packages/showcase/next.config.js"
echo "* rename packages/showcase/pages/$1.js to form a proper lowercase, dash-separated url fragment"
echo "* enjoy your new component!"
