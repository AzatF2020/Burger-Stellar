import{R as wt,r as l,s as Zt,j as E,u as te,C as ee,a as ne}from"./index-2ca551ca.js";const se="_construct_14wn5_1",oe="_construct__container_14wn5_7",ce="_construct__list_14wn5_24",re="_construct__title_14wn5_28",ae="_construct__block_14wn5_36",V={construct:se,construct__container:oe,construct__list:ce,construct__title:re,construct__block:ae},k=()=>{},N=k(),ft=Object,u=t=>t===N,P=t=>typeof t=="function",q=(t,e)=>({...t,...e}),ie=t=>P(t.then),at=new WeakMap;let ue=0;const nt=t=>{const e=typeof t,n=t&&t.constructor,c=n==Date;let o,r;if(ft(t)===t&&!c&&n!=RegExp){if(o=at.get(t),o)return o;if(o=++ue+"~",at.set(t,o),n==Array){for(o="@",r=0;r<t.length;r++)o+=nt(t[r])+",";at.set(t,o)}if(n==ft){o="#";const a=ft.keys(t).sort();for(;!u(r=a.pop());)u(t[r])||(o+=r+":"+nt(t[r])+",");at.set(t,o)}}else o=c?t.toJSON():e=="symbol"?t.toString():e=="string"?JSON.stringify(t):""+t;return o},W=new WeakMap,dt={},it={},St="undefined",ut=typeof window!=St,gt=typeof document!=St,le=()=>ut&&typeof window.requestAnimationFrame!=St,kt=(t,e)=>{const n=W.get(t);return[()=>!u(e)&&t.get(e)||dt,c=>{if(!u(e)){const o=t.get(e);e in it||(it[e]=o),n[5](e,q(o,c),o||dt)}},n[6],()=>!u(e)&&e in it?it[e]:!u(e)&&t.get(e)||dt]};let Tt=!0;const _e=()=>Tt,[pt,vt]=ut&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[k,k],fe=()=>{const t=gt&&document.visibilityState;return u(t)||t!=="hidden"},de=t=>(gt&&document.addEventListener("visibilitychange",t),pt("focus",t),()=>{gt&&document.removeEventListener("visibilitychange",t),vt("focus",t)}),Ee=t=>{const e=()=>{Tt=!0,t()},n=()=>{Tt=!1};return pt("online",e),pt("offline",n),()=>{vt("online",e),vt("offline",n)}},me={isOnline:_e,isVisible:fe},he={initFocus:de,initReconnect:Ee},Mt=!wt.useId,st=!ut||"Deno"in window,Re=t=>le()?window.requestAnimationFrame(t):setTimeout(t,1),Et=st?l.useEffect:l.useLayoutEffect,mt=typeof navigator<"u"&&navigator.connection,Wt=!st&&mt&&(["slow-2g","2g"].includes(mt.effectiveType)||mt.saveData),Dt=t=>{if(P(t))try{t=t()}catch{t=""}const e=t;return t=typeof t=="string"?t:(Array.isArray(t)?t.length:t)?nt(t):"",[t,e]};let be=0;const Ct=()=>++be,qt=0,Ht=1,$t=2,ge=3;var et={__proto__:null,ERROR_REVALIDATE_EVENT:ge,FOCUS_EVENT:qt,MUTATE_EVENT:$t,RECONNECT_EVENT:Ht};async function Bt(...t){const[e,n,c,o]=t,r=q({populateCache:!0,throwOnError:!0},typeof o=="boolean"?{revalidate:o}:o||{});let a=r.populateCache;const _=r.rollbackOnError;let m=r.optimisticData;const D=r.revalidate!==!1,R=O=>typeof _=="function"?_(O):_!==!1,s=r.throwOnError;if(P(n)){const O=n,v=[],y=e.keys();for(const x of y)!/^\$(inf|sub)\$/.test(x)&&O(e.get(x)._k)&&v.push(x);return Promise.all(v.map(p))}return p(n);async function p(O){const[v]=Dt(O);if(!v)return;const[y,x]=kt(e,v),[i,z,Z,H]=W.get(e),$=()=>{const w=i[v];return D&&(delete Z[v],delete H[v],w&&w[0])?w[0]($t).then(()=>y().data):y().data};if(t.length<3)return $();let C=c,A;const b=Ct();z[v]=[b,0];const J=!u(m),j=y(),K=j.data,ot=j._c,B=u(ot)?K:ot;if(J&&(m=P(m)?m(B,K):m,x({data:m,_c:B})),P(C))try{C=C(B)}catch(w){A=w}if(C&&ie(C))if(C=await C.catch(w=>{A=w}),b!==z[v][0]){if(A)throw A;return C}else A&&J&&R(A)&&(a=!0,x({data:B,_c:N}));if(a&&!A)if(P(a)){const w=a(C,B);x({data:w,error:N,_c:N})}else x({data:C,error:N,_c:N});if(z[v][1]=Ct(),Promise.resolve($()).then(()=>{x({_c:N})}),A){if(s)throw A;return}return C}}const Pt=(t,e)=>{for(const n in t)t[n][0]&&t[n][0](e)},Te=(t,e)=>{if(!W.has(t)){const n=q(he,e),c={},o=Bt.bind(N,t);let r=k;const a={},_=(R,s)=>{const p=a[R]||[];return a[R]=p,p.push(s),()=>p.splice(p.indexOf(s),1)},m=(R,s,p)=>{t.set(R,s);const O=a[R];if(O)for(const v of O)v(s,p)},D=()=>{if(!W.has(t)&&(W.set(t,[c,{},{},{},o,m,_]),!st)){const R=n.initFocus(setTimeout.bind(N,Pt.bind(N,c,qt))),s=n.initReconnect(setTimeout.bind(N,Pt.bind(N,c,Ht)));r=()=>{R&&R(),s&&s(),W.delete(t)}}};return D(),[t,o,D,r]}return[t,W.get(t)[4]]},pe=(t,e,n,c,o)=>{const r=n.errorRetryCount,a=o.retryCount,_=~~((Math.random()+.5)*(1<<(a<8?a:8)))*n.errorRetryInterval;!u(r)&&a>r||setTimeout(c,_,o)},ve=(t,e)=>nt(t)==nt(e),[zt,Ce]=Te(new Map),we=q({onLoadingSlow:k,onSuccess:k,onError:k,onErrorRetry:pe,onDiscarded:k,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:Wt?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:Wt?5e3:3e3,compare:ve,isPaused:()=>!1,cache:zt,mutate:Ce,fallback:{}},me),Se=(t,e)=>{const n=q(t,e);if(e){const{use:c,fallback:o}=t,{use:r,fallback:a}=e;c&&r&&(n.use=c.concat(r)),o&&a&&(n.fallback=q(o,a))}return n},De=l.createContext({}),Ne="$inf$",Jt=ut&&window.__SWR_DEVTOOLS_USE__,Oe=Jt?window.__SWR_DEVTOOLS_USE__:[],ye=()=>{Jt&&(window.__SWR_DEVTOOLS_REACT__=wt)},Ae=t=>P(t[1])?[t[0],t[1],t[2]||{}]:[t[0],null,(t[1]===null?t[2]:t[1])||{}],Ie=()=>q(we,l.useContext(De)),xe=t=>(e,n,c)=>t(e,n&&((...r)=>{const[a]=Dt(e),[,,,_]=W.get(zt);if(a.startsWith(Ne))return n(...r);const m=_[a];return u(m)?n(...r):(delete _[a],m)}),c),Ve=Oe.concat(xe),je=t=>function(...n){const c=Ie(),[o,r,a]=Ae(n),_=Se(c,a);let m=t;const{use:D}=_,R=(D||[]).concat(Ve);for(let s=R.length;s--;)m=R[s](m);return m(o,r||_.fetcher||null,_)},Le=(t,e,n)=>{const c=e[t]||(e[t]=[]);return c.push(n),()=>{const o=c.indexOf(n);o>=0&&(c[o]=c[c.length-1],c.pop())}};ye();const Ut=wt.use||(t=>{if(t.status==="pending")throw t;if(t.status==="fulfilled")return t.value;throw t.status==="rejected"?t.reason:(t.status="pending",t.then(e=>{t.status="fulfilled",t.value=e},e=>{t.status="rejected",t.reason=e}),t)}),ht={dedupe:!0},Fe=(t,e,n)=>{const{cache:c,compare:o,suspense:r,fallbackData:a,revalidateOnMount:_,revalidateIfStale:m,refreshInterval:D,refreshWhenHidden:R,refreshWhenOffline:s,keepPreviousData:p}=n,[O,v,y,x]=W.get(c),[i,z]=Dt(t),Z=l.useRef(!1),H=l.useRef(!1),$=l.useRef(i),C=l.useRef(e),A=l.useRef(n),b=()=>A.current,J=()=>b().isVisible()&&b().isOnline(),[j,K,ot,B]=kt(c,i),w=l.useRef({}).current,Kt=u(a)?n.fallback[i]:a,Nt=(f,d)=>{for(const T in w){const h=T;if(h==="data"){if(!o(f[h],d[h])&&(!u(f[h])||!o(rt,d[h])))return!1}else if(d[h]!==f[h])return!1}return!0},Ot=l.useMemo(()=>{const f=(()=>!i||!e?!1:u(_)?b().isPaused()||r?!1:u(m)?!0:m:_)(),d=S=>{const F=q(S);return delete F._k,f?{isValidating:!0,isLoading:!0,...F}:F},T=j(),h=B(),L=d(T),Q=T===h?L:d(h);let g=L;return[()=>{const S=d(j());return Nt(S,g)?(g.data=S.data,g.isLoading=S.isLoading,g.isValidating=S.isValidating,g.error=S.error,g):(g=S,S)},()=>Q]},[c,i]),G=Zt.useSyncExternalStore(l.useCallback(f=>ot(i,(d,T)=>{Nt(T,d)||f()}),[c,i]),Ot[0],Ot[1]),yt=!Z.current,Gt=O[i]&&O[i].length>0,Y=G.data,X=u(Y)?Kt:Y,ct=G.error,At=l.useRef(X),rt=p?u(Y)?At.current:Y:X,It=(()=>Gt&&!u(ct)?!1:yt&&!u(_)?_:b().isPaused()?!1:r?u(X)?!1:m:u(X)||m)(),xt=!!(i&&e&&yt&&It),Yt=u(G.isValidating)?xt:G.isValidating,Xt=u(G.isLoading)?xt:G.isLoading,tt=l.useCallback(async f=>{const d=C.current;if(!i||!d||H.current||b().isPaused())return!1;let T,h,L=!0;const Q=f||{},g=!y[i]||!Q.dedupe,S=()=>Mt?!H.current&&i===$.current&&Z.current:i===$.current,F={isValidating:!1,isLoading:!1},jt=()=>{K(F)},Lt=()=>{const I=y[i];I&&I[1]===h&&delete y[i]},Ft={isValidating:!0};u(j().data)&&(Ft.isLoading=!0);try{if(g&&(K(Ft),n.loadingTimeout&&u(j().data)&&setTimeout(()=>{L&&S()&&b().onLoadingSlow(i,n)},n.loadingTimeout),y[i]=[d(z),Ct()]),[T,h]=y[i],T=await T,g&&setTimeout(Lt,n.dedupingInterval),!y[i]||y[i][1]!==h)return g&&S()&&b().onDiscarded(i),!1;F.error=N;const I=v[i];if(!u(I)&&(h<=I[0]||h<=I[1]||I[1]===0))return jt(),g&&S()&&b().onDiscarded(i),!1;const M=j().data;F.data=o(M,T)?M:T,g&&S()&&b().onSuccess(T,i,n)}catch(I){Lt();const M=b(),{shouldRetryOnError:lt}=M;M.isPaused()||(F.error=I,g&&S()&&(M.onError(I,i,M),(lt===!0||P(lt)&&lt(I))&&J()&&M.onErrorRetry(I,i,M,Qt=>{const _t=O[i];_t&&_t[0]&&_t[0](et.ERROR_REVALIDATE_EVENT,Qt)},{retryCount:(Q.retryCount||0)+1,dedupe:!0})))}return L=!1,jt(),!0},[i,c]),Vt=l.useCallback((...f)=>Bt(c,$.current,...f),[]);if(Et(()=>{C.current=e,A.current=n,u(Y)||(At.current=Y)}),Et(()=>{if(!i)return;const f=tt.bind(N,ht);let d=0;const h=Le(i,O,(L,Q={})=>{if(L==et.FOCUS_EVENT){const g=Date.now();b().revalidateOnFocus&&g>d&&J()&&(d=g+b().focusThrottleInterval,f())}else if(L==et.RECONNECT_EVENT)b().revalidateOnReconnect&&J()&&f();else{if(L==et.MUTATE_EVENT)return tt();if(L==et.ERROR_REVALIDATE_EVENT)return tt(Q)}});return H.current=!1,$.current=i,Z.current=!0,K({_k:z}),It&&(u(X)||st?f():Re(f)),()=>{H.current=!0,h()}},[i]),Et(()=>{let f;function d(){const h=P(D)?D(j().data):D;h&&f!==-1&&(f=setTimeout(T,h))}function T(){!j().error&&(R||b().isVisible())&&(s||b().isOnline())?tt(ht).then(d):d()}return d(),()=>{f&&(clearTimeout(f),f=-1)}},[D,R,s,i]),l.useDebugValue(rt),r&&u(X)&&i){if(!Mt&&st)throw new Error("Fallback data is required when using suspense in SSR.");C.current=e,A.current=n,H.current=!1;const f=x[i];if(!u(f)){const d=Vt(f);Ut(d)}if(u(ct)){const d=tt(ht);u(rt)||(d.status="fulfilled",d.value=!0),Ut(d)}else throw ct}return{mutate:Vt,get data(){return w.data=!0,rt},get error(){return w.error=!0,ct},get isValidating(){return w.isValidating=!0,Yt},get isLoading(){return w.isLoading=!0,Xt}}},Me=je(Fe),We="_tab_ybol9_1",Pe="_tab__button_ybol9_6",Ue="_tab__button_active_ybol9_26",Rt={tab:We,tab__button:Pe,tab__button_active:Ue},ke=({...t})=>{const[e]=l.useState(["Булки","Соусы","Начинки"]),[n,c]=l.useState(e[0]),o=l.useCallback(a=>n===a?Rt.tab__button_active:Rt.tab__button,[n]),r=l.useCallback(a=>{t[a].current.scrollIntoView({behavior:"smooth"})},[t]);return E.jsx("div",{className:Rt.tab,children:e.map((a,_)=>E.jsx("button",{className:o(a),onClick:()=>{r(_),c(a)},children:a},_))})},qe="_ingredient_14jy4_1",He="_ingredient__counter_14jy4_5",$e="_ingredient__container_14jy4_10",Be="_ingredient__image_14jy4_17",ze="_ingredient__cost__info_14jy4_22",Je="_ingredient__cost_14jy4_22",Ke="_ingredient__cost__image_14jy4_34",Ge="_ingredient__name_14jy4_39",U={ingredient:qe,ingredient__counter:He,ingredient__container:$e,ingredient__image:Be,ingredient__cost__info:ze,ingredient__cost:Je,ingredient__cost__image:Ke,ingredient__name:Ge},Ye=(t,e)=>{const[{isDragging:n},c]=te(()=>({type:t,item:{item:e},collect:o=>({isDragging:o.isDragging(),handlerId:o.getHandlerId()})}));return{isDragging:n,drag:c}},bt=({item:t,counter:e,image:n,cost:c,name:o})=>{const{isDragging:r,drag:a}=Ye("ingredient",t),_=r?.4:1;return E.jsxs("div",{className:U.ingredient,style:{opacity:_},ref:a,"data-testid":"ingredient",children:[E.jsx("span",{className:U.ingredient__counter,children:e}),E.jsxs("div",{className:U.ingredient__container,children:[E.jsx("img",{src:n,alt:"image",className:U.ingredient__image}),E.jsxs("div",{className:U.ingredient__cost__info,children:[E.jsx("p",{className:U.ingredient__cost,children:c}),E.jsx("img",{src:ee,alt:"",className:U.ingredient__cost__image})]}),E.jsx("h5",{className:U.ingredient__name,children:o})]})]})},Xe=t=>fetch(t).then(e=>e.json()),Qe=()=>{const{data:t}=Me(`${ne}/ingredients`,Xe),[e,n]=l.useState([]),[c,o]=l.useState([]),[r,a]=l.useState([]),_=l.useRef(null),m=l.useRef(null),D=l.useRef(null),R=l.useCallback(s=>t==null?void 0:t.data.filter(p=>(p==null?void 0:p.type)===s),[t==null?void 0:t.data]);return l.useEffect(()=>{o(()=>R("main")),a(()=>R("sauce")),n(()=>R("bun"))},[t==null?void 0:t.success,n]),E.jsxs("div",{className:V.construct,children:[E.jsx(ke,{...[_,m,D]}),E.jsxs("ul",{className:V.construct__container,children:[E.jsxs("li",{className:V.construct__list,children:[E.jsx("h2",{className:V.construct__title,ref:_,children:"Булки"}),E.jsx("div",{className:V.construct__block,children:e==null?void 0:e.map(s=>E.jsx(bt,{item:s,name:s==null?void 0:s.name,cost:s==null?void 0:s.price,image:s==null?void 0:s.image},s._id))})]}),E.jsxs("li",{className:V.construct__list,children:[E.jsx("h2",{className:V.construct__title,ref:m,children:"Соусы"}),E.jsx("div",{className:V.construct__block,children:r==null?void 0:r.map(s=>E.jsx(bt,{item:s,name:s==null?void 0:s.name,cost:s==null?void 0:s.price,image:s==null?void 0:s.image},s._id))})]}),E.jsxs("li",{className:V.construct__list,children:[E.jsx("h2",{className:V.construct__title,ref:D,children:"Начинки"}),E.jsx("div",{className:V.construct__block,children:c==null?void 0:c.map(s=>E.jsx(bt,{item:s,name:s==null?void 0:s.name,cost:s==null?void 0:s.price,image:s==null?void 0:s.image},s._id))})]})]})]})},tn=l.memo(Qe);export{tn as default};