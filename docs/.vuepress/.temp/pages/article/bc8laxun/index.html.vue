<template><div><p>[toc]</p>
<h1 id="常用符号" tabindex="-1"><a class="header-anchor" href="#常用符号"><span>常用符号</span></a></h1>
<p>⚠️🚀📋👥✅⬜❌</p>
<h1 id="流程图代码" tabindex="-1"><a class="header-anchor" href="#流程图代码"><span>流程图代码</span></a></h1>
<ul>
<li>
<p>使用mermaid</p>
</li>
<li>
<p>效果如下</p>
</li>
</ul>
<div class="language-mermaid line-numbers-mode" data-highlighter="shiki" data-ext="mermaid" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">%%{init: {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  'theme': 'base',</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  'themeVariables': {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    'fontFamily': 'Microsoft YaHei',</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    'fontSize': '14px'</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  },</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  'flowchart': {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    'nodeSpacing': 50,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    'rankSpacing': 40,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    'curve': 'basis'</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">}}%%</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">graph TB</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    %% GUI启动和环境检测</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    Start[启动GUI界面] --> CheckPython{检查Python环境}</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    CheckPython -->|不符合| P1[显示Python版本要求] --> P2[指引安装]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    CheckPython -->|符合| CheckNetwork{网络检测}</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    %% 网络检测</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    CheckNetwork -->|失败| N1[记录网络错误] --> N2[提示检查网络]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    CheckNetwork -->|成功| PingTest[Ping花舞组/B站]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    PingTest --> DownloadAxis[下载轴文件]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    %% 轴文件处理</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    DownloadAxis --> OCRAxis[OCR识别轴]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    OCRAxis --> CollectInfo[收集轴信息]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    CollectInfo --> ValidateOCR[确认OCR信息完整性]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    ValidateOCR -->|完整| CheckEmu</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    ValidateOCR -->|不完整| ManualAxis[请求人工提供轴]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    %% 模拟器检测</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    CheckEmu -->|1280x720| CheckADB{检查ADB连接}</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    CheckEmu{检查模拟器分辨率} -->|非1280x720| E1[提示调整分辨率]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    %% 游戏启动流程</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    CheckADB -->|连接成功| StartGame[启动游戏]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    StartGame --> EnterGame[进入游戏]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    %% 性能测试和角色扫描</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    EnterGame --> SpeedTest[测试截图速度]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    SpeedTest --> RecordPerf[记录性能等级]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    RecordPerf --> CharScan[角色扫盘]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    CharScan --> SaveChar[保存角色信息]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    %% 公会战流程</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    SaveChar --> EnterClan[进入公会战]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    ScanBoss --> PrepareSim[准备模拟战]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    EnterClan --> ScanBoss[OCR识别Boss信息/阶段]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    %% 模拟战循环</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    PrepareSim --> InitCount[尝试次数=0]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    InitCount --> SimBattle[进行模拟战]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    %% 伤害判定</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    SimBattle --> RecordBattle[记录战斗数据]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    RecordBattle --> CheckDamage{判定伤害}</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    %% 伤害结果处理</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    CheckDamage -->|超过标准| ReturnGreat[返回烈火]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    CheckDamage -->|低于0-20%| ReturnOK[返回可惜]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    CheckDamage -->|低于20%以上| CheckTries{尝试&#x3C;3次?}</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    CheckTries -->|是| IncTries[尝试次数+1]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    IncTries --> CheckConfig[检查角色配置]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    CheckConfig --> ShowDiff[显示配置对比]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    ShowDiff --> WaitConfirm[等待人工确认]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    WaitConfirm --> SimBattle</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    CheckTries -->|否| ToManual[转人工处理]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    %% 成功路径</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    ReturnGreat --> RealBattle[进行实战]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    ReturnOK --> RealBattle</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    RealBattle --> FinalRecord[记录实战结果]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    FinalRecord --> SendReport[发送战报]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    %% 样式定义</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    classDef process fill:#f9f,stroke:#333,stroke-width:2px</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    classDef condition fill:#bbf,stroke:#333,stroke-width:2px</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    classDef warning fill:#ff9999,stroke:#333,stroke-width:2px</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    classDef success fill:#90EE90,stroke:#333,stroke-width:2px</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    classDef log fill:#f0f0f0,stroke:#333,stroke-width:2px</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    class Start,EnterGame,RealBattle process</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    class CheckPython,CheckNetwork,CheckEmu,CheckADB,CheckDamage,CheckTries condition</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    class ToManual,ManualAxis warning</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    class ReturnGreat,ReturnOK,SendReport success</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    class LogSystem,RecordBattle,FinalRecord log</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="项目进度追踪-待办事项" tabindex="-1"><a class="header-anchor" href="#项目进度追踪-待办事项"><span>项目进度追踪（待办事项）</span></a></h1>
<ul>
<li>通用模板</li>
</ul>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold">#</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold"> 🚀 项目进度追踪</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold"> 📋 开发任务</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 状态 </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 任务 </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 备注 </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">|:---:|---|---|</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> ⬜ </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 微调代码 </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> |</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> ⬜ </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 训练效率改进 </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> |</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> ⬜ </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 更简单的UI </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> |</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> ⬜ </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 公开数据集 </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> |</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> ✅ </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 中文发音 </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 方言味浓重 </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> ⬜ </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 标准普通话发音支持 </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-weight:bold;--shiki-dark:#666666;--shiki-dark-font-weight:bold">##</span><span style="--shiki-light:#1C6B48;--shiki-light-font-weight:bold;--shiki-dark:#4D9375;--shiki-dark-font-weight:bold"> 👥 角色支持</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 状态 </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 角色 </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 备注 </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">|:---:|---|---|</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> ❌ </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> ~~</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">墨小菊</span><span style="--shiki-light:#999999;--shiki-dark:#666666">~~</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> |</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 已移除计划 </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> ❌ </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> ~~</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">文芷</span><span style="--shiki-light:#999999;--shiki-dark:#666666">~~</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> |</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 已移除计划 </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> ✅ </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 朝武芳乃 </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> |</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> ✅ </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 丛雨 </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> |</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> ✅ </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 常陆茉子 </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> |</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> ✅ </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 三司绫濑 </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> |</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> ✅ </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 在原七海 </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> |</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> ✅ </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 式部茉优 </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> |</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> ✅ </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 二条院羽月 </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> |</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> ⬜ </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> ATRI </span><span style="--shiki-light:#999999;--shiki-dark:#666666">|</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold">---</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-light-font-style:italic;--shiki-dark:#666666;--shiki-dark-font-style:italic">*</span><span style="--shiki-light:#393A34;--shiki-light-font-style:italic;--shiki-dark:#DBD7CAEE;--shiki-dark-font-style:italic">图例：</span><span style="--shiki-light:#999999;--shiki-light-font-style:italic;--shiki-dark:#666666;--shiki-dark-font-style:italic">*</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> ✅ 已完成 &#x26;nbsp;|&#x26;nbsp; ⬜ 待完成 &#x26;nbsp;|&#x26;nbsp; ❌ 已移除</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h1>
<ul>
<li>
<p>直接秒杀：<code v-pre>[toc]</code></p>
</li>
<li>
<p>但是有一些是不支持<code v-pre>[toc]</code>的，本质是一个插件，比如github</p>
</li>
<li>
<p>所以还有一种是手动实现目录的方式，通过锚点连接</p>
</li>
<li>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 目录</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [项目介绍](#项目介绍)</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [温馨提示](#温馨提示)</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [使用](#使用)</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [项目扩展](#项目扩展)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 项目介绍</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 项目名称：ReNameFile</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 项目描述：一个批量重命名文件工具，可以批量重命名指定目录下的所有文件</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>上面就是手动实现的参考模版</p>
</li>
</ul>
</div></template>


