import{e as a}from"./app.ccf5a8e7.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=a(`<h1 id="terraform" tabindex="-1"><a class="header-anchor" href="#terraform" aria-hidden="true">#</a> Terraform</h1><h2 id="syntax-highlighting" tabindex="-1"><a class="header-anchor" href="#syntax-highlighting" aria-hidden="true">#</a> Syntax highlighting</h2><p>First, within LunarVim run the following:</p><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>TSInstall hcl
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>To enable Syntax Highlighting for <code>.tf</code> files as well, just add this to your <code>config.lua</code>:</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token keyword">local</span> parser_configs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;nvim-treesitter.parsers&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get_parser_configs</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
parser_configs<span class="token punctuation">.</span>hcl <span class="token operator">=</span> <span class="token punctuation">{</span>
  filetype <span class="token operator">=</span> <span class="token string">&quot;hcl&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;terraform&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="supported-language-servers" tabindex="-1"><a class="header-anchor" href="#supported-language-servers" aria-hidden="true">#</a> Supported language servers</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>terraform <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;terraform&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;terraformls&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="supported-formatters" tabindex="-1"><a class="header-anchor" href="#supported-formatters" aria-hidden="true">#</a> Supported formatters</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>terraform <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;terraform&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,10);function t(r,o){return e}var c=n(s,[["render",t]]);export{c as default};
