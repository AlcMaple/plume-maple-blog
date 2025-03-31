<template><div><p>[toc]</p>
<h1 id="快捷键" tabindex="-1"><a class="header-anchor" href="#快捷键"><span>快捷键</span></a></h1>
<ol>
<li>关闭应用：command + q</li>
<li>强制关闭应用，调出活动监视器：command + option + esc</li>
<li>录屏：command + shift + 5</li>
<li>excel单元格内换行：option + enter</li>
</ol>
<h1 id="实用技巧" tabindex="-1"><a class="header-anchor" href="#实用技巧"><span>实用技巧</span></a></h1>
<ol>
<li>
<p>将鼠标停留在左上角的绿色按钮上，可以进行分屏操作</p>
</li>
<li>
<p>四指在触摸板上同时上滑，可以打开调度中心进行应用的快速切换</p>
</li>
<li>
<p>购买软件或者软体，更新的时候只要再输入一次买这个软件或软体的appleid密码就可以直接更新，不需要更换账号</p>
<blockquote>
<p>解决淘宝买号的时候，时间久了，号被封了或者被更改了密码</p>
<p>所以你买了号用来买完软件或者软体的时候，就可以换回自己的号，更新的时候只要输入买的时候的密码就行了</p>
</blockquote>
</li>
<li>
<p>剪切文件/文件夹：右键拷贝项目，在粘贴处右键，然后按住option就可以剪切项目到目的地了</p>
</li>
<li>
<p>访达图标状态下的对齐：在当前文件夹右键，整理方式选择名称即可</p>
</li>
<li>
<p>使用Google进行搜索的时候，在后面加个空格和年份就能看对应的年份的数据</p>
<blockquote>
<p>site:v2ex.com/t 毕设 2023</p>
</blockquote>
</li>
</ol>
<h1 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h1>
<h2 id="代理问题" tabindex="-1"><a class="header-anchor" href="#代理问题"><span>代理问题</span></a></h2>
<hr>
<p>在使用iterm2，git clone一些项目的时候，代理出现问题，无法git下来，要么报443，要么报网络错误</p>
<ul>
<li>解决办法</li>
</ul>
<p>在iterm2终端中设置代理，不要全复制，一个一个来</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">//</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 设置http</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">export</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> http_proxy</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">http://127.0.0.1:7890</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">//</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 设置https</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">export</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> https_proxy</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">http://127.0.0.1:7890</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">//</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 保存生效</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">source</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ~/.zshrc</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打开软件问题" tabindex="-1"><a class="header-anchor" href="#打开软件问题"><span>打开软件问题</span></a></h2>
<p>mac一般只支持打开app store里的软件或者app store + 过审的开发者的软件</p>
<p>如果遇到没有过审的开发者的软件一般不能打开，</p>
<p>此时如果要打开任何来源的软件就必须要设置一下</p>
<ul>
<li>方法一</li>
</ul>
<p>直接按住option按键，然后单击软件，点击打开的形式打开</p>
<blockquote>
<p><strong>说明</strong></p>
<p>此方法每次都要这样很麻烦</p>
</blockquote>
<ul>
<li>方法二</li>
</ul>
<p>万能方法，M1/M2/M3都可以</p>
<p>通过控制台指令：<code v-pre>sudo spctl --master-disable</code></p>
<p>此时再和平常的方式打开软件都可以打开了</p>
<h2 id="设置某类文件统一默认打开方式" tabindex="-1"><a class="header-anchor" href="#设置某类文件统一默认打开方式"><span>设置某类文件统一默认打开方式</span></a></h2>
<ol>
<li>选中需要设置默认打开方式的文件，右键单击并选择“显示简介”。</li>
<li>在“显示简介”标签页中，找到“打开方式”选项，并从下拉框中选择您希望默认打开的软件。</li>
<li>点击“全部更改”按钮，以将所有类似文件都设置为使用该软件默认打开。</li>
</ol>
<h2 id="控制台" tabindex="-1"><a class="header-anchor" href="#控制台"><span>控制台</span></a></h2>
<h3 id="配置环境变量" tabindex="-1"><a class="header-anchor" href="#配置环境变量"><span>配置环境变量</span></a></h3>
<ol>
<li>打开终端te，一定要去到根目录，一般默认就是根目录</li>
<li>检查是否有<code v-pre>.zshrc</code>文件存在：<code v-pre>touch ~/.zshrc</code>
<blockquote>
<p>这个命令在检查的时候，如果不存在会自动创建</p>
</blockquote>
</li>
<li>进入<code v-pre>zshrc</code>配置文件：<code v-pre>vim ~/.zshrc</code></li>
<li>看情况按r、q什么的进入到可阅读的状态</li>
<li>按i进入编辑模式</li>
<li>跟着原有的export语句添加环境变量</li>
<li>按下ESC使其退出编辑模式进入命令行模式</li>
<li>输入<code v-pre>:wq</code>+enter结束配置文件</li>
<li>最后保存配置文件：<code v-pre>source ~/.zshrc</code></li>
</ol>
<blockquote>
<p><strong>说明</strong>
这种方式最好，不要使用open的方式打开vim，用上面的这种方式
这样你在下一次打开te的时候，配置的环境变量还在，不会丢失什么的
这个是最好的方式了，相信！！！</p>
</blockquote>
<h3 id="输出目录树结构" tabindex="-1"><a class="header-anchor" href="#输出目录树结构"><span>输出目录树结构</span></a></h3>
<p>安装tree：brew install tree</p>
<ul>
<li>常用命令
<ul>
<li><code v-pre>tree -I &quot;node_modules&quot;</code>：过滤文件/文件夹</li>
<li>tree：查看当前目录树结构</li>
</ul>
</li>
</ul>
<h2 id="调整顶部右侧软件的菜单位置" tabindex="-1"><a class="header-anchor" href="#调整顶部右侧软件的菜单位置"><span>调整顶部右侧软件的菜单位置</span></a></h2>
<ul>
<li>按住command键，然后鼠标拖动即可</li>
</ul>
<h2 id="查看mac-os版本" tabindex="-1"><a class="header-anchor" href="#查看mac-os版本"><span>查看mac OS版本</span></a></h2>
<ul>
<li>左上角有个苹果</li>
<li>点击苹果，然后关于本机就能看到了</li>
</ul>
<h2 id="查看mac是否有显卡" tabindex="-1"><a class="header-anchor" href="#查看mac是否有显卡"><span>查看mac是否有显卡</span></a></h2>
<ul>
<li>命令：system_profiler SPDisplaysDataType</li>
<li>如果有输出证明有显卡，可能不是独显，集成显卡也算</li>
</ul>
<h2 id="废纸篓部分无法删除" tabindex="-1"><a class="header-anchor" href="#废纸篓部分无法删除"><span>废纸篓部分无法删除</span></a></h2>
<ul>
<li>显示“不能完成此操作，因为项目“***”正在使用中”</li>
<li>终端命令：sudo rm -rf ~/.Trash/*</li>
<li><code v-pre>-r</code>: 递归删除，可以删除文件夹及其内容</li>
<li><code v-pre>-f</code>: 强制删除，不提示确认</li>
<li><code v-pre>~</code>: 代表用户主目录</li>
<li><code v-pre>.Trash</code>: Mac系统的回收站文件夹</li>
<li><code v-pre>/*</code>: （回收站）内的所有内容</li>
<li><strong>清空当前用户 macOS 系统中的“废纸篓”（Trash）</strong></li>
</ul>
<h2 id="typora配置损坏" tabindex="-1"><a class="header-anchor" href="#typora配置损坏"><span>typora配置损坏</span></a></h2>
<ul>
<li>
<p>状态就是，你只能打开一个 md 文件，无法同时作用两个 md 文件</p>
</li>
<li>
<p>除非你退出软件，重新打开一个新的 md 文件</p>
</li>
<li>
<p>解决方案，先<strong>关闭软件</strong>，然后终端运行命令</p>
</li>
<li>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 备份</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">mkdir</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ~/typora_backup</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">cp</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -r</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ~/Library/Application</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\ </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Support/abnerworks.Typora</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ~/typora_backup/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 删除 Typora 配置</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">rm</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -rf</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ~/Library/Application</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\ </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Support/abnerworks.Typora</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">rm</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -rf</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ~/Library/Preferences/abnerworks.Typora.plist</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">rm</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -rf</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ~/Library/Saved</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\ </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Application</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\ </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">State/abnerworks.Typora.savedState</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">rm</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -rf</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ~/Library/Caches/abnerworks.Typora</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>我来解释一下</p>
</li>
<li>
<p><code v-pre>mkdir ~/typora_backup</code> - 尝试创建备份文件夹</p>
<ul>
<li><strong>重复执行问题</strong>: 如果文件夹已存在，会显示错误但不会中断执行</li>
</ul>
</li>
<li>
<p>cp -r ~/Library/Application\ Support/abnerworks.Typora ~/typora_backup/</p>
<ul>
<li><strong>重复执行问题</strong>: 会直接覆盖之前的备份，而不是追加</li>
</ul>
</li>
<li>
<p>备份内容说明</p>
<ul>
<li>个性化设置：窗口大小、字体、颜色等界面设置</li>
<li>自定义主题：如果你安装了额外的 Markdown 主题</li>
<li>快捷键配置：如果你自定义了任何快捷键</li>
<li>最近打开的文件记录：文件历史</li>
<li>自动保存的草稿：未保存内容的临时备份</li>
<li>插件设置：如果你使用了任何 Typora 插件</li>
</ul>
</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 完全删除 Typora 配置</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">rm</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -rf</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ~/Library/Application</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\ </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Support/abnerworks.Typora</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">rm</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -rf</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ~/Library/Preferences/abnerworks.Typora.plist</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">rm</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -rf</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ~/Library/Saved</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\ </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Application</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\ </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">State/abnerworks.Typora.savedState</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">rm</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -rf</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ~/Library/Caches/abnerworks.Typora</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>执行会删除当前的配置文件，让 Typora 下次启动时重新创建默认配置。</li>
</ul>
<h2 id="清理硬盘空间" tabindex="-1"><a class="header-anchor" href="#清理硬盘空间"><span>清理硬盘空间</span></a></h2>
<ul>
<li>温馨提示：有条件就不要清理硬盘空间，这是最好的</li>
<li>正常使用只要清理垃圾桶就够了</li>
<li>最佳使用方案，按照上述有关的du查找所有的数据，然后让Claude帮你清理</li>
<li>下面的代码和过程仅供参考</li>
</ul>
<h3 id="系统数据" tabindex="-1"><a class="header-anchor" href="#系统数据"><span>系统数据</span></a></h3>
<ul>
<li>
<p>终端命令：du -sh ~/Library/* | sort -hr       ----&gt;    查看电脑文件夹占用空间情况</p>
</li>
<li>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">21G</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Containers</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 17G</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Application</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Support</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">9.1G</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Caches</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">2.1G</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/pnpm</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">180M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Biome</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">167M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Group</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Containers</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 87M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Metadata</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 51M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/IntelligencePlatform</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 42M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/HTTPStorages</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 29M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Mobile</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Documents</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 24M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Daemon</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Containers</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 18M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Keychains</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 17M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Weather</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 17M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Receipts</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 15M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/HomeKit</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 14M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Fonts</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 13M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Google</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>清理缓存（安全）：rm -rf ~/Library/Caches/*</p>
</li>
<li>
<p>查看Containers目录的占用空间情况：du -sh ~/Library/Containers/* | sort -hr</p>
</li>
<li>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 11G</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Containers/com.tencent.xinWeChat</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">7.6G</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Containers/com.tencent.qq</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">909M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Containers/com.chitaner.Longshot</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">704M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Containers/com.baidu.netdisk</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">284M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Containers/com.tencent.meeting</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">106M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Containers/com.microsoft.Word</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 97M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Containers/com.microsoft.Excel</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 96M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Containers/com.apple.photoanalysisd</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 87M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Containers/com.apple.mediaanalysisd</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 87M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Containers/com.apple.geod</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 80M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Containers/com.apple.AMPArtworkAgent</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 26M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Containers/com.apple.iBooksX</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 25M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Containers/com.apple.AppStore</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 18M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Containers/com.apple.CloudDocs.iCloudDriveFileProvider</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 13M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Containers/com.apple.stocks.widget</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 11M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Containers/com.apple.StoreKit.UIService</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">5.7M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Containers/EA303482-432D-47AE-8A2B-E00E35C3D8FE</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">5.6M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Containers/com.apple.Maps</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">5.5M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Containers/com.apple.Safari</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">4.6M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Containers/com.natfrp.launcher.ui</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">4.3M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Containers/com.apple.photolibraryd</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">4.1M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Containers/com.apple.systempreferences.AppleIDSettings</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">3.8M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Containers/com.apple.mail</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">3.1M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Containers/com.chitaner.Picview</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">3.0M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Containers/com.apple.siri.media-indexer</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">2.1M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Containers/com.apple.weather</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">1.8M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Containers/com.apple.mediastream.mstreamd</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">1.7M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Containers/com.apple.weather.widget</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">1.6M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Containers/com.apple.clock.WorldClockWidget</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">1.4M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Containers/com.tencent.WeWorkMac</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">1.3M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Containers/com.apple.Notes</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">1.3M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Containers/com.apple.Apple</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>基本上都是腾讯占用内存多</p>
</li>
<li>
<p>清理微信</p>
</li>
<li>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 清理微信缓存(实际上并没有什么卵用，清一下咯)</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">rm</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -rf</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ~/Library/Containers/com.tencent.xinWeChat/Data/Library/Caches/</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 检查并清理微信聊天记录存储位置(实际上并没有什么卵用，清一下咯)</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ls</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -lah</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ~/Library/Containers/com.tencent.xinWeChat/Data/Library/Application</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\ </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Support/com.tencent.xinWeChat/</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>微信设置，管理存储空间，里面有清理缓存和聊天数据按钮，清理一下</p>
</li>
<li>
<p>聊天数据选择你要清理的吧</p>
</li>
<li>
<p>同理清理QQ</p>
</li>
<li>
<p>QQ设置，存储管理，一样清理聊天文件he缓存数据</p>
</li>
<li>
<p>清理其他应用的缓存，空间较大的那种</p>
</li>
<li>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 清理Longshot缓存</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">rm</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -rf</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ~/Library/Containers/com.chitaner.Longshot/Data/Library/Caches/</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 删除百度网盘缓存文件</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">find</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ~/Library/Containers/com.baidu.netdisk/Data/Library/Caches/</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -type</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> f</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -delete</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 删除腾讯会议缓存文件</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">find</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ~/Library/Containers/com.tencent.meeting/Data/Library/Caches/</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -type</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> f</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -delete</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>查看Application support目录的占用空间情况：du -sh ~/Library/Application\ Support/* | sort -hr</p>
</li>
<li>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 13G</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Application</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Support/com.netease.mumu.nemux</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">1.5G</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Application</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Support/Google</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">669M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Application</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Support/微信开发者工具</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">637M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Application</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Support/Code</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">275M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Application</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Support/obsidian</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">174M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Application</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Support/com.netease.uuremote.updater</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">136M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Application</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Support/SPlayer</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">132M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Application</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Support/com.apple.mobileAssetDesktop</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">102M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Application</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Support/WeType</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 36M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Application</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Support/hmcl</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 25M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Application</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Support/com.netease.uuremote</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 21M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Application</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Support/x</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 13M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Application</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Support/Knowledge</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 11M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Application</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Support/AddressBook</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">7.8M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Application</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Support/com.apple.ProtectedCloudStorage</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">6.8M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Application</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Support/com.apple.spotlight</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">6.8M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Application</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Support/CloudDocs</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">3.7M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Application</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Support/HBuilder</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> X</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">3.3M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Application</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Support/Animoji</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">3.2M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Application</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Support/com.apple.MediaPlayer</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">3.2M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Application</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Support/GitHub</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Desktop</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">3.1M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Application</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Support/networkserviceproxy</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">2.2M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Application</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Support/CallHistoryDB</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">1.1M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Application</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Support/Ollama</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">924K</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Application</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Support/com.nektony.App-Cleaner-SIII</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">644K</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Application</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Support/FileProvider</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">636K</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library/Application</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Support/typora-</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>清理前最好关闭应用，不过我觉得没关系就是了</p>
</li>
<li>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 清理微信开发者工具缓存</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">rm</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -rf</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ~/Library/Application</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\ </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Support/微信开发者工具/Cache</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 清理VS Code缓存</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">rm</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -rf</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ~/Library/Application</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\ </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Support/Code/Cache/</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">*</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">rm</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -rf</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ~/Library/Application</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\ </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Support/Code/CachedData/</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 清理网易遥控器更新缓存</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">rm</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -rf</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ~/Library/Application</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\ </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Support/com.netease.uuremote.updater/Cache</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 清理SPlayer缓存</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">rm</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -rf</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ~/Library/Application</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\ </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Support/SPlayer/Cache</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>清理浏览器缓存，在浏览器设置中有这个选项</p>
</li>
<li>
<p>清理pnpm</p>
</li>
<li>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 清理未使用的包</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> store</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> prune</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 或更彻底清理</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> store</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> prune</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --force</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>清理Biome：<code v-pre>rm -rf ~/Library/Biome</code></p>
</li>
</ul>
<h3 id="文稿" tabindex="-1"><a class="header-anchor" href="#文稿"><span>文稿</span></a></h3>
<ul>
<li>
<p>查找用户目录下占用空间最大的文件夹：du -sh ~/* ~/.* | sort -hr | head -20</p>
</li>
<li>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 42G</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/.cache</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 30G</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Library</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">8.2G</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Downloads</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">3.8G</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/.ollama</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">2.6G</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/.npm</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">1.3G</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/.nvm</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">553M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/.deepface</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">465M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Pictures</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">379M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/.cargo</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">350M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/.vscode</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">345M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/.yarn</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">256M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/kotones-auto-assistant</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">206M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/amazon-corretto-8.jdk</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">203M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/.local</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">194M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/PandoraCanvas</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 92M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/.bun</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 70M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/.openjfx</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 39M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/AstrBot</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 18M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/Music</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> 15M</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    /Users/mac/.wakatime</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>清理缓存：rm -rf ~/.cache/*</p>
</li>
<li>
<p>查看你的 Downloads 文件夹，手动清除你不需要的</p>
</li>
<li>
<p>清理 npm 缓存：npm cache clean --force</p>
</li>
<li>
<p>现在空间应该释放完毕了，最后有条件的就重启电脑吧</p>
</li>
</ul>
</div></template>


