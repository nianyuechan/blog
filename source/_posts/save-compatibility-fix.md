---
title: Solution for versions 0.83+ unable to access old saves
date: 2026-06-19 12:30:00
tags:
  - Minecraft
  - Ice and M
  - 存档兼容性
categories:
  - 游戏
description: 解决Ice and M整合包0.83及以上版本无法进入旧版存档的问题
toc: true
---

## 问题描述

在Ice and M整合包0.83及以上版本中，进入存档时可能会出现无法进入的提示。

## 解决方案

进入存档时出现该提示，则需要按以下步骤修复存档：

### 步骤一：备份存档

**一定要备份存档**

### 步骤二：下载并打开NBTExplorer

1. 下载NBTExplorer，解压后运行NBTExplorer.exe
2. 打开`IAM\saves\要修复的存档\level.dat`
3. 红框圈出的即为存档文件夹名（注意这个窗口是要修复的存档）

### 步骤三：创建新存档

1. 接下来创建一个名为"用于修复"的新存档（也可以叫其他名字，仅用于区分）
2. 进入世界以后退回到标题屏幕，等弹出"保存完成"的提示后再下一步

### 步骤四：打开新存档的NBT数据

1. 再打开一个NBTExplorer的窗口，打开`IAM\saves\用于修复\level.dat`
2. 记住原来的窗口是你要修复的存档，新打开的窗口是用于修复旧存档的新存档

### 步骤五：编辑存档数据

1. 在两个窗口都点击`Data`前面的`+`展开，再点击`WorldGenSettings`前面的`+`展开
2. 选中旧存档的`dimensions`，点击删除
3. 选中新存档的`dimensions`，点击复制

### 步骤六：完成修复

1. 回到旧存档的窗口，选中`WorldGenSettings`，点击粘贴
2. 完成后文件结构如下图所示，`dimensions`像原来一样位于`WorldGenSettings`内
3. 按`Ctrl+S`保存并关闭窗口，存档修复完成

## 注意事项

- 操作前务必备份存档
- 确保两个NBTExplorer窗口正确区分旧存档和新存档
- 修改完成后务必保存文件