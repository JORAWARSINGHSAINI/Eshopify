(this.webpackJsonpeshopify=this.webpackJsonpeshopify||[]).push([[0],{305:function(e,t,a){e.exports=a(512)},310:function(e,t,a){},311:function(e,t,a){},512:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(11),o=a.n(i),l=(a(310),a(311),a(14)),c=a(17),s=a(24),u=a(25),m=a(27),d=a(26),p=a(6),h=a.n(p);a(205),a(513),a(316);h.a.initializeApp({apiKey:"AIzaSyAMJDfRz0ENi8zXEXWpvOPMHC5Qzxt81wI",authDomain:"eshopify-9a78b.firebaseapp.com",databaseURL:"https://eshopify-9a78b.firebaseio.com",projectId:"eshopify-9a78b",storageBucket:"eshopify-9a78b.appspot.com",messagingSenderId:"401660446117",appId:"1:401660446117:web:1b52adaa5a50b1d87a944c",measurementId:"G-74QTTR2TGW"});h.a.storage();var E=h.a,f=a(275),g=a.n(f),b=a(13),y=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).state={uiConfig:{callbacks:{signInSuccessWithAuthResult:function(e,t){return!0},uiShown:function(){document.getElementById("loader").style.display="none"}},signInFlow:"popup",signInSuccessUrl:"/Eshopify",signInOptions:[E.auth.GoogleAuthProvider.PROVIDER_ID,E.auth.FacebookAuthProvider.PROVIDER_ID,E.auth.TwitterAuthProvider.PROVIDER_ID,E.auth.GithubAuthProvider.PROVIDER_ID,E.auth.EmailAuthProvider.PROVIDER_ID,E.auth.PhoneAuthProvider.PROVIDER_ID],tosUrl:"/service",privacyPolicyUrl:"/policy"}},r}return Object(u.a)(a,[{key:"render",value:function(){return this.props.uid?n.a.createElement(c.a,{to:"/Eshopify"}):n.a.createElement("div",null,n.a.createElement(g.a,{uiConfig:this.state.uiConfig,firebaseAuth:E.auth()}),n.a.createElement("div",{id:"loader"},"Loading..."))}}]),a}(r.Component),v=Object(b.b)((function(e){return{uid:e.firebase.auth.uid}}))(y),O=a(578),j=a(292),C=a(52),w=a(580),k=a(51),x=a(31),N=a(570),W=a(572),D=a(575),P=a(574),T=a(576),F=a(569),I=a(84),B=a.n(I),A=a(602),R=a(595);function S(e){return n.a.createElement(R.a,Object.assign({elevation:6,variant:"filled"},e))}var L=Object(N.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function _(e){var t=e.open,a=e.handleClose,r=e.title,i=e.color,o=L(),l=i?n.a.createElement(S,{severity:"success"},r," Added to Wishlist"):n.a.createElement(S,{severity:"error"},r," Removed from  Wishlist");return n.a.createElement("div",{className:o.root},n.a.createElement(A.a,{open:t,autoHideDuration:2e3,onClose:a},l))}var z=a(573),U=a(577),q=Object(N.a)((function(e){return{root:Object(x.a)({marginBottom:30,maxWidth:350,height:350,backgroundColor:"#f4f4f2"},"marginBottom",40),media:{height:100,paddingTop:"56.25%"}}}));var H=Object(b.b)(null,(function(e){return{addtoWishlist:function(t,a){return e(function(e,t){return function(a,r,n){n.getFirebase;var i=(0,n.getFirestore)();i.collection("wishlist").doc(t).set({product:i.FieldValue.arrayUnion(e)},{merge:!0}).then((function(){return a({type:"Wishlist_Added"})})).catch((function(e){return a({type:"Wishlist_Error",err:e})}))}}(t,a))},removefromWishlist:function(t,a){return e(function(e,t){return function(a,r,n){n.getFirebase;var i=(0,n.getFirestore)();i.collection("wishlist").doc(t).set({product:i.FieldValue.arrayRemove(e)},{merge:!0}).then((function(){return a({type:"Wishlist_Added"})})).catch((function(e){return a({type:"Wishlist_Error",err:e})}))}}(t,a))},addToCart:function(t,a){return e(function(e,t){return function(a,r,n){n.getFirebase;var i=(0,n.getFirestore)();i.collection("cart").doc(t).set({product:i.FieldValue.arrayUnion(e)},{merge:!0}).then((function(){return a({type:"Wishlist_Added"})})).catch((function(e){return a({type:"Wishlist_Error",err:e})}))}}(t,a))}}}))((function(e){var t=e.product,a=e.addtoWishlist,r=e.removefromWishlist,i=e.uid,o=e.addToCart,l=e.isWishlisted,c=q(),s=n.a.useState(!1),u=Object(k.a)(s,2),m=u[0],d=u[1],p=n.a.useState(!1),h=Object(k.a)(p,2),E=h[0],f=h[1],g=function(e,t){"clickaway"!==t&&(d(!1),f(!1))};return n.a.createElement(W.a,{className:c.root},n.a.createElement(z.a,null,n.a.createElement(P.a,{className:c.media,image:t.link?t.link:"image.jpg",title:t.title}),n.a.createElement(D.a,{title:t.title})),n.a.createElement(T.a,{disableSpacing:!0},n.a.createElement(F.a,{"aria-label":"add to favorites",color:l?"primary":"default",onClick:function(){!0===l?r(t,i):a(t,i),d(!0)}},n.a.createElement(B.a,null)),n.a.createElement(U.a,{color:"secondary",variant:"contained",size:"large",style:{margin:15,marginLeft:200,padding:10},onClick:function(){f(!0),o(t,i)}},"  ",t.price)),n.a.createElement(_,{open:m,handleClose:g,title:t.title,variant:"contained",color:l}),n.a.createElement(_,{open:E,handleClose:g,title:t.title,variant:"contained",color:"default"}))})),V=a(23),M=a(19),G=a(579),X=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;if(!this.props.uid)return n.a.createElement(c.a,{to:"/Eshopify/signin"});var t=n.a.createElement(O.a,{item:!0},n.a.createElement(G.a,{animation:"wave",variant:"text",width:380,height:40}),n.a.createElement(G.a,{animation:!1,variant:"rect",width:380,height:368}));if(!this.props.laptops||!this.props.mobiles||!this.props.accessories)return n.a.createElement(O.a,{container:!0,spacing:3,style:{marginTop:60}},t,t,t,t,t,t,t,t,t,t);var a=["Laptops","Mobiles","Accessories"].map((function(t,a){return n.a.createElement("div",{key:a,style:{marginBottom:30,marginLeft:10,marginRight:10}},n.a.createElement(j.a,{elevation:3,style:{padding:15,marginBottom:20,paddingLeft:30,backgroundColor:"#393e46",opacity:.8}},n.a.createElement(C.a,{variant:"body1",color:"primary",align:"left"},t)),n.a.createElement(O.a,{container:!0,style:{marginTop:10}},e.props[t.toLowerCase()].map((function(t,a){var r=e.props.wishlist&&e.props.wishlist[0]?e.props.wishlist[0].product.filter((function(e){return e.id===t.id})):0,i=!(!r||1!==r.length);return n.a.createElement(O.a,{key:a,item:!0,lg:3,sm:12,xs:12,md:6},n.a.createElement(H,{product:t,uid:e.props.uid,isWishlisted:i}))}))),n.a.createElement(w.a,null))}));return n.a.createElement("div",null,a)}}]),a}(r.Component),Y=Object(M.d)(Object(b.b)((function(e){return{laptops:e.firestore.ordered.laptops?e.firestore.ordered.laptops:null,mobiles:e.firestore.ordered.mobiles?e.firestore.ordered.mobiles:null,accessories:e.firestore.ordered.accessories?e.firestore.ordered.accessories:null,uid:e.firebase.auth.uid,wishlist:e.firestore.ordered.wishlist?e.firestore.ordered.wishlist.filter((function(t){return t.id===e.firebase.auth.uid})):null}})),Object(V.firestoreConnect)([{collection:"laptops"},{collection:"mobiles"},{collection:"accessories"},{collection:"wishlist"}]))(X),J=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,"Detailsss")}}]),a}(r.Component),K=a(604),Q=a(587),Z=a(601),$=a(88),ee=a(597),te=a(584),ae=a(599);function re(e){var t=e.address,a=e.changeAddress,r=function(e){a(Object($.a)(Object($.a)({},t),{},Object(x.a)({},e.target.name,e.target.value)))};return n.a.createElement(n.a.Fragment,null,n.a.createElement(C.a,{variant:"h6",gutterBottom:!0},"Shipping address"),n.a.createElement(O.a,{container:!0,spacing:3},n.a.createElement(O.a,{item:!0,xs:12,sm:6},n.a.createElement(ee.a,{required:!0,name:"firstName",label:"First name",fullWidth:!0,onChange:r,value:t.firstName})),n.a.createElement(O.a,{item:!0,xs:12,sm:6},n.a.createElement(ee.a,{required:!0,id:"lastName",name:"lastName",label:"Last name",fullWidth:!0,onChange:r,value:t.lastName})),n.a.createElement(O.a,{item:!0,xs:12},n.a.createElement(ee.a,{required:!0,id:"address1",name:"address1",label:"Address line 1",fullWidth:!0,value:t.address1,onChange:r})),n.a.createElement(O.a,{item:!0,xs:12},n.a.createElement(ee.a,{id:"address2",name:"address2",label:"Address line 2",fullWidth:!0,autoComplete:"billing address-line2",value:t.address2,onChange:r})),n.a.createElement(O.a,{item:!0,xs:12,sm:6},n.a.createElement(ee.a,{required:!0,id:"city",name:"city",label:"City",fullWidth:!0,autoComplete:"billing address-level2",onChange:r,value:t.city})),n.a.createElement(O.a,{item:!0,xs:12,sm:6},n.a.createElement(ee.a,{id:"state",name:"state",label:"State/Province/Region",fullWidth:!0})),n.a.createElement(O.a,{item:!0,xs:12,sm:6},n.a.createElement(ee.a,{required:!0,id:"zip",name:"zip",label:"Zip / Postal code",fullWidth:!0,autoComplete:"billing postal-code",onChange:r,value:t.zip})),n.a.createElement(O.a,{item:!0,xs:12,sm:6},n.a.createElement(ee.a,{required:!0,id:"country",name:"country",label:"Country",fullWidth:!0,autoComplete:"billing country",onChange:r,value:t.country})),n.a.createElement(O.a,{item:!0,xs:12},n.a.createElement(te.a,{control:n.a.createElement(ae.a,{color:"secondary",name:"saveAddress",value:"yes"}),label:"Use this address for payment details"}))))}function ne(e){var t=e.cardDetails,a=e.changecardDetails,r=function(e){a(Object($.a)(Object($.a)({},t),{},Object(x.a)({},e.target.name,e.target.value)))};return n.a.createElement(n.a.Fragment,null,n.a.createElement(C.a,{variant:"h6",gutterBottom:!0},"Payment method"),n.a.createElement(O.a,{container:!0,spacing:3},n.a.createElement(O.a,{item:!0,xs:12,md:6},n.a.createElement(ee.a,{required:!0,id:"cardName",name:"cardName",value:t.cardName,label:"Name on card",fullWidth:!0,onChange:r})),n.a.createElement(O.a,{item:!0,xs:12,md:6},n.a.createElement(ee.a,{required:!0,id:"cardNumber",name:"cardNumber",label:"Card number",value:t.cardNumber,fullWidth:!0,onChange:r})),n.a.createElement(O.a,{item:!0,xs:12,md:6},n.a.createElement(ee.a,{required:!0,id:"expDate",name:"expDate",label:"Expiry date",value:t.expDate,fullWidth:!0,onChange:r})),n.a.createElement(O.a,{item:!0,xs:12,md:6},n.a.createElement(ee.a,{label:"CVV",helperText:"Last three digits on signature strip",fullWidth:!0,name:"cvv",onChange:r})),n.a.createElement(O.a,{item:!0,xs:12},n.a.createElement(te.a,{control:n.a.createElement(ae.a,{color:"secondary",name:"saveCard",value:"yes"}),label:"Remember credit card details for next time"}))))}var ie=a(583),oe=a(514),le=a(585),ce=Object(N.a)((function(e){return{listItem:{padding:e.spacing(1,0)},total:{fontWeight:700},title:{marginTop:e.spacing(2)}}}));function se(e){var t=e.cardDetails,a=e.address,r=e.cart,i=ce(),o=[a.address1,a.city,a.zip,a.country],l=[{name:"Card type",detail:t.cardNumber.substr(0,5)+"XXXX"},{name:"Card holder",detail:t.cardName},{name:"Card number",detail:t.cardNumber},{name:"Expiry date",detail:t.expDate}],c=r[0].product;console.log(c);var s=0;return c.forEach((function(e){s+=parseFloat(e.price)})),n.a.createElement(n.a.Fragment,null,n.a.createElement(C.a,{variant:"h6",gutterBottom:!0},"Order summary"),n.a.createElement(ie.a,{disablePadding:!0},c.map((function(e){return n.a.createElement(oe.a,{className:i.listItem,key:e.id},n.a.createElement(le.a,{primary:e.title,secondary:e.Brand}),n.a.createElement(C.a,{variant:"body2"},e.price))})),n.a.createElement(oe.a,{className:i.listItem},n.a.createElement(le.a,{primary:"Total"}),n.a.createElement(C.a,{variant:"subtitle1",className:i.total},s))),n.a.createElement(O.a,{container:!0,spacing:2},n.a.createElement(O.a,{item:!0,xs:12,sm:6},n.a.createElement(C.a,{variant:"h6",gutterBottom:!0,className:i.title},"Shipping"),n.a.createElement(C.a,{gutterBottom:!0},a.firstName," ",a.lastName),n.a.createElement(C.a,{gutterBottom:!0},o.join(", "))),n.a.createElement(O.a,{item:!0,container:!0,direction:"column",xs:12,sm:6},n.a.createElement(C.a,{variant:"h6",gutterBottom:!0,className:i.title},"Payment details"),n.a.createElement(O.a,{container:!0},l.map((function(e){return n.a.createElement(n.a.Fragment,{key:e.name},n.a.createElement(O.a,{item:!0,xs:6},n.a.createElement(C.a,{gutterBottom:!0},e.name)),n.a.createElement(O.a,{item:!0,xs:6},n.a.createElement(C.a,{gutterBottom:!0},e.detail)))}))))))}var ue=a(586),me=Object(N.a)((function(e){return{appBar:{position:"relative"},layout:Object(x.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:Object(x.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)}}})),de=["Shipping address","Payment details","Review your order"];var pe=Object(M.d)(Object(b.b)((function(e){return{uid:e.firebase.auth.uid,cart:e.firestore.ordered.cart?e.firestore.ordered.cart.filter((function(t){return t.id===e.firebase.auth.uid})):null}}),(function(e){return{addToOrder:function(t,a){return e(function(e,t){return function(a,r,n){n.getFirebase;var i=(0,n.getFirestore)();i.collection("orders").doc(t).set({product:i.FieldValue.arrayUnion(e)},{merge:!0}).then((function(){return a({type:"Wishlist_Added"})})).catch((function(e){return a({type:"Wishlist_Error",err:e})}))}}(t,a))}}})),Object(V.firestoreConnect)([{collection:"cart"}]))((function(e){var t=e.cart,a=e.addToOrder,r=e.uid,i=me(),o=n.a.useState(0),l=Object(k.a)(o,2),c=l[0],s=l[1],u=n.a.useState({firstName:"",lastName:"",address1:"",address2:"",city:"",zip:"",country:""}),m=Object(k.a)(u,2),d=m[0],p=m[1],h=n.a.useState({cardName:"",cardNumber:"",expDate:"",cvv:""}),E=Object(k.a)(h,2),f=E[0],g=E[1];return t?0===t.length||0===t[0].product.length?n.a.createElement("div",null,"Empty Cart"):n.a.createElement(n.a.Fragment,null,n.a.createElement(w.a,null),n.a.createElement("main",{className:i.layout},n.a.createElement(j.a,{className:i.paper},n.a.createElement(C.a,{component:"h1",variant:"h4",align:"center"},"Checkout"),n.a.createElement(K.a,{activeStep:c,className:i.stepper},de.map((function(e){return n.a.createElement(Q.a,{key:e},n.a.createElement(Z.a,null,e))}))),n.a.createElement(n.a.Fragment,null,c===de.length?n.a.createElement(n.a.Fragment,null,n.a.createElement(C.a,{variant:"h5",gutterBottom:!0},"Thank you for your order."),n.a.createElement(C.a,{variant:"subtitle1"},"Your order number is #",Math.round(1e6*Math.random()),". We have emailed your order confirmation, and will send you an update when your order has shipped.")):n.a.createElement(n.a.Fragment,null,function(e,t,a,r,i,o){switch(e){case 0:return n.a.createElement(re,{changeAddress:r,address:t});case 1:return n.a.createElement(ne,{cardDetails:a,changecardDetails:i});case 2:return n.a.createElement(se,{address:t,cardDetails:a,cart:o});default:throw new Error("Unknown step")}}(c,d,f,p,g,t),n.a.createElement("div",{className:i.buttons},0!==c&&n.a.createElement(U.a,{onClick:function(){s(c-1)},className:i.button},"Back"),n.a.createElement(U.a,{variant:"contained",color:"primary",onClick:function(){2===c&&t[0].product.map((function(e){return a(e,r)})),s(c+1)},className:i.button},c===de.length-1?"Place order":"Next"))))))):n.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",paddingTop:"220px"}},n.a.createElement(ue.a,{color:"secondary"}))})),he=a(591),Ee=a(592),fe=a(286),ge=a.n(fe),be=a(287),ye=a.n(be),ve=a(588),Oe=a(290),je=a(600),Ce=a(590),we=a(589),ke=a(281),xe=a.n(ke),Ne=a(142),We=a.n(Ne),De=a(141),Pe=a.n(De),Te=a(283),Fe=a.n(Te),Ie=a(282),Be=a.n(Ie),Ae=Object(N.a)({list:{width:250},fullList:{width:"auto",paddingTop:20}});function Re(e){var t=e.open,a=e.toggleDrawer,r=Ae(),i=n.a.createElement("div",{className:r.list,role:"presentation",onClick:a(!1),onKeyDown:a(!1)},n.a.createElement(ie.a,{className:r.fullList},n.a.createElement(ve.a,null,n.a.createElement(we.a,null,n.a.createElement(xe.a,null)),n.a.createElement(l.b,{to:"/Eshopify/category/Laptops",style:{textDecoration:"none",color:"black"}},"Laptops")),n.a.createElement(ve.a,null,n.a.createElement(we.a,null,n.a.createElement(Be.a,null)),n.a.createElement(l.b,{to:"/Eshopify/category/Mobiles",style:{textDecoration:"none",color:"black"}},"Mobiles")),n.a.createElement(ve.a,null,n.a.createElement(we.a,null,n.a.createElement(Fe.a,null)),n.a.createElement(l.b,{to:"/Eshopify/category/Accessories",style:{textDecoration:"none",color:"black"}},"Accessories"))),n.a.createElement(Ce.a,null),n.a.createElement(ie.a,null,n.a.createElement(ve.a,null,n.a.createElement(we.a,null,n.a.createElement(Pe.a,null))," ",n.a.createElement(l.b,{to:"/Eshopify/cart",style:{textDecoration:"none",color:"black"}},"Your Cart")),n.a.createElement(ve.a,null,n.a.createElement(we.a,null,n.a.createElement(B.a,null)),n.a.createElement(l.b,{to:"/Eshopify/wishlist",style:{textDecoration:"none",color:"black"}},"Wishlist")),n.a.createElement(ve.a,null,n.a.createElement(we.a,null,n.a.createElement(We.a,null)),n.a.createElement(l.b,{to:"/Eshopify/orders",style:{textDecoration:"none",color:"black"}},"Orders"))));return n.a.createElement("div",null,n.a.createElement(n.a.Fragment,null,n.a.createElement(je.a,{open:t,anchor:"left",onClose:a(!1)},i)))}var Se=a(284),Le=a.n(Se),_e=a(285),ze=a.n(_e),Ue=a(196),qe=a.n(Ue),He=Object(N.a)((function(e){return{root:{flexGrow:1,padding:42},menuButton:{marginRight:e.spacing(1)},iconbutton:{position:"absolute",right:30}}}));var Ve=Object(b.b)((function(e){return{isLoggedIn:!e.firebase.auth.isEmpty}}))((function(e){var t,a=He(),i=n.a.useState(null),o=Object(k.a)(i,2),c=o[0],s=o[1],u=Boolean(c),m=n.a.useState(!1),d=Object(k.a)(m,2),p=d[0],h=d[1],f=function(){s(null)},g="primary-search-account-menu";t=e.isLoggedIn?n.a.createElement(Oe.a,{anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"right"},id:g,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:u,onClose:f},n.a.createElement(ve.a,{onClick:f},n.a.createElement(we.a,null,n.a.createElement(Pe.a,null))," ",n.a.createElement(l.b,{to:"/Eshopify/cart",style:{textDecoration:"none",color:"black"}},"Your Cart")),n.a.createElement(ve.a,{onClick:f},n.a.createElement(we.a,null,n.a.createElement(B.a,null)),n.a.createElement(l.b,{to:"/Eshopify/wishlist",style:{textDecoration:"none",color:"black"}},"Wishlist")),n.a.createElement(ve.a,{onClick:f},n.a.createElement(we.a,null,n.a.createElement(We.a,null)),n.a.createElement(l.b,{to:"/Eshopify/orders",style:{textDecoration:"none",color:"black"}},"Orders")),n.a.createElement(ve.a,{onClick:f},n.a.createElement(we.a,null,n.a.createElement(Le.a,null)),n.a.createElement(l.b,{to:"/Eshopify/becomeSeller",style:{textDecoration:"none",color:"black"}},"Become Seller")),n.a.createElement(ve.a,{onClick:function(){f(),E.auth().signOut()}},n.a.createElement(we.a,null,n.a.createElement(ze.a,null)),"LogOut")):n.a.createElement(Oe.a,{anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"right"},id:g,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:u,onClose:f},n.a.createElement(ve.a,{onClick:f},n.a.createElement(we.a,null,n.a.createElement(qe.a,null)),n.a.createElement(l.b,{to:"/Eshopify/signin",style:{textDecoration:"none",color:"black"}},"SignUp ")),n.a.createElement(ve.a,{onClick:f},n.a.createElement(we.a,null,n.a.createElement(qe.a,null)),n.a.createElement(l.b,{to:"/Eshopify/signin",style:{textDecoration:"none",color:"black"}},"SignIn "))),e.userName&&(C.a,e.userName);var b=e.isLoggedIn?n.a.createElement(r.Fragment,null,n.a.createElement(F.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"open drawer",onClick:function(){return h(!0)}},n.a.createElement(ge.a,null)),n.a.createElement(Re,{open:p,toggleDrawer:function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&h(e)}}})):null;return n.a.createElement("div",{className:a.root},n.a.createElement(he.a,{position:"fixed"},n.a.createElement(Ee.a,{className:a.toolbar},b,n.a.createElement(C.a,{align:"center",variant:"h5"},n.a.createElement(l.b,{to:"/eshopify",style:{textDecoration:"none",color:"white"}},"Eshopify")," "),n.a.createElement(F.a,{className:a.iconbutton,"aria-label":"display more actions",edge:"end",color:"inherit","aria-controls":g,"aria-haspopup":"true",onClick:function(e){s(e.currentTarget)}},n.a.createElement(ye.a,null)))),t)})),Me=a(593);function Ge(){return n.a.createElement(C.a,{variant:"body2",align:"center",style:{marginTop:"100px"}},"Copyright \xa9 ",n.a.createElement(Me.a,{color:"inherit",href:"/"},"Eshopify")," ",(new Date).getFullYear(),".")}var Xe=a(289),Ye=a(594),Je=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;if(!this.props.uid)return n.a.createElement(c.a,{to:"/signin"});var t=n.a.createElement(O.a,{item:!0},n.a.createElement(G.a,{animation:"wave",variant:"text",width:380,height:40}),n.a.createElement(G.a,{animation:!1,variant:"rect",width:380,height:368}));if(!this.props.wishlist)return n.a.createElement(O.a,{container:!0,spacing:3,style:{marginTop:60}},t,t,t,t,t,t);var a=0===this.props.wishlist.length?n.a.createElement("div",null,"No product in Wishlist !"):this.props.wishlist[0].product.map((function(t){return n.a.createElement(O.a,{key:t.id,item:!0,lg:3,sm:12,xs:12,md:6},n.a.createElement(H,{product:t,uid:e.props.uid,isWishlisted:!0}))}));return n.a.createElement(O.a,{container:!0,style:{marginTop:40}},a)}}]),a}(r.Component),Ke=Object(M.d)(Object(b.b)((function(e){return{uid:e.firebase.auth.uid,wishlist:e.firestore.ordered.wishlist?e.firestore.ordered.wishlist.filter((function(t){return t.id===e.firebase.auth.uid})):null}})),Object(V.firestoreConnect)([{collection:"wishlist"}]))(Je),Qe=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;if(!this.props.uid)return n.a.createElement(c.a,{to:"/signin"});var t=n.a.createElement(O.a,{item:!0},n.a.createElement(G.a,{animation:"wave",variant:"text",width:380,height:40}),n.a.createElement(G.a,{animation:!1,variant:"rect",width:380,height:368}));if(!this.props.orders)return n.a.createElement(O.a,{container:!0,spacing:3,style:{marginTop:60}},t,t,t,t,t,t);var a=0===this.props.orders.length?n.a.createElement("div",null,"No Orders !"):this.props.orders[0].product.map((function(t){return n.a.createElement(O.a,{key:t.id,item:!0,lg:3,sm:12,xs:12,md:6},n.a.createElement(H,{product:t,uid:e.props.uid}))}));return n.a.createElement(O.a,{container:!0,style:{marginTop:40}},a)}}]),a}(r.Component),Ze=Object(M.d)(Object(b.b)((function(e){return{uid:e.firebase.auth.uid,orders:e.firestore.ordered.orders?e.firestore.ordered.orders.filter((function(t){return t.id===e.firebase.auth.uid})):null}})),Object(V.firestoreConnect)([{collection:"orders"}]))(Qe),$e=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=n.a.createElement(O.a,{item:!0},n.a.createElement(G.a,{animation:"wave",variant:"text",width:380,height:40}),n.a.createElement(G.a,{animation:!1,variant:"rect",width:380,height:368})),a=this.props.match.params.category;if(!this.props.categories[a]||!this.props.wishlist||!this.props.wishlist[0].product)return n.a.createElement(O.a,{container:!0,spacing:3,style:{marginTop:60,marginLeft:10}},t,t,t,t,t,t,t,t,t,t);var r=n.a.createElement("div",{style:{marginBottom:50,marginLeft:10,marginRight:10}},n.a.createElement(j.a,{elevation:3,style:{padding:20,marginTop:40,marginBottom:30,paddingLeft:50}},n.a.createElement(C.a,{variant:"body1",color:"primary",align:"left"},a.toUpperCase())),n.a.createElement(O.a,{container:!0,style:{marginTop:40}},this.props.categories[a].map((function(t,a){var r=1===e.props.wishlist[0].product.filter((function(e){return e.id===t.id})).length;return n.a.createElement(O.a,{key:a,item:!0,lg:3,sm:12,xs:12,md:6},n.a.createElement(H,{product:t,uid:e.props.uid,isWishlisted:r}))}))));return n.a.createElement("div",null,r)}}]),a}(r.Component),et=Object(M.d)(Object(b.b)((function(e){return{uid:e.firebase.auth.uid,categories:e.firestore.ordered?e.firestore.ordered:null,wishlist:e.firestore.ordered.wishlist?e.firestore.ordered.wishlist.filter((function(t){return t.id===e.firebase.auth.uid})):null}})),Object(V.firestoreConnect)([{collection:"laptops"},{collection:"mobiles"},{collection:"accessories"}]))($e),tt=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;if(!this.props.uid)return n.a.createElement(c.a,{to:"/signin"});var t=n.a.createElement(O.a,{item:!0},n.a.createElement(G.a,{animation:"wave",variant:"text",width:380,height:40}),n.a.createElement(G.a,{animation:!1,variant:"rect",width:380,height:368}));if(!this.props.cart)return n.a.createElement(O.a,{container:!0,spacing:3,style:{marginTop:60}},t,t,t,t,t,t);var a=0===this.props.cart.length?n.a.createElement("div",null,"No product in cart !"):this.props.cart[0].product.map((function(t){return n.a.createElement(O.a,{key:t.id,item:!0,lg:3,sm:12,xs:12,md:6},n.a.createElement(H,{product:t,uid:e.props.uid}))}));return n.a.createElement("div",null,n.a.createElement(U.a,{variant:"contained",color:"primary",size:"large",style:{marginTop:40}},n.a.createElement(l.b,{to:"/Eshopify/payment",style:{textDecoration:"none",color:"white"}},"Order Now")),n.a.createElement(O.a,{container:!0,style:{marginTop:40}},a))}}]),a}(r.Component),at=Object(M.d)(Object(b.b)((function(e){return{uid:e.firebase.auth.uid,cart:e.firestore.ordered.cart?e.firestore.ordered.cart.filter((function(t){return t.id===e.firebase.auth.uid})):null}})),Object(V.firestoreConnect)([{collection:"cart"}]))(tt),rt=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,"Error 404")}}]),a}(r.Component),nt=a(598),it=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).fileHandler=function(e){r.setState(Object(x.a)({},e.target.name,e.target.files[0]))},r.state={title:"",Brand:"",description:"",price:"",type:"electronics",file:"",link:""},r}return Object(u.a)(a,[{key:"render",value:function(){var e=this;console.log(this.props.isProductError);var t=n.a.createElement("div",null);return this.props.isProductError&&(t=n.a.createElement("div",null,"Error Creating Product ! Please Try Later ")),this.changeHandler=function(t){e.setState(Object(x.a)({},t.target.name,t.target.value))},this.submitHandler=function(t){t.preventDefault(),console.log(e.state),e.props.createProduct(e.state,e.props.uid)},n.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},t,n.a.createElement("h3",null,"Add Your Product to sell on Eshopify"),n.a.createElement("form",{onSubmit:this.submitHandler,style:{margin:20,padding:60,maxWidth:450,border:"1px solid black"}},n.a.createElement(ee.a,{name:"title",fullWidth:!0,onChange:this.changeHandler,label:"Product Name",variant:"outlined",required:!0}),n.a.createElement(ee.a,{name:"Brand",style:{marginTop:30},fullWidth:!0,onChange:this.changeHandler,label:"Brand",variant:"outlined",required:!0}),n.a.createElement(ee.a,{name:"description",style:{marginTop:30},fullWidth:!0,onChange:this.changeHandler,label:"Description",variant:"outlined",required:!0}),n.a.createElement(ee.a,{name:"price",style:{marginTop:30},fullWidth:!0,onChange:this.changeHandler,label:"Price",variant:"outlined",required:!0}),n.a.createElement(nt.a,{labelId:"Type",id:"demo-simple-select",value:this.state.type,name:"type",onChange:this.changeHandler,fullWidth:!0,style:{marginTop:30},required:!0},n.a.createElement(ve.a,{value:"laptops"},"Laptops"),n.a.createElement(ve.a,{value:"mobiles"},"Mobiles"),n.a.createElement(ve.a,{value:"accessories"},"Accessories")),n.a.createElement(ee.a,{required:!0,style:{marginTop:30},name:"file",label:"Image",type:"file",id:"image",onChange:this.fileHandler}),n.a.createElement(U.a,{style:{marginTop:30,padding:10},fullWidth:!0,type:"submit",variant:"contained",color:"primary"},"Submit")))}}]),a}(r.Component),ot=Object(b.b)((function(e){return console.log(e),{uid:e.firebase.auth.uid,isProductError:e.user.isProductError}}),(function(e){return{createProduct:function(t){return e(function(e,t){return function(t,a,r){var n=r.getFirebase,i=r.getFirestore;i().collection(e.type).add({title:e.title}).then((function(a){console.log(a.id);var r=n(),o=r.storage().ref().child(a.id).put(e.file);o.on("state_changed",(function(e){e.bytesTransferred,e.totalBytes;switch(e.state){case r.storage.TaskState.PAUSED:console.log("Upload is paused");break;case r.storage.TaskState.RUNNING:console.log("Upload is running")}}),(function(e){t({type:"Product_Error",error:e})}),(function(){o.snapshot.ref.getDownloadURL().then((function(t){i().collection(e.type).doc(a.id).set({title:e.title,Brand:e.Brand,description:e.description,price:e.price,link:t})}))}))})).then((function(){return t({type:"Product_Added"})})).catch((function(e){return t({type:"Product_Error",err:e})}))}}(t))}}}))(it),lt=Object(Xe.a)({palette:{primary:{main:"#ffd369"},secondary:{main:"#fcf8ec"}}});var ct=function(){return n.a.createElement(Ye.a,{theme:lt},n.a.createElement("div",{className:"App"},n.a.createElement(l.a,null,n.a.createElement(Ve,null),n.a.createElement(c.d,null,n.a.createElement(c.b,{exact:!0,path:"/Eshopify",component:Y}),n.a.createElement(c.b,{path:"/signin",component:v}),n.a.createElement(c.b,{path:"/Eshopify/payment",component:pe}),n.a.createElement(c.b,{path:"/Eshopify/products/:productid",component:J}),n.a.createElement(c.b,{path:"/Eshopify/wishlist",component:Ke}),n.a.createElement(c.b,{path:"/Eshopify/cart",component:at}),n.a.createElement(c.b,{path:"/Eshopify/orders",component:Ze}),n.a.createElement(c.b,{path:"/Eshopify/category/:category",component:et}),n.a.createElement(c.b,{path:"/Eshopify/becomeSeller",component:ot}),n.a.createElement(c.b,{path:"/Eshopify/signin",component:v}),n.a.createElement(c.b,{path:"/Eshopify/:anypage",component:rt})),n.a.createElement(Ge,null))))},st=a(288),ut=a(90);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var mt={isProfileError:!1,isWishlistError:!1,isProductError:!1},dt=Object(M.c)({firestore:ut.firestoreReducer,firebase:V.firebaseReducer,user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Wishlist_Added":return e.isWishlistError=!1,e;case"Wishlist_Error":return e.isWishlistError=!0,e;case"Product_Added":return e.isProductError=!1,e;case"Product_Error":return e.isProductError=!0,e;case"Profile_Added":return e.isProfileError=!1,e;case"Profile_Error":return e.isProfileError=!0,e;default:return e}}}),pt=Object(M.e)(dt,Object(M.d)(Object(M.a)(st.a.withExtraArgument({getFirebase:V.getFirebase,getFirestore:ut.getFirestore})),Object(ut.reduxFirestore)(h.a,E))),ht={firebase:h.a,config:{userProfile:"users",useFirestoreForProfile:!0,resetBeforeLogin:!1},dispatch:pt.dispatch,createFirestoreInstance:ut.createFirestoreInstance};function Et(e){var t=e.children,a=Object(b.c)((function(e){return e.firebase.auth}));return Object(V.isLoaded)(a)?t:n.a.createElement("div",{style:{marginLeft:"50%",paddingTop:"350px"}},n.a.createElement(ue.a,{color:"secondary"}))}o.a.render(n.a.createElement(b.a,{store:pt},n.a.createElement(V.ReactReduxFirebaseProvider,ht,n.a.createElement(Et,null,n.a.createElement(ct,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[305,1,2]]]);
//# sourceMappingURL=main.060065d9.chunk.js.map