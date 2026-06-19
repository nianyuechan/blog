---
title: 必读 - 安装说明与游戏前准备
date: 2026-05-16 12:00:00
tags:
  - Minecraft
  - 整合包
  - Ice and M
  - PCL2
categories:
  - 游戏
description: Ice and M 整合包 v0.13 安装说明与游戏前准备指南
toc: true
---

## 安装游戏

请确认已安装 `PCL2 启动器`

{% externalLinkCard "PCL 最新正式版永久下载地址丨龙腾猫跃丨爱发电" "https://ifdian.net/p/0164034c016c11ebafcb52540025c377" %}

打开 PCL2 启动器页面，将 IAM 安装包拖入启动器，提示请选择空文件夹

{% image /images/iam-guide/install-step1.webp "安装界面" %}

建议在 D 盘根目录创建 `Ice and M` 名称的空文件夹

（并不是必须要这样做，你可以在其他路径创建其他名字的文件夹）

游戏路径为：你创建的文件夹`\.minecraft\versions\IAM`（开启版本隔离的情况下）

{% image /images/iam-guide/install-step2.webp "游戏路径" %}

{% image /images/iam-guide/install-step3.webp "安装路径" %}

**安装完以后的路径应该是这样，最深处的 IAM 才是游戏文件夹，包含了 Ice and M 的游戏文件**

**Plain Craft Launcher 2.exe 为游戏启动器，右键，并在右键菜单上点击创建快捷方式，并把快捷方式移动到桌面上（快捷方式可以重命名，叫什么都可以）**

{% image /images/iam-guide/install-step24.webp "Desktop shortcut example 1" %}

{% image /images/iam-guide/install-step25.webp "Desktop shortcut example 2" %}

**建议开启版本隔离，方便后续安装更新包**

**根据你电脑的内存大小设置游戏内存**

内存分配越多，游戏越流畅

---

## 下载 graalvm-jdk25（可选）

::: warning
**graalvm-jdk25 用于搭配优化参数使游戏内存占用降低，导入优化参数的游戏版本必须指定 jdk 为 graalvm25 否则无法启动游戏！jdk17 和 jdk25 普通版都不行！只指定 jdk 为 graalvm25 不使用优化参数则没有作用！**
:::

下载链接：[graalvm-jdk25](https://download.oracle.com/graalvm/25/latest/graalvm-jdk-25_windows-x64_bin.zip)

下载完成后，在你要安装jdk的路径选择`解压到当前文件夹`

{% image /images/iam-guide/install-step6.webp "解压文件" %}

建议将解压后的文件夹放入 `C:\Program Files\Java` 路径中，这不是必须的，你可以将其放在其他路径，但 `不要让它留在下载文件夹里，以防清理垃圾时误删`

移动后在 `设置 → 启动器选项 → 游戏 java` 中点击 `自动搜索`，`让启动器知道你安装新 jdk 了`

{% image /images/iam-guide/install-step7.webp "自动搜索jdk" %}

### 设置版本独立选项 —— 游戏 java

{% image /images/iam-guide/install-step8.webp "版本独立设置" %}

`在 设置 → 版本独立设置 中进入`

::: danger
`千万不要修改全局设置！`不同 MC 版本对应的 jdk 版本是`不一样的`，如果你设置全局为 Jdk25，那么将`无法启动低版本！`
:::

选择 jdk 版本为 `JDK 25（graalvm-jdk）`

{% image /images/iam-guide/install-step9.webp "选择JDK25" %}

---

## 导入启动参数（可选）

复制以下内容，粘贴至 `版本独立设置 → 最下面高级选项 → java 虚拟机参数`

```
-XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+UseZGC -XX:+ExplicitGCInvokesConcurrent -XX:ZCollectionInterval=10 -XX:+AlwaysPreTouch -XX:+UseNUMA -XX:+PerfDisableSharedMem -XX:+UseCompactObjectHeaders -XX:+ExplicitGCInvokesConcurrent -XX:+UseNUMA -XX:+AlwaysActAsServerClassMachine -XX:-DontCompileHugeMethods -XX:MaxNodeLimit=240000 -XX:NodeLimitFudgeFactor=8000 -XX:ReservedCodeCacheSize=400M -XX:NonNMethodCodeHeapSize=12M -XX:ProfiledCodeHeapSize=194M -XX:NonProfiledCodeHeapSize=194M -XX:NmethodSweepActivity=1 -XX:+UseFastStosb -XX:+UseCriticalJavaThreadPriority -XX:+UseVectorCmov -XX:+PerfDisableSharedMem -XX:+UseFastUnorderedTimeStamps -XX:ThreadPriorityPolicy=1 -XX:AllocatePrefetchStyle=3 -XX:+UseNewLongLShift -XX:+UseXmmI2D -XX:+UseXmmI2F -XX:+AlignVector -XX:+OptimizeFill -XX:+EnableVectorSupport -XX:+UseCharacterCompareIntrinsics -XX:+UseVectorStubs -XX:UseAVX=2 -XX:UseSSE=4 -XX:+EagerJVMCI -XX:+EnableJVMCI -XX:+UseJVMCICompiler -Djdk.graal.CompilerConfiguration=enterprise -Djdk.graal.UsePriorityInlining=true -Djdk.graal.Vectorization=true -Djdk.graal.LoopInversion=true -Djdk.graal.LoopRotation=true -Djdk.graal.VectorizeHashes=true -Djdk.graal.VectorizeSIMD=true -Djdk.graal.TuneInlinerExploration=1 -Djdk.graal.EnterprisePartialUnroll=true -Djdk.graal.DetectInvertedLoopsAsCounted=true -Dfml.queryResult=confirm
```

{% image /images/iam-guide/install-step11.webp "java虚拟机参数" %}

---

## 设置垃圾收集器

::: warning
`不使用优化参数时，不要做这一步！！！`
:::

在 `版本独立设置 → 最下面高级选项 → 内存管理` 中，设置垃圾回收器（内存管理）为 `不指定（可自定义）`

`为什么多了这一步？` 因为优化参数已选择垃圾收集器，而 PCL2 启动器最近出了设置垃圾收集器的功能，同时使用优化参数 + PCL 的内存设置时，会启用 2 个不同的垃圾收集器导致游戏无法启动！

::: danger
注意：修改的是版本独立设置，而不是全局设置!修改全局会导致其他游戏版本无法启动!
:::

{% image /images/iam-guide/install-step12.webp "垃圾回收器设置" %}

---

## 启动游戏

按图示启动游戏

{% image /images/iam-guide/install-step13.webp "启动游戏" %}

---

## 开始游戏前的准备

### 更换原版 UI

**如果你不喜欢帕斯特之梦 UI 的话，按以下步骤改回原版 UI**

**（0.80 版本开始不需要做这一步）**

{% image /images/iam-guide/install-step14.webp "更换原版UI" %}

{% image /images/iam-guide/install-step15.webp "资源加载完成" %}

{% image /images/iam-guide/install-step16.webp "完成设置" %}

移动到最底下，点击完成，等待加载资源完成

### 单人游玩

**单人游玩时需复制粘贴 `Ice and M\versions\IAM\mods\单人游玩需要替换的文件` 到存档内**

**多人游戏时，客户端无需复制粘贴那个文件，它是只需联机主机/服务端覆盖的**

### 选择种族

进入游戏以后， `谨慎选择你的种族，只有一次切换种族机会，之后要切换种族就需要肝了`

**选择种族要慎重！请仔细看完种族的特性，比如猫不能挖掘侧面连接石头，人鱼需要水肺药水才能陆地呼吸等**

{% image /images/iam-guide/install-step18.webp "选择种族" %}

推荐选择能穿透方块的 `轮椅族/幻影族`，很适合跑图和挖矿

但 `未幻影化时会被阳光所灼烧`，稍后打开任务书，然后进入商店与安东的祈愿堂 —— 免费的后悔药中领取抗火护符可以解决（还是会起火，但不会受到伤害）

`击败盖亚 2 获取奥丁之戒`后将免疫原版负面效果，将不再起火。

{% image /images/iam-guide/install-step19.webp "抗火护符" %}

{% image /images/iam-guide/install-step20.webp "猫UI" %}

{% image /images/iam-guide/install-step21.webp "猫UI界面" %}

### 关于猫 UI

**NekoUI 模组修改了游戏的 UI，左边竖条是攻击力、经验、饱食度、幸运值、速度、生命值、护甲值、盔甲韧性和氧气，快捷栏被移动到了右下角**

**这是可选 mod，存放路径：`IAM\mods\可选mod`**

{% image /images/iam-guide/install-step22.webp "可选mod" %}

---

说明到此为止，后续请查看游戏内任务书

整合包与服务器群↓

{% image /images/iam-guide/install-step23.webp "整合包与服务器群" %}
