---
title: Mac
tags:
  - Mac
createTime: 2025/03/31 09:37:51
permalink: /article/jtdqtb5j/
---
[toc]



# 快捷键

1. 关闭应用：command + q
2. 强制关闭应用，调出活动监视器：command + option + esc
3. 录屏：command + shift + 5
4. excel单元格内换行：option + enter

# 实用技巧

1. 将鼠标停留在左上角的绿色按钮上，可以进行分屏操作

2. 四指在触摸板上同时上滑，可以打开调度中心进行应用的快速切换

3. 购买软件或者软体，更新的时候只要再输入一次买这个软件或软体的appleid密码就可以直接更新，不需要更换账号

   > 解决淘宝买号的时候，时间久了，号被封了或者被更改了密码
   >
   > 所以你买了号用来买完软件或者软体的时候，就可以换回自己的号，更新的时候只要输入买的时候的密码就行了

4. 剪切文件/文件夹：右键拷贝项目，在粘贴处右键，然后按住option就可以剪切项目到目的地了

5. 访达图标状态下的对齐：在当前文件夹右键，整理方式选择名称即可

6. 使用Google进行搜索的时候，在后面加个空格和年份就能看对应的年份的数据

   > site:v2ex.com/t 毕设 2023


# 问题

## 代理问题

---

在使用iterm2，git clone一些项目的时候，代理出现问题，无法git下来，要么报443，要么报网络错误

- 解决办法

在iterm2终端中设置代理，不要全复制，一个一个来

```bash
// 设置http
export http_proxy="http://127.0.0.1:7890"
// 设置https
export https_proxy="http://127.0.0.1:7890"
// 保存生效
source ~/.zshrc
```

## 打开软件问题

mac一般只支持打开app store里的软件或者app store + 过审的开发者的软件

如果遇到没有过审的开发者的软件一般不能打开，

此时如果要打开任何来源的软件就必须要设置一下

- 方法一

直接按住option按键，然后单击软件，点击打开的形式打开

> **说明**
>
> 此方法每次都要这样很麻烦

- 方法二

万能方法，M1/M2/M3都可以

通过控制台指令：`sudo spctl --master-disable`

此时再和平常的方式打开软件都可以打开了

## 设置某类文件统一默认打开方式

1. 选中需要设置默认打开方式的文件，右键单击并选择“显示简介”。
2. 在“显示简介”标签页中，找到“打开方式”选项，并从下拉框中选择您希望默认打开的软件。
3. 点击“全部更改”按钮，以将所有类似文件都设置为使用该软件默认打开。

## 控制台

### 配置环境变量

1. 打开终端te，一定要去到根目录，一般默认就是根目录
2. 检查是否有`.zshrc`文件存在：`touch ~/.zshrc`
	> 这个命令在检查的时候，如果不存在会自动创建
3. 进入`zshrc`配置文件：`vim ~/.zshrc`
4. 看情况按r、q什么的进入到可阅读的状态
5. 按i进入编辑模式
6. 跟着原有的export语句添加环境变量
7. 按下ESC使其退出编辑模式进入命令行模式
8. 输入`:wq`+enter结束配置文件
9. 最后保存配置文件：`source ~/.zshrc`

> **说明**
> 这种方式最好，不要使用open的方式打开vim，用上面的这种方式
> 这样你在下一次打开te的时候，配置的环境变量还在，不会丢失什么的
> 这个是最好的方式了，相信！！！


### 输出目录树结构

安装tree：brew install tree

- 常用命令
	- `tree -I "node_modules"`：过滤文件/文件夹
	- tree：查看当前目录树结构

## 调整顶部右侧软件的菜单位置

- 按住command键，然后鼠标拖动即可

## 查看mac OS版本

- 左上角有个苹果
- 点击苹果，然后关于本机就能看到了

## 查看mac是否有显卡

- 命令：system_profiler SPDisplaysDataType
- 如果有输出证明有显卡，可能不是独显，集成显卡也算

## 废纸篓部分无法删除

- 显示“不能完成此操作，因为项目“***”正在使用中”
- 终端命令：sudo rm -rf ~/.Trash/*
- `-r`: 递归删除，可以删除文件夹及其内容
- `-f`: 强制删除，不提示确认
- `~`: 代表用户主目录
- `.Trash`: Mac系统的回收站文件夹
- `/*`: （回收站）内的所有内容
- **清空当前用户 macOS 系统中的“废纸篓”（Trash）**

## typora配置损坏

- 状态就是，你只能打开一个 md 文件，无法同时作用两个 md 文件

- 除非你退出软件，重新打开一个新的 md 文件

- 解决方案，先**关闭软件**，然后终端运行命令

- ```bash
  # 备份
  mkdir ~/typora_backup
  cp -r ~/Library/Application\ Support/abnerworks.Typora ~/typora_backup/
  
  # 删除 Typora 配置
  rm -rf ~/Library/Application\ Support/abnerworks.Typora
  rm -rf ~/Library/Preferences/abnerworks.Typora.plist
  rm -rf ~/Library/Saved\ Application\ State/abnerworks.Typora.savedState
  rm -rf ~/Library/Caches/abnerworks.Typora
  ```

- 我来解释一下

- `mkdir ~/typora_backup` - 尝试创建备份文件夹

  - **重复执行问题**: 如果文件夹已存在，会显示错误但不会中断执行

- cp -r ~/Library/Application\ Support/abnerworks.Typora ~/typora_backup/

  - **重复执行问题**: 会直接覆盖之前的备份，而不是追加

- 备份内容说明
   - 个性化设置：窗口大小、字体、颜色等界面设置
   - 自定义主题：如果你安装了额外的 Markdown 主题
   - 快捷键配置：如果你自定义了任何快捷键
   - 最近打开的文件记录：文件历史
   - 自动保存的草稿：未保存内容的临时备份
   - 插件设置：如果你使用了任何 Typora 插件

```bash
# 完全删除 Typora 配置
rm -rf ~/Library/Application\ Support/abnerworks.Typora
rm -rf ~/Library/Preferences/abnerworks.Typora.plist
rm -rf ~/Library/Saved\ Application\ State/abnerworks.Typora.savedState
rm -rf ~/Library/Caches/abnerworks.Typora
```

- 执行会删除当前的配置文件，让 Typora 下次启动时重新创建默认配置。

## 清理硬盘空间

- 温馨提示：有条件就不要清理硬盘空间，这是最好的
- 正常使用只要清理垃圾桶就够了
- 最佳使用方案，按照上述有关的du查找所有的数据，然后让Claude帮你清理
- 下面的代码和过程仅供参考

### 系统数据

- 终端命令：du -sh ~/Library/* | sort -hr       ---->    查看电脑文件夹占用空间情况

- ```bash
  21G    /Users/mac/Library/Containers
   17G    /Users/mac/Library/Application Support
  9.1G    /Users/mac/Library/Caches
  2.1G    /Users/mac/Library/pnpm
  180M    /Users/mac/Library/Biome
  167M    /Users/mac/Library/Group Containers
   87M    /Users/mac/Library/Metadata
   51M    /Users/mac/Library/IntelligencePlatform
   42M    /Users/mac/Library/HTTPStorages
   29M    /Users/mac/Library/Mobile Documents
   24M    /Users/mac/Library/Daemon Containers
   18M    /Users/mac/Library/Keychains
   17M    /Users/mac/Library/Weather
   17M    /Users/mac/Library/Receipts
   15M    /Users/mac/Library/HomeKit
   14M    /Users/mac/Library/Fonts
   13M    /Users/mac/Library/Google
  ```

- 清理缓存（安全）：rm -rf ~/Library/Caches/*

- 查看Containers目录的占用空间情况：du -sh ~/Library/Containers/* | sort -hr

- ```bash
   11G    /Users/mac/Library/Containers/com.tencent.xinWeChat
  7.6G    /Users/mac/Library/Containers/com.tencent.qq
  909M    /Users/mac/Library/Containers/com.chitaner.Longshot
  704M    /Users/mac/Library/Containers/com.baidu.netdisk
  284M    /Users/mac/Library/Containers/com.tencent.meeting
  106M    /Users/mac/Library/Containers/com.microsoft.Word
   97M    /Users/mac/Library/Containers/com.microsoft.Excel
   96M    /Users/mac/Library/Containers/com.apple.photoanalysisd
   87M    /Users/mac/Library/Containers/com.apple.mediaanalysisd
   87M    /Users/mac/Library/Containers/com.apple.geod
   80M    /Users/mac/Library/Containers/com.apple.AMPArtworkAgent
   26M    /Users/mac/Library/Containers/com.apple.iBooksX
   25M    /Users/mac/Library/Containers/com.apple.AppStore
   18M    /Users/mac/Library/Containers/com.apple.CloudDocs.iCloudDriveFileProvider
   13M    /Users/mac/Library/Containers/com.apple.stocks.widget
   11M    /Users/mac/Library/Containers/com.apple.StoreKit.UIService
  5.7M    /Users/mac/Library/Containers/EA303482-432D-47AE-8A2B-E00E35C3D8FE
  5.6M    /Users/mac/Library/Containers/com.apple.Maps
  5.5M    /Users/mac/Library/Containers/com.apple.Safari
  4.6M    /Users/mac/Library/Containers/com.natfrp.launcher.ui
  4.3M    /Users/mac/Library/Containers/com.apple.photolibraryd
  4.1M    /Users/mac/Library/Containers/com.apple.systempreferences.AppleIDSettings
  3.8M    /Users/mac/Library/Containers/com.apple.mail
  3.1M    /Users/mac/Library/Containers/com.chitaner.Picview
  3.0M    /Users/mac/Library/Containers/com.apple.siri.media-indexer
  2.1M    /Users/mac/Library/Containers/com.apple.weather
  1.8M    /Users/mac/Library/Containers/com.apple.mediastream.mstreamd
  1.7M    /Users/mac/Library/Containers/com.apple.weather.widget
  1.6M    /Users/mac/Library/Containers/com.apple.clock.WorldClockWidget
  1.4M    /Users/mac/Library/Containers/com.tencent.WeWorkMac
  1.3M    /Users/mac/Library/Containers/com.apple.Notes
  1.3M    /Users/mac/Library/Containers/com.apple.Apple
  ```

- 基本上都是腾讯占用内存多

- 清理微信

- ```bash
  # 清理微信缓存(实际上并没有什么卵用，清一下咯)
  rm -rf ~/Library/Containers/com.tencent.xinWeChat/Data/Library/Caches/*
  
  # 检查并清理微信聊天记录存储位置(实际上并没有什么卵用，清一下咯)
  ls -lah ~/Library/Containers/com.tencent.xinWeChat/Data/Library/Application\ Support/com.tencent.xinWeChat/
  ```

- 微信设置，管理存储空间，里面有清理缓存和聊天数据按钮，清理一下

- 聊天数据选择你要清理的吧

- 同理清理QQ

- QQ设置，存储管理，一样清理聊天文件he缓存数据

- 清理其他应用的缓存，空间较大的那种

- ```bash
  # 清理Longshot缓存
  rm -rf ~/Library/Containers/com.chitaner.Longshot/Data/Library/Caches/*
  
  # 删除百度网盘缓存文件
  find ~/Library/Containers/com.baidu.netdisk/Data/Library/Caches/ -type f -delete
  
  # 删除腾讯会议缓存文件
  find ~/Library/Containers/com.tencent.meeting/Data/Library/Caches/ -type f -delete
  ```

- 查看Application support目录的占用空间情况：du -sh ~/Library/Application\ Support/* | sort -hr

- ```bash
   13G    /Users/mac/Library/Application Support/com.netease.mumu.nemux
  1.5G    /Users/mac/Library/Application Support/Google
  669M    /Users/mac/Library/Application Support/微信开发者工具
  637M    /Users/mac/Library/Application Support/Code
  275M    /Users/mac/Library/Application Support/obsidian
  174M    /Users/mac/Library/Application Support/com.netease.uuremote.updater
  136M    /Users/mac/Library/Application Support/SPlayer
  132M    /Users/mac/Library/Application Support/com.apple.mobileAssetDesktop
  102M    /Users/mac/Library/Application Support/WeType
   36M    /Users/mac/Library/Application Support/hmcl
   25M    /Users/mac/Library/Application Support/com.netease.uuremote
   21M    /Users/mac/Library/Application Support/x
   13M    /Users/mac/Library/Application Support/Knowledge
   11M    /Users/mac/Library/Application Support/AddressBook
  7.8M    /Users/mac/Library/Application Support/com.apple.ProtectedCloudStorage
  6.8M    /Users/mac/Library/Application Support/com.apple.spotlight
  6.8M    /Users/mac/Library/Application Support/CloudDocs
  3.7M    /Users/mac/Library/Application Support/HBuilder X
  3.3M    /Users/mac/Library/Application Support/Animoji
  3.2M    /Users/mac/Library/Application Support/com.apple.MediaPlayer
  3.2M    /Users/mac/Library/Application Support/GitHub Desktop
  3.1M    /Users/mac/Library/Application Support/networkserviceproxy
  2.2M    /Users/mac/Library/Application Support/CallHistoryDB
  1.1M    /Users/mac/Library/Application Support/Ollama
  924K    /Users/mac/Library/Application Support/com.nektony.App-Cleaner-SIII
  644K    /Users/mac/Library/Application Support/FileProvider
  636K    /Users/mac/Library/Application Support/typora-
  ```

- 清理前最好关闭应用，不过我觉得没关系就是了

- ```bash
  # 清理微信开发者工具缓存
  rm -rf ~/Library/Application\ Support/微信开发者工具/Cache
  
  # 清理VS Code缓存
  rm -rf ~/Library/Application\ Support/Code/Cache/*
  rm -rf ~/Library/Application\ Support/Code/CachedData/*
  
  # 清理网易遥控器更新缓存
  rm -rf ~/Library/Application\ Support/com.netease.uuremote.updater/Cache
  
  # 清理SPlayer缓存
  rm -rf ~/Library/Application\ Support/SPlayer/Cache
  ```

- 清理浏览器缓存，在浏览器设置中有这个选项

- 清理pnpm

- ```bash
  # 清理未使用的包
  pnpm store prune
  # 或更彻底清理
  pnpm store prune --force
  ```

- 清理Biome：`rm -rf ~/Library/Biome`

### 文稿

- 查找用户目录下占用空间最大的文件夹：du -sh ~/* ~/.* | sort -hr | head -20

- ```bash
   42G    /Users/mac/.cache
   30G    /Users/mac/Library
  8.2G    /Users/mac/Downloads
  3.8G    /Users/mac/.ollama
  2.6G    /Users/mac/.npm
  1.3G    /Users/mac/.nvm
  553M    /Users/mac/.deepface
  465M    /Users/mac/Pictures
  379M    /Users/mac/.cargo
  350M    /Users/mac/.vscode
  345M    /Users/mac/.yarn
  256M    /Users/mac/kotones-auto-assistant
  206M    /Users/mac/amazon-corretto-8.jdk
  203M    /Users/mac/.local
  194M    /Users/mac/PandoraCanvas
   92M    /Users/mac/.bun
   70M    /Users/mac/.openjfx
   39M    /Users/mac/AstrBot
   18M    /Users/mac/Music
   15M    /Users/mac/.wakatime
  ```

- 清理缓存：rm -rf ~/.cache/*

- 查看你的 Downloads 文件夹，手动清除你不需要的

- 清理 npm 缓存：npm cache clean --force

- 现在空间应该释放完毕了，最后有条件的就重启电脑吧

