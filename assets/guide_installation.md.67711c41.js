import{_ as a,c as e,o as n,a as s}from"./app.87ddd3d2.js";const b='{"title":"installation","description":"","frontmatter":{"layout":"doc"},"headers":[{"level":2,"title":"using installation script","slug":"using-installation-script"},{"level":2,"title":"using github releases","slug":"using-github-releases"},{"level":2,"title":"using go get","slug":"using-go-get"},{"level":2,"title":"using goblin","slug":"using-goblin"}],"relativePath":"guide/installation.md","lastUpdated":1654188956000}',i={name:"guide/installation.md"},t=s(`<h1 id="installation" tabindex="-1">installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h1><h2 id="using-installation-script" tabindex="-1">using installation script <a class="header-anchor" href="#using-installation-script" aria-hidden="true">#</a></h2><p>coming soon...</p><h2 id="using-github-releases" tabindex="-1">using github releases <a class="header-anchor" href="#using-github-releases" aria-hidden="true">#</a></h2><p>if this is being setup for a non-ci / interactive systems, you can download the binaries from the <a href="https://github.com/barelyhuman/grab/releases" target="_blank" rel="noopener noreferrer">github releases</a></p><h2 id="using-go-get" tabindex="-1">using <code>go get</code> <a class="header-anchor" href="#using-go-get" aria-hidden="true">#</a></h2><p>if you are on a ci that already has golang installed and configured, you can use the <code>go get</code> to build it for your system</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">go get -u github.com/barelyhuman/grab</span></span>
<span class="line"></span></code></pre></div><h2 id="using-goblin" tabindex="-1">using goblin <a class="header-anchor" href="#using-goblin" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">warning</p><p>though i wouldn&#39;t recommend this method since, <code>grab</code> was an idea that came up when goblin was down, and i wasn&#39;t able to generate my changelogs and had to wait for the domains and everything to be reconfigured before i could move ahead with rest of my work. even though i own the service, i have no control over my luck and cannot guarantee what dr. murphy will plan for me next, so use this with caution</p></div><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">curl -sf https://goblin.barelyhuman.xyz/github.com/barelyhuman/grab </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> sh</span></span>
<span class="line"></span></code></pre></div>`,11),o=[t];function l(r,c,g,d,h,u){return n(),e("div",null,o)}var m=a(i,[["render",l]]);export{b as __pageData,m as default};