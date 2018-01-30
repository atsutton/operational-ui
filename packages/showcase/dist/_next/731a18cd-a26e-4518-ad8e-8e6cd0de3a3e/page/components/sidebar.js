
          window.__NEXT_REGISTER_PAGE('/components/sidebar', function() {
            var comp = module.exports=webpackJsonp([31],{1666:function(e,n,a){e.exports=a(1667)},1667:function(e,n,a){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=a(0),r=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n.default=e,n}(i),d=a(10),l=a(31),o=t(l),s=a(11),b=t(s),p=a(33),m=t(p),u={sidebarHeader:[{name:"label",description:"The label of the SidebarItem.",defaultValue:"",type:"string",optional:!1},{name:"open",description:"Is the item open or closed by default?",defaultValue:"false",type:"boolean",optional:!1},{name:"onToggle",description:"Called when the header's children are expanded or collapsed.",defaultValue:"-",type:"() => void",optional:!0}],sidebarItem:[{name:"onClick",description:"Click handler.",defaultValue:"",type:"() => void",optional:!0}]};n.default=function(e){return r.createElement(b.default,{pathname:e.url.pathname},r.createElement(d.Card,null,r.createElement("p",null,"The sidebar is a dynamic list-style navigational element with a large number of navigational elements and nested link structures in mind. This component involves composition of two types of elements, SidebarHeaders and SidebarItems, within the container Sidebar component."),r.createElement("p",null,"Both headers and items can be wrapped inside anchor tags or React Router-style links to give them hyperlink functionality, which is not included directly into the implementation."),r.createElement("h2",null,"Usage"),r.createElement("p",null,"A simple, purely presentational use looks like this:"),r.createElement(o.default,{snippet:'\n<Sidebar>\n  <SidebarHeader label="Links">\n    <SidebarItem onClick={() => {alert("Hello!")}}>Link 1</SidebarItem>\n    <SidebarItem>Link 2</SidebarItem>\n  </SidebarHeader>\n  <SidebarHeader label="Links 2" open>\n    <SidebarItem active>Link 3</SidebarItem>\n    <SidebarItem>Link 4</SidebarItem>\n  </SidebarHeader>\n</Sidebar>\n',components:{Sidebar:d.Sidebar,SidebarHeader:d.SidebarHeader,SidebarItem:d.SidebarItem}}),r.createElement("p",null,"The following snippet shows interactivity and deeper nesting:"),r.createElement(o.default,{snippet:'\n(() => {\nclass StatefulSidebar extends React.Component {\n  state = {\n    isOpen: false\n  }\n  render() {\n    return (\n      <Sidebar>\n        <SidebarHeader\n          label="Links"\n          open={this.state.isOpen}\n          onToggle={() => {\n            this.setState(prevState => ({\n              isOpen: !prevState.isOpen\n            }))\n          }}\n        >\n          <SidebarItem onClick={() => {alert("Hello!")}}>Link 1</SidebarItem>\n          <SidebarItem>Link 2</SidebarItem>\n        </SidebarHeader>\n        <SidebarHeader label="Links 2" open>\n          <SidebarHeader label="Links 2 2" open>\n            <SidebarItem>Link 3</SidebarItem>\n          </SidebarHeader>\n          <SidebarItem>Link 4</SidebarItem>\n        </SidebarHeader>\n      </Sidebar>\n    )\n  }\n}\n\nreturn <StatefulSidebar/>\n})()\n',components:{Sidebar:d.Sidebar,SidebarHeader:d.SidebarHeader,SidebarItem:d.SidebarItem}}),r.createElement("h2",null,"SidebarHeader"),r.createElement("p",null,"A header defines an expandable group of SidebarItems, or additional sidebar headers, if a deeper nesting is required."),r.createElement(m.default,{props:u.sidebarHeader}),r.createElement("h2",null,"SidebarItem"),r.createElement("p",null,"A sidebar item can be thought of as a leaf node."),r.createElement(m.default,{props:u.sidebarItem})))}}},[1666]);
            return { page: comp.default }
          })
        