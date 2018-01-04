
          window.__NEXT_REGISTER_PAGE('/components/cards', function() {
            var comp = module.exports=webpackJsonp([41],{1556:function(e,t,a){e.exports=a(1557)},1557:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(1),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(r),o=a(9),l=a(29),i=n(l),u=a(28),c=n(u),s=a(13),p=n(s),m=[{name:"width",description:"How wide would you like your card to be?",defaultValue:"100%",type:"number",optional:!0},{name:"padding",description:"How much space do we apply to the inside of the card?",defaultValue:"0",type:"number",optional:!0}];t.default=function(e){return d.createElement(p.default,{pathname:e.url.pathname},d.createElement(o.Card,null,d.createElement("p",null,"Cards are used to group and lay out content on the interface - in fact, non-scrolling interfaces with a number of cards laid out in a grid are the most common use-cases of this project."),d.createElement(o.Heading2Type,null,"Usage"),d.createElement("p",null,"Simply add any content inside the card."),d.createElement(i.default,{snippet:String('\n<Card padding={32} width={260}>\n  <p>Here is a bare card with custom padding.</p>\n  <img alt="Cat" src="https://images.unsplash.com/photo-1491485880348-85d48a9e5312?w=500" />\n</Card>\n'),components:{Card:o.Card,CardHeader:o.CardHeader}}),d.createElement(o.Heading2Type,null,"Card headers"),d.createElement("p",null,"Using a CardHeader component is the standard way to add a title element to the card. This may include not just the card title, but also navigation on the right-hand side."),d.createElement(i.default,{snippet:String('\n<Card width={260}>\n  <CardHeader>Title for my card</CardHeader>\n  <p>Here is a bare card with custom padding.</p>\n  <img alt="Cat" src="https://images.unsplash.com/photo-1491485880348-85d48a9e5312?w=500" />\n</Card>\n'),components:{Card:o.Card,CardHeader:o.CardHeader}}),d.createElement(o.Heading2Type,null,"Props"),d.createElement(c.default,{props:m})))}}},[1556]);
            return { page: comp.default }
          })
        