Context menus are nested menus that can expand from anywhere on a page. Their use is encouraged in the header and in the upper right corner of cards.

### Basic Usage

```jsx
import * as React from "react"
import { ContextMenu, ContextMenuProps } from "@operational/components"

const menuItems = [{ label: "Menu 1", onClick: () => alert("Menu 1 uses custom onClick function") }, "Menu 2", "Menu 3"]
;<ContextMenu items={menuItems} onClick={item => alert(`clicked ${item.label}`)}>
  <span>Click here</span>
</ContextMenu>
```

### Usage with Icon

```jsx
import * as React from "react"
import { ContextMenu, ContextMenuProps, Button, SearchIcon } from "@operational/components"

const menuItems = [{ label: "Menu 1", icon: SearchIcon }, "Menu 2", "Menu 3"]
;<>
  <ContextMenu items={menuItems} onClick={item => alert(`clicked ${item.label}`)}>
    <Button>Click here for icon on left</Button>
  </ContextMenu>
  <ContextMenu iconLocation="right" items={menuItems} onClick={item => alert(`clicked ${item.label}`)}>
    <Button color="primary">Click here for icon on right</Button>
  </ContextMenu>
</>
```

#### Condensed

```jsx
import * as React from "react"
import { ContextMenu, ContextMenuProps } from "@operational/components"

const menuItems = ["Menu 1", "Menu 2", "Menu 3"]
;<ContextMenu condensed items={menuItems} onClick={() => alert("clicked")}>
  <span>Click here</span>
</ContextMenu>
```

#### Styling based on open state

```jsx
import * as React from "react"
import { ContextMenu, ContextMenuProps } from "@operational/components"

const menuItems = ["Menu 1", "Menu 2", "Menu 3"]
;<ContextMenu condensed items={menuItems} onClick={() => alert("clicked")}>
  {isOpen => <span>{`I am ${isOpen ? "open" : "closed"}`}</span>}
</ContextMenu>
```

#### Usage with React Nodes as Labels

In some cases, you might want your `label` to be a little bit more clever than just a string. This example shows a `ContextMenu` with a JSX element as its `label`.

```jsx
import * as React from "react"
import { AddIcon, ContextMenu, ContextMenuProps, Contact, Hint, Button } from "@operational/components"

/* Anything can be a label now, even some DIV you style yourself */
const MyLabelContainer = ({ children, style }) => (
  <div style={{ marginRight: 8, padding: "8px 0", ...style }}>{children}</div>
)

const menuItems = [
  {
    label: (
      <MyLabelContainer>
        <Contact name="Tejas Kumar" meta="youare@cool.com" />
      </MyLabelContainer>
    ),
    icon: AddIcon,
  },
  {
    label: (
      <MyLabelContainer>
        <Contact name="Peter Szerzo" meta="peter@norway.com" />
      </MyLabelContainer>
    ),
    icon: (
      <div style={{ marginLeft: "auto" }}>
        <Hint right>User already exists</Hint>
      </div>
    ),
  },
  {
    label: (
      <MyLabelContainer>
        <Contact name="Sibelius Seraphini" meta="sibelius@seraphini.com" />
      </MyLabelContainer>
    ),
    icon: AddIcon,
  },
  {
    label: (
      <MyLabelContainer>
        <Contact
          name={`Arnold "Governator" Schwarzennegger`}
          meta="arnoldgovernatorschwarzennegger@thegovernmentofcalifornia.usa🇺🇸"
        />
      </MyLabelContainer>
    ),
    icon: AddIcon,
  },
]
;<>
  <ContextMenu iconLocation="right" items={menuItems} onClick={item => alert(`clicked`)}>
    <Button>See Users</Button>
  </ContextMenu>
</>
```

#### Large number of items

The context menu doesn't grow past a certain maximum height, but scrolls in its container instead.

```jsx
import * as React from "react"
import { ContextMenu, ContextMenuProps } from "@operational/components"

const menuItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(item => `Menu ${item}`)
;<ContextMenu condensed items={menuItems} onClick={() => alert("clicked")}>
  <div>Many options may be selected here</div>
</ContextMenu>
```
