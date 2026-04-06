---
title: Nahida搭建教程
date: 2026-04-02 15:35:00
tags:
    - 教程
    - git
    - Nahida
categories:
    - 教程
description: 如何搭建和使用Nahida
banner: /images/100639369_p0.webp
cover: /images/100639369_p0.webp
sticky: true
toc: true
---

# Nahida搭建教程

## 前言

> 估计能看到这篇文章的人，也没少用Nahida，不过事实上，Nahida以及进入生命晚期了
> ~~（再吃一次举报就挂掉了）~~
> 所以才会在这写下这篇教程。理论上跟着教程走，不会出现什么麻烦的问题。希望下一个搭建Nahida或者是别的什么的人，也能保持这份热爱吧

### 运行环境

- **node.js**
  Nahida是基于nodejs框架运作的，所以相当于Nahida的底层，请确保您的电脑内包含此环境
  {% externalLinkCard "Node.js官网" "https://nodejs.org/en/download" "/images/ol9RsKbgPR.webp" %}

- **git**
  虽然不是必须的，但是为了后面的部署，建议安装
  {% externalLinkCard "git官网" "https://git-scm.com/downloads" "/images/OIP-C.webp" %}

- **mysy2**
  Nahida在mysy2环境下运行的，所以也要一起安装
  {% externalLinkCard "mysy2官网" "https://www.msys2.org/" "/images/ol9RsKbgPR.webp" %}

### 开始安装

首先点开安装好的mysy2，然后复制粘贴以下命令：

```bash
bash <(curl -L gitee.com/TimeRainStarSky/TRSS_AllBot/raw/main/Install.sh)
```

然后此时你会看到这样一个界面：

{% image /images/screenshot_20260403_190412.webp "安装界面" %}

---

## 插件列表

### 阴天[AI总设置]
- **路径**：y-tian-plugin
- **优先级**：1
- **命令列表**：
  - `^#(ai|Ai|AI)对话方式(文本|图片|图片2|引用|转发|语音|拟人)$`
  - `^#图片渲染使用(1|2|3|4)$`
  - `^#(开启|关闭)提示回复$`
  - `^#更改(逆向|chat|god|附加)触发名(.*)`
  - `^#更改回复提示词(.*)`
  - `^#(ai|Ai|AI)(开启|关闭)(艾特|at)$`
  - `^#(艾特|at)回复使用(god|chat|逆向|附加)$`
  - `^#私聊回复使用(god|chat|逆向|附加)$`
  - `^#(开启|关闭)私聊回复$`
  - `^#(开启|关闭)(tts|TTS)