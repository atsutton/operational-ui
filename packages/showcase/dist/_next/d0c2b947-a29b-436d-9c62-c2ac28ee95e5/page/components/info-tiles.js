
          window.__NEXT_REGISTER_PAGE('/components/info-tiles', function() {
            var comp = module.exports=webpackJsonp([33],{1576:function(e,n,t){e.exports=t(1577)},1577:function(e,n,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var o=t(1),i=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}(o),a=t(9),r=t(29),c=l(r),s=t(13),d=l(s),f=t(28),u=l(f),p=[{name:"label",description:"What is the key in the key-value pairing? This is the description of the statistic itself.",defaultValue:"",type:"string",optional:!1},{name:"color",description:"See above. A stat can have its own background color. This can be a hex code, or a named color from your theme.",defaultValue:"white",type:"string",optional:!0},{name:"icon",description:"React Feather icon name. See `Icon` component.",defaultValue:"",type:"string",optional:!0},{name:"onAction",description:"Method triggered when the top-right action icon is clicked. If not specified, the icon is not rendered at all.",defaultValue:"",type:"function",optional:!0}];n.default=function(e){return i.createElement(d.default,{pathname:e.url.pathname},i.createElement(a.Card,null,i.createElement("p",null,"InfoTiles are little pieces of information that contain a descriptor and a value of the descriptor. These elements are commonly used to represent KPI data, with strong key-value pairings."),i.createElement("div",{style:{display:"flex"}},i.createElement(a.InfoTile,{label:"Components"},"200,000"),i.createElement(a.InfoTile,{label:"Reusability"},"High"),i.createElement(a.InfoTile,{label:"Potential Added Value"},"€2M")),i.createElement(a.Heading2Type,null,"Usage"),i.createElement(c.default,{snippet:String('\n<div>\n  <InfoTile\n    color="info"\n    label="Use Cases"\n    icon="AlertCircle"\n    onAction={() => {\n      alert("Oh hello!")\n    }}\n  >\n    Infinite\n  </InfoTile>\n  <InfoTile label="Potential">Unlimited</InfoTile>\n  <InfoTile color="info" label="Cool Factor">\n    > 10\n  </InfoTile>\n</div>\n'),components:{InfoTile:a.InfoTile}}),i.createElement(a.Heading2Type,null,"Props"),i.createElement(u.default,{props:p})))}}},[1576]);
            return { page: comp.default }
          })
        