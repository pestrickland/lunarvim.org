import{r as l,o as r,c,a as s,b as e,w as i,F as p,e as t,d as n}from"./app.ccf5a8e7.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const d={},h=t(`<h1 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h1><h2 id="general" tabindex="-1"><a class="header-anchor" href="#general" aria-hidden="true">#</a> General</h2><ol><li>Make sure to check that you have a recent Neovim version with <code>luajit</code> support. The output of version information <code>nvim -v</code> should include a line for: <code>LuaJIT</code>.</li><li>Make sure all the dependencies listed in <a href="#manual-install">Manual Install</a> are actually installed on your system.</li></ol><h2 id="unable-to-run-lvim" tabindex="-1"><a class="header-anchor" href="#unable-to-run-lvim" aria-hidden="true">#</a> Unable to run <code>lvim</code></h2><p>Make sure that <code>lvim</code> is available and executable on your path. You can check the results of these commands to verify that</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">which</span> lvim
<span class="token function">stat</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">which</span> lvim<span class="token variable">)</span></span>&quot;</span>
<span class="token function">cat</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">which</span> lvim<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>If you get errors with any of the above commands, then you need to either fix that manually or reinstall the binary again.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>lunarvim-repo<span class="token operator">&gt;</span> <span class="token comment"># this will be in \`~/.local/share/lunarvim/lvim\` by default</span>
<span class="token function">bash</span> utils/installer/install_bin.sh
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="getting-a-lot-of-errors-when-opening-lvim-after-an-update" tabindex="-1"><a class="header-anchor" href="#getting-a-lot-of-errors-when-opening-lvim-after-an-update" aria-hidden="true">#</a> Getting a lot of errors when opening <code>lvim</code> after an update</h2><p>This might be the result of old cache files that need to be reset. LunarVim makes use of those to optimize the startup procedure and deliver a pleasant experience.</p><p>You can run <code>LvimCacheReset</code> to fix most of these issues.</p><ol><li>while running LunarVim: <code>:LvimCacheReset</code></li><li>from the CLI: <code>lvim +LvimCacheReset</code></li></ol><p>If that doesn&#39;t work, try re-syncing your plugins:</p><ol><li>while running LunarVim: <code>:PackerSync</code></li><li>from the CLI: <code>lvim +PackerSync</code></li></ol><h2 id="lunarvim-is-slow" tabindex="-1"><a class="header-anchor" href="#lunarvim-is-slow" aria-hidden="true">#</a> LunarVim is slow!</h2><h3 id="are-you-using-fish" tabindex="-1"><a class="header-anchor" href="#are-you-using-fish" aria-hidden="true">#</a> are you using <code>fish</code>?</h3><blockquote><p>First of all, it is not recommended to set shell to fish in vim. Plenty of vim addons execute fish-incompatible shellscript, so setting it to /bin/sh is typically better, especially if you have no good reason to set it to fish.</p></blockquote><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>vim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>shell <span class="token operator">=</span> <span class="token string">&quot;/bin/sh&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,18),m=n("See "),v={href:"https://github.com/fish-shell/fish-shell/issues/7004",target:"_blank",rel:"noopener noreferrer"},b=n("fish-shell/fish-shell#7004"),f=n(" and "),g=s("code",null,":h 'shell'",-1),k=n(" for more info."),_=s("h2",{id:"language-server-xxx-does-not-start-for-me",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#language-server-xxx-does-not-start-for-me","aria-hidden":"true"},"#"),n(" Language server XXX does not start for me!")],-1),y=s("h3",{id:"is-it-overriden",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#is-it-overriden","aria-hidden":"true"},"#"),n(" is it overriden?")],-1),x=n("This could be due to the fact that the server is "),w=n("overridden"),L=t(`<div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">--- is it in this list?</span>
<span class="token punctuation">:</span>lua <span class="token function">print</span><span class="token punctuation">(</span>vim<span class="token punctuation">.</span><span class="token function">inspect</span><span class="token punctuation">(</span>lvim<span class="token punctuation">.</span>lsp<span class="token punctuation">.</span>override<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>If that&#39;s the case, then you need to either remove it from that list and re-run <code>:LvimCacheReset</code></p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>lsp<span class="token punctuation">.</span>override <span class="token operator">=</span> vim<span class="token punctuation">.</span><span class="token function">tbl_filter</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
  <span class="token keyword">return</span> name <span class="token operator">~=</span> <span class="token string">&quot;eslint&quot;</span>
<span class="token keyword">end</span><span class="token punctuation">,</span> lvim<span class="token punctuation">.</span>lsp<span class="token punctuation">.</span>override<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,3),q=n("or set it up "),I=n("manually"),V=n("."),C={id:"is-it-supported-by-nvim-lsp-installer",tabindex:"-1"},R=s("a",{class:"header-anchor",href:"#is-it-supported-by-nvim-lsp-installer","aria-hidden":"true"},"#",-1),T=n(" is it supported by "),N={href:"https://github.com/williamboman/nvim-lsp-installer",target:"_blank",rel:"noopener noreferrer"},M=n("nvim-lsp-installer"),S=n("?"),B=s("p",null,[n("Any server that does not show up in "),s("code",null,"LspInstallInfo"),n(" needs to be installed manually.")],-1),E=s("h3",{id:"is-it-at-least-showing-up-in-lspinfo",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#is-it-at-least-showing-up-in-lspinfo","aria-hidden":"true"},"#"),n(" is it at least showing up in "),s("code",null,":LspInfo"),n("?")],-1),F=n("Check out the tips for "),P={href:"https://github.com/neovim/nvim-lspconfig#debugging",target:"_blank",rel:"noopener noreferrer"},X=n("debugging nvim-lspconfig"),j=n("."),A=s("h2",{id:"too-many-language-servers-are-starting-at-once",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#too-many-language-servers-are-starting-at-once","aria-hidden":"true"},"#"),n(" Too many language servers are starting at once!")],-1),G=n("Are any of these servers "),Y=n("overridden"),$=n(" by default?"),z=t(`<div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token punctuation">:</span>lua <span class="token function">print</span><span class="token punctuation">(</span>vim<span class="token punctuation">.</span><span class="token function">inspect</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;lvim.lsp.config&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>override<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,1),J=n("If they are then you are using the syntax prior to "),U={href:"https://github.com/LunarVim/LunarVim/pull/1813",target:"_blank",rel:"noopener noreferrer"},D=n("LunarVim#1813"),H=n("."),K=t(`<div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">-- this is the correct syntax since 3dd60bd</span>
vim<span class="token punctuation">.</span><span class="token function">list_extend</span><span class="token punctuation">(</span>lvim<span class="token punctuation">.</span>lsp<span class="token punctuation">.</span>override<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string">&quot;jsonls&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,1);function O(Q,W){const a=l("ExternalLinkIcon"),o=l("RouterLink");return r(),c(p,null,[h,s("p",null,[m,s("a",v,[b,e(a)]),f,g,k]),_,y,s("p",null,[x,e(o,{to:"/languages/#server-override"},{default:i(()=>[w]),_:1})]),L,s("p",null,[q,e(o,{to:"/languages/#server-setup"},{default:i(()=>[I]),_:1}),V]),s("h3",C,[R,T,s("a",N,[M,e(a)]),S]),B,E,s("p",null,[F,s("a",P,[X,e(a)]),j]),A,s("p",null,[G,e(o,{to:"/languages/#server-override"},{default:i(()=>[Y]),_:1}),$]),z,s("p",null,[J,s("a",U,[D,e(a)]),H]),K],64)}var sn=u(d,[["render",O]]);export{sn as default};
