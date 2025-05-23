<template><div><p>[toc]</p>
<h1 id="思想" tabindex="-1"><a class="header-anchor" href="#思想"><span>思想</span></a></h1>
<ul>
<li>动态规划（Dynamic Programming, DP）思想</li>
<li>将原问题分解为多个子问题，<strong>利用子问题的解</strong>来构造原问题的解</li>
<li>有一个特点，子问题会重复计算，不过可以通过存储已经计算过子问题的解避免重复计算，由于这个特点，DP思想的<strong>时间复杂度至少为O（n*target）</strong>，n是数组的长度，target是数组和一半</li>
<li>优化方面（并不是优化时间复杂度，要知道至少的含金量），原问题的解能够通过子问题的最优解来构造，即原问题的解必然是子问题解的组合</li>
</ul>
<h1 id="解题步骤" tabindex="-1"><a class="header-anchor" href="#解题步骤"><span>解题步骤</span></a></h1>
<ul>
<li>定义状态：确定一个状态表示子问题的解，状态一般<strong>用变量或者数组</strong>表示</li>
<li>边界条件：定义初始条件，表示最小的子问题，通常为<strong>0或者1</strong>（并不局限于两种情况，可能是与0有关的整个循环）</li>
<li>状态转移方程：通过已有的子问题解来求解当前子问题的关系</li>
<li>迭代求解：通过前两步，从最小的子问题开始，推导出更大的子问题的解，最终得到原问题的解</li>
<li>返回结果：通常是数组的最后一个元素</li>
</ul>
<h1 id="如何促成解题步骤" tabindex="-1"><a class="header-anchor" href="#如何促成解题步骤"><span>如何促成解题步骤</span></a></h1>
<h2 id="定义状态" tabindex="-1"><a class="header-anchor" href="#定义状态"><span>定义状态</span></a></h2>
<ul>
<li>考虑如何使用一个数组来表示这个信息</li>
<li>定义状态，即<strong>定义子问题的解</strong>，要包含所有的情况，暴力起来！！！</li>
<li>可以从题目的问题出发，以案例使用最小花费爬楼梯来说，<strong>题目的问题是计算并返回达到楼梯顶部的最低花费</strong>，那么它的子问题的解可以是，到达某个楼梯的最小花费是多少，这个就是它的状态定义，<code v-pre>dp[i]</code>，表示到达第<code v-pre>i</code>个台阶的最小花费</li>
<li>例如背包问题（多维动态规划），定义<code v-pre>dp[i][j]</code>表示为前<code v-pre>i</code>个物品中能否恰好装满容量为<code v-pre>j</code>的背包</li>
</ul>
<h2 id="边界条件" tabindex="-1"><a class="header-anchor" href="#边界条件"><span>边界条件</span></a></h2>
<ul>
<li>最简单的子问题的解，一般是**“空问题”<strong>或者</strong>某种基础状态**</li>
<li>“空问题”就是不存在的子问题的解，但是它又是边界条件，是迭代求解的前提</li>
<li>比如分割等和子集，这个数组包含正整数且非空，那么和为0就是不存在的子问题的解，但是它又是边界条件，是迭代求解的前提</li>
</ul>
<h2 id="状态转移方程" tabindex="-1"><a class="header-anchor" href="#状态转移方程"><span>状态转移方程</span></a></h2>
<ul>
<li>找到<strong>子问题间的关系</strong></li>
<li>一般的式子都是，dp[i]、dp[i-1]、dp[i-2]……和n的关系</li>
</ul>
<h2 id="迭代求解" tabindex="-1"><a class="header-anchor" href="#迭代求解"><span>迭代求解</span></a></h2>
<ul>
<li>通过自顶向下或者自底向上的方法，依次求解子问题，最后得到原问题的解</li>
<li>例如背包问题，遍历所有的物品和容量，依次更新<code v-pre>dp</code>数组</li>
</ul>
<h2 id="返回结果" tabindex="-1"><a class="header-anchor" href="#返回结果"><span>返回结果</span></a></h2>
<ul>
<li>通常，数组的最后一项就是答案</li>
</ul>
<h1 id="案例解析" tabindex="-1"><a class="header-anchor" href="#案例解析"><span>案例解析</span></a></h1>
<h2 id="使用最小花费爬楼梯" tabindex="-1"><a class="header-anchor" href="#使用最小花费爬楼梯"><span>使用最小花费爬楼梯</span></a></h2>
<p><a href="https://leetcode.cn/problems/min-cost-climbing-stairs/description/?envType=study-plan-v2&amp;envId=dynamic-programming" target="_blank" rel="noopener noreferrer">使用最小花费爬楼梯</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">746.</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 使用最小花费爬楼梯</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">给你一个整数数组</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> cost</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ，其中</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> cost[i]</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 是从楼梯第</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">你可以选择从下标为</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 或下标为</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 的台阶开始爬楼梯。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">请你计算并返回达到楼梯顶部的最低花费。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">示例</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 1：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">输入：cost</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> =</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [10,15,20]</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">输出：15</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">解释：你将从下标为</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 的台阶开始。</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 支付</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 15</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ，向上爬两个台阶，到达楼梯顶部。</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">总花费为</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 15</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">示例</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 2：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">输入：cost</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> =</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [1,100,1,1,1,100,1,1,100,1]</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">输出：6</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">解释：你将从下标为</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 的台阶开始。</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 支付</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ，向上爬两个台阶，到达下标为</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 2</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 的台阶。</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 支付</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ，向上爬两个台阶，到达下标为</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 4</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 的台阶。</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 支付</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ，向上爬两个台阶，到达下标为</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 6</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 的台阶。</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 支付</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ，向上爬一个台阶，到达下标为</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 7</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 的台阶。</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 支付</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ，向上爬两个台阶，到达下标为</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 9</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 的台阶。</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 支付</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ，向上爬一个台阶，到达楼梯顶部。</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">总花费为</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 6</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 。</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">提示：</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">2</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> cost.length</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1000</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">0</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> cost[i]</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 999</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>如何定义状态，从题目的问题出发</li>
<li>定义状态，其实就是找子问题的解</li>
<li><strong>题目的问题是计算并返回达到楼梯顶部的最低花费</strong>，那么它的子问题的解可以是，到达某个楼梯的最小花费是多少，这个就是它的状态定义，<code v-pre>dp[i]</code>，表示到达第<code v-pre>i</code>个台阶的最小花费</li>
</ul>
<h2 id="编辑距离" tabindex="-1"><a class="header-anchor" href="#编辑距离"><span>编辑距离</span></a></h2>
<p><a href="https://leetcode.cn/problems/edit-distance/description/?envType=study-plan-v2&amp;envId=top-100-liked" target="_blank" rel="noopener noreferrer">编辑距离</a></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">72.</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 编辑距离</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">给你两个单词</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> word1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 和</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> word2，</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 请返回将</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> word1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 转换成</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> word2</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 所使用的最少操作数</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">你可以对一个单词进行如下三种操作：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">插入一个字符</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">删除一个字符</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">替换一个字符</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">示例</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 1：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">输入：word1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">horse</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> word2</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">ros</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">输出：3</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">解释：</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">horse</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> -</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> rorse</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> (将 </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">h</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 替换为</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">r</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">)</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">rorse</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> -</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> rose</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> (删除 </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">r</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">)</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">rose</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> -</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ros</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> (删除 </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">e</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">)</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">示例</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 2：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">输入：word1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">intention</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> word2</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">execution</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">输出：5</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">解释：</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">intention</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> -</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> inention</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> (删除 </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">t</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">)</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">inention</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> -</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> enention</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> (将 </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">i</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 替换为</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">e</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">)</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">enention</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> -</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> exention</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> (将 </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 替换为</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">x</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">)</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">exention</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> -</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> exection</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> (将 </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 替换为</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">c</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">)</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">exection</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> -</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> execution</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> (插入 </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">u</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">提示：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">0</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> word1.length,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> word2.length</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 500</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">word1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 和</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> word2</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 由小写英文字母组成</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>这里<strong>边界条件</strong>需要考虑基础状态</li>
<li>比如当words1或者words2为空字符串的时候，它们转换到对方是由对方的字符串长度决定的</li>
<li>需要边界条件的另一个核心是，在写这题的状态转移方程时，需要用到i和i-1的关系，好像也可以不用（）</li>
<li><strong>状态转移方程</strong>有四种方程，字符相同以及不同时的替换、插入和删除</li>
<li>双方新的字符相同，无需操作，直接相等即可</li>
<li>双方新的字符不同，可以进行替换、插入和删除操作</li>
<li>替换字符数是不变的，对上一个结果计数加一即可</li>
<li>进行插入操作是因为words2多了一个字符，由words1去补这个字符</li>
<li>words1 = 'abc'，words2 = 'abcd'，因此要在<code v-pre>dp[i][j-1]</code>的结果计数加一</li>
<li>进行删除操作则是同理，反向思考一下</li>
<li><strong>迭代求解</strong>要如何使用状态转移方程呢</li>
<li>在整个迭代过程中，无非就是每次多一个单词进行处理，然而字符不同的时候你只能进行三个操作的其中一个去完成任务</li>
<li>因为你只要从三个操作里面选出最少的那个不就行了，题目就是要求最少操作数（魔法操作）</li>
<li>当然最后空字符串的处理，其实初始化的时候只要平移一下就好了</li>
</ul>
</div></template>


