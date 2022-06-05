import{_ as e,c as a,o,d as s}from"./app.de2b8c8b.js";const m='{"title":"cli reference","description":"","frontmatter":{"layout":"doc"},"headers":[{"level":2,"title":"global usage","slug":"global-usage"},{"level":3,"title":"examples","slug":"examples"},{"level":2,"title":"commands","slug":"commands"},{"level":3,"title":"providers","slug":"providers"}],"relativePath":"reference/cli.md","lastUpdated":1654444378000}',r={},n=s(`<h1 id="cli-reference" tabindex="-1">cli reference <a class="header-anchor" href="#cli-reference" aria-hidden="true">#</a></h1><h2 id="global-usage" tabindex="-1">global usage <a class="header-anchor" href="#global-usage" aria-hidden="true">#</a></h2><div class="language-"><pre><code>NAME:
   grab - download a binary from various cdn provisions

USAGE:
   grab [global options] command [command options] [arguments...]

VERSION:
   v0.0.1-beta.1

COMMANDS:
   providers, p  Grab&#39;s supported providers
   help, h       Shows a list of commands or help for one command

GLOBAL OPTIONS:
   --env FILE                  will use the env from the specified FILE (default: &quot;.env&quot;)
   --filename value, -f value  the filename to grab, if files are similarly named
   --help, -h                  show help (default: false)
   --print-version, -V         print only the version (default: false)
   --provider value, -p value  the provider to use, to see supported providers run &#39;grab providers&#39; (default: &quot;github&quot;)
   --version value, -v value   the version of the asset to grab (accepts vX.X.X and X.X.X)
</code></pre></div><h3 id="examples" tabindex="-1">examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h3><p>to grab the latest tarball for hugo for your specific system</p><div class="language-bash"><pre><code>grab -p github gohugoio/hugo
</code></pre></div><p>to grab a specific tarball for hugo</p><div class="language-bash"><pre><code>grab -p github --filename <span class="token string">&#39;hugo_0.100.1_Linux-ARM.deb&#39;</span> gohugoio/hugo
</code></pre></div><p><code>github</code> is the default provider so it can be omitted, so getting something like <code>hugo</code> could be as simple as</p><div class="language-bash"><pre><code>grab gohugoio/hugo
</code></pre></div><p>it works with other programs as well, let&#39;s try a few of mine</p><div class="language-bash"><pre><code>grab barelyhuman/commitlog <span class="token comment"># go runtime tarball</span>
grab barelyhuman/commitlog -v <span class="token number">0.0</span>.10 <span class="token comment"># get version 0.0.10 specifically,</span>
<span class="token comment"># will get the latest version if it doesn&#39;t find the tag for this specifically</span>
grab barelyhuman/mudkip <span class="token comment"># nim lang tarball</span>
grab barelyhuman/statico <span class="token comment"># go runtime tarball</span>
</code></pre></div><h2 id="commands" tabindex="-1">commands <a class="header-anchor" href="#commands" aria-hidden="true">#</a></h2><h3 id="providers" tabindex="-1">providers <a class="header-anchor" href="#providers" aria-hidden="true">#</a></h3><p>used to list the currently supported providers and their keys to be used with <code>grab</code>&#39;s <code>-p</code> flag.</p><div class="language-"><pre><code>NAME:
   grab providers - Grab&#39;s supported providers

USAGE:
   grab providers [command options] [arguments...]

OPTIONS:
   --help, -h  show help (default: false)
</code></pre></div>`,16),t=[n];function l(i,d,c,p,h,u){return o(),a("div",null,t)}var v=e(r,[["render",l]]);export{m as __pageData,v as default};
