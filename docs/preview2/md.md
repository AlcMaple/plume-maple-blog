---
title: md
createTime: 2024/03/31 09:43:24
permalink: /article/bc8laxun/
---
[toc]

# 常用符号

⚠️🚀📋👥✅⬜❌

# 流程图代码

- 使用mermaid

- 效果如下

```mermaid
%%{init: {
  'theme': 'base',
  'themeVariables': {
    'fontFamily': 'Microsoft YaHei',
    'fontSize': '14px'
  },
  'flowchart': {
    'nodeSpacing': 50,
    'rankSpacing': 40,
    'curve': 'basis'
  }
}}%%
graph TB
    %% GUI启动和环境检测
    Start[启动GUI界面] --> CheckPython{检查Python环境}
    CheckPython -->|不符合| P1[显示Python版本要求] --> P2[指引安装]
    CheckPython -->|符合| CheckNetwork{网络检测}
    
    %% 网络检测
    CheckNetwork -->|失败| N1[记录网络错误] --> N2[提示检查网络]
    CheckNetwork -->|成功| PingTest[Ping花舞组/B站]
    PingTest --> DownloadAxis[下载轴文件]
    
    %% 轴文件处理
    DownloadAxis --> OCRAxis[OCR识别轴]
    OCRAxis --> CollectInfo[收集轴信息]
    CollectInfo --> ValidateOCR[确认OCR信息完整性]
    
    ValidateOCR -->|完整| CheckEmu
    ValidateOCR -->|不完整| ManualAxis[请求人工提供轴]
    
    %% 模拟器检测
    
    CheckEmu -->|1280x720| CheckADB{检查ADB连接}
    CheckEmu{检查模拟器分辨率} -->|非1280x720| E1[提示调整分辨率]
    
    %% 游戏启动流程
    CheckADB -->|连接成功| StartGame[启动游戏]
    StartGame --> EnterGame[进入游戏]
    
    %% 性能测试和角色扫描
    EnterGame --> SpeedTest[测试截图速度]
    SpeedTest --> RecordPerf[记录性能等级]
    RecordPerf --> CharScan[角色扫盘]
    CharScan --> SaveChar[保存角色信息]
    
    %% 公会战流程
    SaveChar --> EnterClan[进入公会战]
    
    ScanBoss --> PrepareSim[准备模拟战]
    EnterClan --> ScanBoss[OCR识别Boss信息/阶段]
    
    %% 模拟战循环
    PrepareSim --> InitCount[尝试次数=0]
    InitCount --> SimBattle[进行模拟战]
    
    %% 伤害判定
    SimBattle --> RecordBattle[记录战斗数据]
    RecordBattle --> CheckDamage{判定伤害}
    
    %% 伤害结果处理
    CheckDamage -->|超过标准| ReturnGreat[返回烈火]
    CheckDamage -->|低于0-20%| ReturnOK[返回可惜]
    CheckDamage -->|低于20%以上| CheckTries{尝试<3次?}
    
    CheckTries -->|是| IncTries[尝试次数+1]
    IncTries --> CheckConfig[检查角色配置]
    CheckConfig --> ShowDiff[显示配置对比]
    ShowDiff --> WaitConfirm[等待人工确认]
    WaitConfirm --> SimBattle
    
    CheckTries -->|否| ToManual[转人工处理]
    
    %% 成功路径
    ReturnGreat --> RealBattle[进行实战]
    ReturnOK --> RealBattle
    RealBattle --> FinalRecord[记录实战结果]
    FinalRecord --> SendReport[发送战报]

    %% 样式定义
    classDef process fill:#f9f,stroke:#333,stroke-width:2px
    classDef condition fill:#bbf,stroke:#333,stroke-width:2px
    classDef warning fill:#ff9999,stroke:#333,stroke-width:2px
    classDef success fill:#90EE90,stroke:#333,stroke-width:2px
    classDef log fill:#f0f0f0,stroke:#333,stroke-width:2px
    
    class Start,EnterGame,RealBattle process
    class CheckPython,CheckNetwork,CheckEmu,CheckADB,CheckDamage,CheckTries condition
    class ToManual,ManualAxis warning
    class ReturnGreat,ReturnOK,SendReport success
    class LogSystem,RecordBattle,FinalRecord log
```

# 项目进度追踪（待办事项）

- 通用模板

```markdown
# 🚀 项目进度追踪

## 📋 开发任务
| 状态 | 任务 | 备注 |
|:---:|---|---|
| ⬜ | 微调代码 | |
| ⬜ | 训练效率改进 | |
| ⬜ | 更简单的UI | |
| ⬜ | 公开数据集 | |
| ✅ | 中文发音 | 方言味浓重 |
| ⬜ | 标准普通话发音支持 | |

## 👥 角色支持
| 状态 | 角色 | 备注 |
|:---:|---|---|
| ❌ | ~~墨小菊~~ | 已移除计划 |
| ❌ | ~~文芷~~ | 已移除计划 |
| ✅ | 朝武芳乃 | |
| ✅ | 丛雨 | |
| ✅ | 常陆茉子 | |
| ✅ | 三司绫濑 | |
| ✅ | 在原七海 | |
| ✅ | 式部茉优 | |
| ✅ | 二条院羽月 | |
| ⬜ | ATRI | |

---
*图例：* ✅ 已完成 &nbsp;|&nbsp; ⬜ 待完成 &nbsp;|&nbsp; ❌ 已移除
```

# 目录

- 直接秒杀：`[toc]`

- 但是有一些是不支持`[toc]`的，本质是一个插件，比如github

- 所以还有一种是手动实现目录的方式，通过锚点连接

- ```bash
  # 目录
  
  - [项目介绍](#项目介绍)
  - [温馨提示](#温馨提示)
  - [使用](#使用)
  - [项目扩展](#项目扩展)
  
  # 项目介绍
  
  - 项目名称：ReNameFile
  - 项目描述：一个批量重命名文件工具，可以批量重命名指定目录下的所有文件
  ```

- 上面就是手动实现的参考模版
