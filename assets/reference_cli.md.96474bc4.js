import{_ as s,c as a,o as n,a as e}from"./app.87ddd3d2.js";const C='{"title":"cli reference","description":"","frontmatter":{"layout":"doc"},"headers":[{"level":2,"title":"global usage","slug":"global-usage"},{"level":3,"title":"examples","slug":"examples"},{"level":2,"title":"commands","slug":"commands"},{"level":3,"title":"providers","slug":"providers"}],"relativePath":"reference/cli.md","lastUpdated":1654188850000}',l={name:"reference/cli.md"},p=e(`<h1 id="cli-reference" tabindex="-1">cli reference <a class="header-anchor" href="#cli-reference" aria-hidden="true">#</a></h1><h2 id="global-usage" tabindex="-1">global usage <a class="header-anchor" href="#global-usage" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">NAME:</span></span>
<span class="line"><span style="color:#A6ACCD;">   grab - download a binary from various cdn provisions</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">USAGE:</span></span>
<span class="line"><span style="color:#A6ACCD;">   grab [global options] command [command options] [arguments...]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">VERSION:</span></span>
<span class="line"><span style="color:#A6ACCD;">   v0.0.0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">COMMANDS:</span></span>
<span class="line"><span style="color:#A6ACCD;">   providers, p  Grab&#39;s supported providers</span></span>
<span class="line"><span style="color:#A6ACCD;">   help, h       Shows a list of commands or help for one command</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">GLOBAL OPTIONS:</span></span>
<span class="line"><span style="color:#A6ACCD;">   --env FILE                  will use the env from the specified FILE (default: &quot;.env&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">   --filename value, -f value  the filename to grab, if files are similarly named</span></span>
<span class="line"><span style="color:#A6ACCD;">   --help, -h                  show help (default: false)</span></span>
<span class="line"><span style="color:#A6ACCD;">   --print-version, -V         print only the version (default: false)</span></span>
<span class="line"><span style="color:#A6ACCD;">   --provider value, -p value  the provider to use, to see supported providers run &#39;grab providers&#39; (default: &quot;github&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="examples" tabindex="-1">examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h3><p>to grab the latest tarball for hugo for your specific system</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">grab -p github gohugoio/hugo</span></span>
<span class="line"></span></code></pre></div><p>to grab a specific tarball for hugo</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">grab -p github --filename </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hugo_0.100.1_Linux-ARM.deb</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> gohugoio/hugo</span></span>
<span class="line"></span></code></pre></div><p><code>github</code> is the default provider so it can be omitted, so getting something like <code>hugo</code> could be as simple as</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">grab gohugoio/hugo</span></span>
<span class="line"></span></code></pre></div><p>it works with other programs as well, let&#39;s try a few of mine</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">grab barelyhuman/commitlog </span><span style="color:#676E95;font-style:italic;"># go runtime tarball</span></span>
<span class="line"><span style="color:#A6ACCD;">grab barelyhuman/mudkip </span><span style="color:#676E95;font-style:italic;"># nim lang tarball</span></span>
<span class="line"><span style="color:#A6ACCD;">grab barelyhuman/statico </span><span style="color:#676E95;font-style:italic;"># go runtime tarball </span></span>
<span class="line"></span></code></pre></div><h2 id="commands" tabindex="-1">commands <a class="header-anchor" href="#commands" aria-hidden="true">#</a></h2><h3 id="providers" tabindex="-1">providers <a class="header-anchor" href="#providers" aria-hidden="true">#</a></h3><p>used to list the currently supported providers and their keys to be used with <code>grab</code>&#39;s <code>-p</code> flag.</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">NAME:</span></span>
<span class="line"><span style="color:#A6ACCD;">   grab providers - Grab&#39;s supported providers</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">USAGE:</span></span>
<span class="line"><span style="color:#A6ACCD;">   grab providers [command options] [arguments...]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">OPTIONS:</span></span>
<span class="line"><span style="color:#A6ACCD;">   --help, -h  show help (default: false)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,16),o=[p];function r(c,t,i,d,A,h){return n(),a("div",null,o)}var g=s(l,[["render",r]]);export{C as __pageData,g as default};
