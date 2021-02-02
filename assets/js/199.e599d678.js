(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{870:function(t,s,a){"use strict";a.r(s);var n=a(26),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"使用-sroll-snap-type-优化滚动"}},[t._v("使用 sroll-snap-type 优化滚动")]),t._v(" "),a("p",[a("code",[t._v("scroll-snap-type")]),t._v("：属性定义在滚动容器中的一个临时点（snap point）如何被严格的执行。")]),t._v(" "),a("p",[t._v("语法:")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("scroll-snap-type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none | [ x | y | block | inline | both ] [ mandatory | proximity ]?\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("举个例子，假设，我们希望一个横向可滚动容器，每次滚动之后，子元素最终的停留位置不是尴尬的被分割，而是完整的呈现在容器内，可以这样写：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("3"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("ul")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("scroll-snap-type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" x mandatory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("li")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("scroll-snap-align")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("上面 "),a("code",[t._v("scroll-snap-type: x mandatory")]),t._v(" 中，x 表示捕捉 x 轴方向上的滚动，"),a("code",[t._v("mandatory")]),t._v(" 表示强制将滚动结束后元素的停留位置设置到我们规定的地方。")]),t._v(" "),a("p",[t._v("添加了 "),a("code",[t._v("scroll-snap-")]),t._v(" 之后：")]),t._v(" "),a("scrollSnapType-x"),t._v(" "),a("p",[t._v("如果是 y 轴方向的滚动也是一样的，只需要简单改一下 "),a("code",[t._v("scroll-snap-type：")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("ul")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("scroll-snap-type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" y mandatory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("scrollSnapType-y"),t._v(" "),a("h3",{attrs:{id:"scroll-snap-type-中的-mandatory-与-proximity"}},[a("code",[t._v("scroll-snap-type")]),t._v(" 中的 "),a("code",[t._v("mandatory")]),t._v(" 与 "),a("code",[t._v("proximity")])]),t._v(" "),a("p",[a("code",[t._v("scroll-snap-type")]),t._v("中的另外一个重点就是 "),a("code",[t._v("mandatory")]),t._v(" 与 "),a("code",[t._v("proximity")]),t._v("。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("mandatory: 通常在 CSS 代码中我们都会使用这个，"),a("code",[t._v("mandatory")]),t._v(" 的英文意思是强制性的，表示滚动结束后，滚动停止点一定会强制停在我们指定的地方。")])]),t._v(" "),a("li",[a("p",[t._v("proximity: 英文意思是接近、临近、大约，在这个属性中的意思是滚动结束后，滚动停止点可能就是滚动停止的地方，也可能会再进行额外移动，停在我们指定的地方。")])])]),t._v(" "),a("p",[t._v("也就是说，如上指定了 "),a("code",[t._v("scroll-snap-type")]),t._v(": "),a("code",[t._v("y proximity")]),t._v(" 的滚动容器，如果不额外设置 "),a("code",[t._v("scroll-snap-margin/scroll-snap-padding")]),t._v("，是有可能停在下面这样尴尬的位置：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/8554143/70125593-0f01fe00-16b2-11ea-9262-433595e0581d.png",alt:"示例"}})]),t._v(" "),a("h3",{attrs:{id:"scroll-snap-type-both-mandatory"}},[t._v("scroll-snap-type: both mandatory")]),t._v(" "),a("p",[t._v("当然，还有一种比较特殊的情况是，"),a("code",[t._v("scroll-snap-type: both mandatory")]),t._v("，表示横向与竖向的滚动，都会同时进行捕捉，也是可以的：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/8554143/70142517-5a2d0880-16d4-11ea-81fb-08fe0493e422.gif",alt:"示例"}})]),t._v(" "),a("h3",{attrs:{id:"scroll-snap-align"}},[t._v("scroll-snap-align")]),t._v(" "),a("blockquote",[a("p",[t._v("使用 "),a("code",[t._v("scroll-snap-align")]),t._v(" 可以简单的控制将要聚焦的当前滚动子元素在滚动方向上相对于父容器的对齐方式。")])]),t._v(" "),a("p",[t._v("其需要作用在父元素上，可选值有三个：")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("scroll-snap-align")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" start | center | end"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/8554143/70130027-c13dc380-16ba-11ea-878b-b90426fdbf81.gif",alt:"示例"}})]),t._v(" "),a("p",[t._v("可以类比单个元素在 "),a("code",[t._v("flexbox")]),t._v(" 里面的 "),a("code",[t._v("justify-content")]),t._v(" 属性的 flex-start | flex-end | center，规定当前元素在主轴上相对父容器的对齐方式去理解。")]),t._v(" "),a("p",[t._v("再看看实际的 Demo ，将 "),a("code",[t._v("scroll-snap-align")]),t._v("添加到滚动子容器上：")]),t._v(" "),a("h3",{attrs:{id:"scroll-snap-align-start"}},[t._v("scroll-snap-align: start")]),t._v(" "),a("blockquote",[a("p",[t._v("使当前聚焦的滚动子元素在滚动方向上相对于父容器顶部对齐。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/8554143/69909886-f806a600-143c-11ea-9935-2d77718ac9d4.gif",alt:"示例"}})]),t._v(" "),a("h3",{attrs:{id:"scroll-snap-align-center"}},[t._v("scroll-snap-align: center")]),t._v(" "),a("blockquote",[a("p",[t._v("使当前聚焦的滚动子元素在滚动方向上相对于父容器中心对齐。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/8554143/69909891-fd63f080-143c-11ea-8d1b-b7fd9c1e4384.gif",alt:"示例"}})]),t._v(" "),a("h3",{attrs:{id:"scroll-snap-align-end"}},[t._v("scroll-snap-align: end")]),t._v(" "),a("blockquote",[a("p",[t._v("使当前聚焦的滚动子元素在滚动方向上相对于父容器底部对齐。")])]),t._v(" "),a("h3",{attrs:{id:"不规则子元素滚动"}},[t._v("不规则子元素滚动")]),t._v(" "),a("p",[t._v("如果子元素大小不一，也能有非常好的表现，使用 "),a("code",[t._v("scroll-snap-align: center")]),t._v("，使得不规则子元素在每次滚动后居于容器中\n间：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/8554143/70142474-471a3880-16d4-11ea-8d0b-b6623049d376.gif",alt:"示例"}})]),t._v(" "),a("h3",{attrs:{id:"scroll-margin-scroll-padding"}},[t._v("scroll-margin / scroll-padding")]),t._v(" "),a("p",[t._v("上述的 "),a("code",[t._v("scroll-snap-align")]),t._v(" 很好用，可以控制滚动子元素与父容器的对齐方式。然而可选的值只有三个，有的时候我们希望进行一些更精细的控制时，可以使用 "),a("code",[t._v("scroll-margin")]),t._v(" 或者 "),a("code",[t._v("scroll-padding")])]),t._v(" "),a("p",[t._v("其中：")]),t._v(" "),a("ul",[a("li",[t._v("scroll-padding 是作用于滚动父容器，类似于盒子的 padding")]),t._v(" "),a("li",[t._v("scroll-margin 是作用于滚动子元素，每个子元素的 scroll-margin 可以设置为不一样的值，类似于盒子的 margin")])]),t._v(" "),a("p",[t._v("举个例子，在竖向滚动下，给滚动父容器添加一个 scroll-padding-top: 30px 等同于给每个子元素添加 ``scroll-margin-top: 30px`：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("snap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("3"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ...\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("我们希望滚动子元素在 "),a("code",[t._v("scroll-snap-align: start")]),t._v(" 的基础上，与容器顶部的距离为 30px：")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".snap")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow-x")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("scroll-snap-type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" y mandatory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("scroll-padding-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 30px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("li")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("scroll-snap-align")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("总结一下就是，"),a("code",[t._v("scroll-snap-align")]),t._v(" 可以对滚动之后的对齐方式进行简单控制，而配合 "),a("code",[t._v("scroll-margin / scroll-padding")]),t._v(" 则可以进行精确控制。")]),t._v(" "),a("h3",{attrs:{id:"实际应用，渐进增强"}},[t._v("实际应用，渐进增强")]),t._v(" "),a("p",[t._v("在实际应用中，应用在全屏滚动/广告banner上有很多用武之地：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/8554143/70144165-4f747280-16d8-11ea-9ed4-fbfe421ee908.gif",alt:"示例"}})])],1)}),[],!1,null,null,null);s.default=p.exports}}]);