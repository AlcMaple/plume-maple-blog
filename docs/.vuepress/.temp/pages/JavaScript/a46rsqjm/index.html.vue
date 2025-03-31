<template><div><p>[toc]</p>
<h1 id="未定义" tabindex="-1"><a class="header-anchor" href="#未定义"><span>未定义</span></a></h1>
<p><code v-pre>Uncaught ReferenceError: TweenLite is not defined</code></p>
<p>此报错说明了<code v-pre>TweenLite</code>未定义，如果你的代码中没有涉及到这个变量或者函数、常量等定义，</p>
<p>可能这是一个库</p>
<blockquote>
<p><code v-pre>TweenLite</code>是来自于<code v-pre>GSAP</code>的动画库</p>
</blockquote>
<ul>
<li>解决方案：HTML引入<code v-pre>CDN</code>链接</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">head</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">script</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> src</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">>&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">head</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="后缀操作无效" tabindex="-1"><a class="header-anchor" href="#后缀操作无效"><span>后缀操作无效</span></a></h1>
<p><code v-pre>ReferenceError: Invalid left-hand side expression in postfix operation</code></p>
<ul>
<li>
<p>翻译过来就是：<code v-pre>ReferenceError:后缀操作中的左侧表达式无效</code></p>
</li>
<li>
<p>原因是你在不能使用后缀运算符的地方使用了后缀运算符</p>
</li>
<li>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> m</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> Map</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    for</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> ch</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> of</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> s</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">        if</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">m</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">has</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ch</span><span style="--shiki-light:#999999;--shiki-dark:#666666">))</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">            m</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">get</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ch</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">++</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 报错：ReferenceError: Invalid left-hand side expression in postfix operation</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> else</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">            m</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">set</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ch</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>比如像这种，Map容器不是一个可以直接修改的可变对象，<code v-pre>m.get(ch)</code>是返回Map中的值，不能直接修改</p>
</li>
<li>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">/**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * </span><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">param</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> s</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * </span><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">return</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> */</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">var</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> longestPalindrome</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> function</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">s</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    if</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">s</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">length</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> ==</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> return</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // 1、创建map对象，将字符串的每个值保存到map对象并累计计数</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // 2、如果该字符在map对象中已存在，则计数+1，否则将该字符存入map对象，并设置计数1</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // 3、遍历map对象，若字符的值为偶数，则最终结果长度 = 当前结果长度 + 偶数数量</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // 4、根据是否有奇数返回结果长度 / 结果长度 + 1</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">    const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> m</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> Map</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    for</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> ch</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> of</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> s</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">        if</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">m</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">has</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ch</span><span style="--shiki-light:#999999;--shiki-dark:#666666">))</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">            m</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">set</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ch</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> m</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">get</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ch</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> +</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> else</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">            m</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">set</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ch</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>正确的做法</p>
</li>
</ul>
<h1 id="错误的使用方式" tabindex="-1"><a class="header-anchor" href="#错误的使用方式"><span>错误的使用方式</span></a></h1>
<ul>
<li>
<p>在使用Set对象时，报错<code v-pre>TypeError: number 1 is not iterable (cannot read property Symbol(Symbol.iterator))</code></p>
</li>
<li>
<p>这个错误是在初始化Set对象时，传递了多个参数导致的，Set只支持传递一个参数，这个参数能接收可迭代对象</p>
</li>
<li>
<p>如果要将一个数组里的所有元素作为初始化Set对象</p>
</li>
<li>
<p>错误的初始化方式</p>
</li>
<li>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> Set</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(...</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">nums</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // TypeError: number 1 is not iterable (cannot read property Symbol(Symbol.iterator))</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>正确的初始化方式</p>
</li>
<li>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> arr</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> Set</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">nums</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<h1 id="修改常量引发报错" tabindex="-1"><a class="header-anchor" href="#修改常量引发报错"><span>修改常量引发报错</span></a></h1>
<p><code v-pre>TypeError: Assignment to constant variable.</code></p>
<ul>
<li>
<p>当出现这个报错的时候，证明你的操作是修改常量</p>
</li>
<li>
<p>常见的错误</p>
</li>
<li>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">/**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * </span><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">param</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">number[]</span><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> nums</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * </span><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">return</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">void</span><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> Do not return anything, modify nums in-place instead.</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> */</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">var</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> moveZeroes</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> function</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">nums</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">    let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> slow_ptr</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    for</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> ele</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> of</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> nums</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">        if</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ele</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> !=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            [</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">nums</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">slow_ptr</span><span style="--shiki-light:#999999;--shiki-dark:#666666">],</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> ele</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ele</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> nums</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">slow_ptr</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]]</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">            slow_ptr</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">++</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    return</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> nums</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>这里交换数组的两个元素，会修改原数组，哪怕你引入第三变量还是要修改值的，因此用for……of是错误的</p>
</li>
</ul>
</div></template>


