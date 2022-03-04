import{r as a,o as s,c as r,a as e,b as o,F as i,d as n,e as l}from"./app.ccf5a8e7.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const h={},c={id:"nerd-fonts",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#nerd-fonts","aria-hidden":"true"},"#",-1),_=n(),p={href:"https://www.nerdfonts.com/",target:"_blank",rel:"noopener noreferrer"},u=n(" Nerd Fonts "),m=e("p",null,"From the repo:",-1),g=e("blockquote",null,[e("p",null,`"Nerd Fonts is a project that patches developer targeted fonts with a high number of glyphs (icons). Specifically to add a high number of extra glyphs from popular 'iconic fonts' such as Font Awesome \u27B6, Devicons \u27B6, Octicons \u27B6, and others."`)],-1),b=e("h2",{id:"installing-a-font",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-a-font","aria-hidden":"true"},"#"),n(" Installing a font")],-1),w=e("h3",{id:"video-explanation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#video-explanation","aria-hidden":"true"},"#"),n(" Video Explanation")],-1),y={href:"https://www.youtube.com/watch?v=fR4ThXzhQYI&t=364s",target:"_blank",rel:"noopener noreferrer"},x=n("Installing fonts with included icon sets"),v=e("h3",{id:"easy-installer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#easy-installer","aria-hidden":"true"},"#"),n(" Easy Installer")],-1),k=n("Visit "),F={href:"https://github.com/ronniedroid/getnf",target:"_blank",rel:"noopener noreferrer"},T=n("this repo"),N=n(" for an easy way to install nerd fonts."),I=e("h3",{id:"manual-install",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#manual-install","aria-hidden":"true"},"#"),n(" Manual Install")],-1),V=n("To to the "),C={href:"https://www.nerdfonts.com/font-downloads",target:"_blank",rel:"noopener noreferrer"},D=n("pached fonts directory"),E=e("li",null,[n("Copy the downloaded files to "),e("code",null,"~/.local/share/fonts")],-1),S=l(`<h3 id="curl-download" tabindex="-1"><a class="header-anchor" href="#curl-download" aria-hidden="true">#</a> Curl Download</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p ~/.local/share/fonts
<span class="token builtin class-name">cd</span> ~/.local/share/fonts <span class="token operator">&amp;&amp;</span> <span class="token function">curl</span> -fLo <span class="token string">&quot;Droid Sans Mono for Powerline Nerd Font Complete.otf&quot;</span> https://github.com/ryanoasis/nerd-fonts/raw/master/patched-fonts/DroidSansMono/complete/Droid%20Sans%20Mono%20Nerd%20Font%20Complete.otf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="ttf-vs-otf" tabindex="-1"><a class="header-anchor" href="#ttf-vs-otf" aria-hidden="true">#</a> TTF vs OTF</h3><p>OTF is a newer standard based on TTF, when given the option you should generally choose OTF.</p>`,4),M={href:"https://www.makeuseof.com/tag/otf-vs-ttf-fonts-one-better/",target:"_blank",rel:"noopener noreferrer"},O=n(" Here "),q=n(" is good article explaining the difference."),B=e("h2",{id:"terminal-settings",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#terminal-settings","aria-hidden":"true"},"#"),n(" Terminal settings")],-1),L=e("p",null,[n("After installing your font, you will have to refresh your font cache by doing "),e("code",null,"fc-cache -f -v"),n(". Then you will have to change your terminal settings to use the font you just installed. Please refer to your terminal's documentation for changing the terminal font.")],-1);function j(A,P){const t=a("ExternalLinkIcon");return s(),r(i,null,[e("h1",c,[f,_,e("a",p,[u,o(t)])]),m,g,b,w,e("p",null,[e("a",y,[x,o(t)])]),v,e("p",null,[k,e("a",F,[T,o(t)]),N]),I,e("ol",null,[e("li",null,[V,e("a",C,[D,o(t)])]),E]),S,e("p",null,[e("a",M,[O,o(t)]),q]),B,L],64)}var Q=d(h,[["render",j]]);export{Q as default};
