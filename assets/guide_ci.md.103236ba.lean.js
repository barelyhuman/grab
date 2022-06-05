import{_ as i,c as a,o as s,a as e,b as t}from"./app.de2b8c8b.js";const f='{"title":"ci","description":"","frontmatter":{},"headers":[{"level":2,"title":"bypassing rate limiting","slug":"bypassing-rate-limiting"}],"relativePath":"guide/ci.md","lastUpdated":1654444378000}',r={},n=e("h1",{id:"ci",tabindex:"-1"},[t("ci "),e("a",{class:"header-anchor",href:"#ci","aria-hidden":"true"},"#")],-1),o=e("h2",{id:"bypassing-rate-limiting",tabindex:"-1"},[t("bypassing rate limiting "),e("a",{class:"header-anchor",href:"#bypassing-rate-limiting","aria-hidden":"true"},"#")],-1),d=e("p",null,"Usage in CI might trigger more calls on the provider's API than required and this might lead to blocking based on their rate limiting.",-1),l=e("p",null,[t("To avoid this, most providers do provide a way to bypass this rate limit or increase it using an authorized token, you can provide this token using the env variable "),e("code",null,"GRAB_TOKEN"),t(" or the flag "),e("code",null,"--token"),t(" and this will be passed to the client or resolver that's trying to make a request.")],-1),c=[n,o,d,l];function h(g,p,_,u,m,b){return s(),a("div",null,c)}var y=i(r,[["render",h]]);export{f as __pageData,y as default};