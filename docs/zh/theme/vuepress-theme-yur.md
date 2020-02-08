---
title: vuepress-theme-yur
description: vuepress 主题 yur 使用文档
sidebar: auto
---

## 预览

[演示](https://gleehub.com/)

## 安装

```bash
$ yarn add vuepress-theme-yur
```

使用主题

```js
module.exports = {
    theme: 'yur'
}
```

## 基本信息

```js
module.exports = {
    themeConfig: {
        lang: 'zh-CN',
        logo: '/logo.png',
        author: 'cnguu',
        authorLink: 'https://github.com/cnguu/',
        locales: {
            title: '星汉灿烂',
            description: '书写生活与你'
        }
    }
}
```

| 参数 | 说明 |
| :-: | :-: |
| lang | 默认语言<br>可选：`en`（默认） `zh-CN` |
| logo | 网站 LOGO 链接 |
| author | 站长名称 |
| authorLink | 站长名称站外跳转链接 |
| locales | 语言本地化<br>详细见：[多语言文件](https://cdn.jsdelivr.net/gh/cnguu/vuepress-theme-yur@master/yur/plugins/Translation/locales/zh-CN.js) |

## 导航

### 新增分类

新建文件：`/docs/programe/index.md`

```markdown
---

title: 编程技术

meta:
  - name: description
    content: 编程技术
  - name: keywords
    content: 编程,技术

---
```

修改配置

```js
module.exports = {
    themeConfig: {
        navs: [
            {text: '编程技术', link: '/program/'}
        ]
    }
}
```

| 参数 | 说明 |
| :-: | :-: |
| text | 分类名称 |
| link | 分类目录 |

### 开启时间线

新建文件：`/docs/timeline.md`

```markdown
---

title: 时间线

meta:
  - name: description
    content: 时间线
  - name: keywords
    content: 时间线

---
```

修改配置

```js
module.exports = {
    themeConfig: {
        timeline: true
    }
}
```

### 添加友链

新建文件：`/docs/links.md`

```markdown
---

title: 友人帐

meta:
  - name: description
    content: 友人帐
  - name: keywords
    content: 友人帐

---

---

## 留言格式

::: primaryLong
站点名称：凉风有信

站点描述：责难无以成事

站点网址：https://gleehub.com/

LOGO：https://static.xmt.cn/cc50c217cbe342ce951324583f2c6139.png

主题色调: #9a69ec
:::

## 交友要求

1. 博文总数 >= 30
2. 内容积极乐观
3. 符合国家相关法律法规
4. 符合本人当时心情
```

修改配置

```js
module.exports = {
    themeConfig: {
        links: [
            {
                name: '博客',
                lists: [
                    {
                        title: '凉风有信',
                        subtitle: '责难无以成事',
                        link: 'https://gleehub.com/',
                        logo: 'https://static.xmt.cn/cc50c217cbe342ce951324583f2c6139.png',
                        color: '#9a69ec'
                    }
                ]
            }
        ]
    }
}
```

| 参数 | 说明 |
| :-: | :-: |
| name | 类别名称 |
| lists | 友链列表 |
| lists.title | 站点名称 |
| lists.subtitle | 站点描述 |
| lists.link | 站点网址 |
| lists.logo | 站点 LOGO 链接 |
| lists.color | 站点主题色 |

### 开启个人页

新增文件：`/docs/about.md`

```markdown
---

title: 关于我

meta:
  - name: description
    content: 关于我
  - name: keywords
    content: 关于我

---

---

## 自我介绍

此处省略十万八千字......

---
```

修改配置

```js
module.exports = {
    themeConfig: {
        about: true,
        avatar: 'https://static.xmt.cn/cc50c217cbe342ce951324583f2c6139.png'
    }
}
```

| 参数 | 说明 |
| :-: | :-: |
| avatar | 个人头像链接 |

添加社交

```js
module.exports = {
    themeConfig: {
        social: {
            github: 'https://github.com/cnguu/',
            facebook: 'https://www.facebook.com/profile.php?id=100031941487870',
            twitter: 'https://twitter.com/cnguu_cn',
            dribbble: 'https://dribbble.com/cnguu',
            weibo: 'https://weibo.com/gu642779596',
            zhihu: 'https://www.zhihu.com/people/gleehub',
            qq: 'tencent://message/?uin=642779596'
        }
    }
}
```

> 类型为图标名称 [Icon](https://www.antdv.com/components/icon-cn/)

## 页脚

```js
module.exports = {
    themeConfig: {
        footer: {
            icon: '/footer.jpg',
            one: [
                {
                    title: 'Yur',
                    subtitle: 'VuePress 主题',
                    link: 'https://github.com/cnguu/vuepress-theme-yur'
                },
                {
                    title: 'Yur Tool',
                    subtitle: '主题快速搭建工具',
                    link: 'https://github.com/ioim/vuepress-theme-yur-cli'
                }
            ],
            two: [
                {
                    title: '备案 xxxxxxxx 号',
                    link: 'http://beian.miit.gov.cn',
                    type: 'flag',
                    theme: 'filled'
                }
            ],
            three: [
                {
                    title: '吐个槽',
                    link: 'https://support.qq.com/product/106316',
                    type: 'message',
                    theme: 'outlined'
                },
                {
                    title: '社区交流扣群：686025154',
                    link: '//shang.qq.com/wpa/qunwpa?idkey=c6afb0610ede557ae6920fc4cb31d652fde73d703203b261c6d2366544371776',
                    type: 'qq',
                    theme: 'outlined'
                }
            ]
        }
    }
}
```

| 参数 | 说明 |
| :-: | :-: |
| icon | 图标 |
| one | 第一列 |
| one.title | 标题 |
| one.subtitle | 描述 |
| one.link | 站外跳转链接 |
| two | 第二列 |
| two.title | 标题 |
| two.link | 站外跳转链接 |
| two.type | 图标名称 |
| two.theme | 图标类型<br>默认：`outlined`（描线）<br>可选：`filled`（实心） `twoTone`（双色） |
| three | 第三列<br>参数同第二列 |

## 主页

### 封面图

推荐使用比例为 1:1 的图片，至少像素为 500x500

```js
module.exports = {
    themeConfig: {
        banner: '/banner.png'
    }
}
```

### 按钮组

```js
module.exports = {
    themeConfig: {
        buttons: [
            {text: '阅读列表', link: '/posts/', type: 'primary'},
            {text: '了解作者', link: '/about.html', type: 'default'}
        ]
    }
}
```

| 参数 | 说明 |
| :-: | :-: |
| text | 文本 |
| link | 站内跳转链接 |
| type | 按钮类型<br>可选：`default` `primary` `dashed` `danger` `link` |

### 打字特效

```js
module.exports = {
    themeConfig: {
        ityped: {
            typeSpeed: 300,
            backSpeed: 100,
            startDelay: 300,
            backDelay: 1300,
            loop: true,
            showCursor: true,
            placeholder: false,
            disableBackTyping: false,
            cursorChar: '丨'
        }
    }
}
```

| 参数 | 说明 |
| :-: | :-: |
| typeSpeed | 正常速度 |
| backSpeed | 反向速度 |
| startDelay | 开始延迟（毫秒） |
| backDelay | 反向延迟（毫秒） |
| loop | 循环 |
| showCursor | 显示指针 |
| placeholder | 占位 |
| disableBackTyping | 禁用反向输入 |
| cursorChar | 指针字符 |

::: warning
仅限站点描述
:::

### 标签数量

```js
module.exports = {
    themeConfig: {
        tagSize: 100 // 默认：100
    }
}
```

## 文章信息

### 随机封面

主题自带了 49 张图片

```js
module.exports = {
    themeConfig: {
        post: {
            cover: [
                '/post/1.jpg',
                '/post/2.jpg',
                'https://xxx.com/3.jpg',
                'https://xxx.com/4.jpg'
            ]
        }
    }
}
```

### 分页

```js
module.exports = {
    themeConfig: {
        post: {
            pageSize: 12,
            pageSizeOptions: ['12', '24', '48', '96']
        }
    }
}
```

| 参数 | 说明 |
| :-: | :-: |
| pageSize | 每页文章数量<br>默认：12 |
| pageSizeOptions | 分页筛选项<br>默认：['12', '24', '48', '96'] |

### 扉页

```markdown
---

title: 欢迎访问我的博客

meta:
  - name: description
    content: 欢迎访问我的博客
  - name: keywords
    content: 欢迎,访问,博客

created: 2020/02/08

updated: 2020/02/08

tags:
  - Blog
  - VuePress

banner: /banner.jpg

password: true

discuss: false

copyright: 允许转载，需保留原文链接，著作权归博主所有

---

## 标题

正文省略四万八千字......
```

| 参数 | 说明 |
| :-: | :-: |
| title | 文章标题 |
| meta | 增强 SEO<br>description：页面描述<br>keywords：页面关键词 |
| created | 文章创建时间<br>必填 |
| updated | 文章更新时间 |
| tags | 文章标签<br>第一个为主标签 |
| banner | 文章封面<br>默认：随机 |
| password | 文章访问密码<br>默认密码：52yur |
| discuss | 评论开关 |
| copyright | 版权说明 |

### 打赏

```js
module.exports = {
    themeConfig: {
        reward: [
            'https://static.xmt.cn/ca717dde8ae14ea7ab3c8c74b8711414.png',
            'https://static.xmt.cn/acc7d3d02b0c4a35a3735268cbb2cce0.png'
        ]
    }
}
```

## 标示牌

```js
module.exports = {
    themeConfig: {
        nameplate: {
            title: 'Yur', // 内容
            width: '42px', // 宽度
            height: '32px', // 高度
            text: [
                {
                    fontSize: '20',
                    textAnchor: 'middle',
                    x: '50%',
                    y: '50%',
                    textTransform: 'uppercase',
                    fill: 'none',
                    stroke: '#3498db',
                    textShadow: '0 0 1px #3498db',
                    strokeWidth: '1px',
                    strokeDasharray: '90 310',
                    animate: {
                        attributeName: 'stroke-dashoffset',
                        begin: '-1.5s',
                        dur: '6s',
                        from: '0',
                        to: '-400',
                        repeatCount: 'indefinite'
                    }
                },
                {
                    fontSize: '20',
                    textAnchor: 'middle',
                    x: '50%',
                    y: '50%',
                    textTransform: 'uppercase',
                    fill: 'none',
                    stroke: '#f39c12',
                    textShadow: '0 0 1px #f39c12',
                    strokeWidth: '1px',
                    strokeDasharray: '90 310',
                    animate: {
                        attributeName: 'stroke-dashoffset',
                        begin: '-3s',
                        dur: '6s',
                        from: '0',
                        to: '-400',
                        repeatCount: 'indefinite'
                    }
                },
                {
                    fontSize: '20',
                    textAnchor: 'middle',
                    x: '50%',
                    y: '50%',
                    textTransform: 'uppercase',
                    fill: 'none',
                    stroke: '#e74c3c',
                    textShadow: '0 0 1px #e74c3c',
                    strokeWidth: '1px',
                    strokeDasharray: '90 310',
                    animate: {
                        attributeName: 'stroke-dashoffset',
                        begin: '-4.5s',
                        dur: '6s',
                        from: '0',
                        to: '-400',
                        repeatCount: 'indefinite'
                    }
                },
                {
                    fontSize: '20',
                    textAnchor: 'middle',
                    x: '50%',
                    y: '50%',
                    textTransform: 'uppercase',
                    fill: 'none',
                    stroke: '#9b59b6',
                    textShadow: '0 0 1px #9b59b6',
                    strokeWidth: '1px',
                    strokeDasharray: '90 310',
                    animate: {
                        attributeName: 'stroke-dashoffset',
                        begin: '-6s',
                        dur: '6s',
                        from: '0',
                        to: '-400',
                        repeatCount: 'indefinite'
                    }
                }
            ]
        }
    }
}
```

## 落下帷幕

```js
module.exports = {
    themeConfig: {
        curtain: {
            tip: '页面准备中...',
            textShadow: '#e91e63'
        }
    }
}
```

| 参数 | 说明 |
| :-: | :-: |
| tip | 提示文本 |
| textShadow | 文字阴影颜色 |

## 客服聊天

### crisp

注册账号，添加站点，获取分配的ID：[Crisp](https://crisp.chat/en/)

```js
module.exports = {
    themeConfig: {
        crisp: 'xxx'
    }
}
```

::: tip 破解免费时限
PayPal 绑定一张空的银行卡，然后在 Crisp 安装收付费版的插件，正常使用后即可解绑银行卡
:::

## 添加评论

支持的评论：

- [Vssue](https://vssue.js.org/zh/guide/github.html)
- [Valine](https://valine.js.org/)

```js
module.exports = {
    themeConfig: {
        discuss: 'Vssue'
    }
}
```

::: warning
先根据评论的官方文档做好相关配置
:::

### Vssue

安装插件

```bash
$ yarn add @vssue/vuepress-plugin-vssue
$ yarn add @vssue/api-github-v3
```

修改配置

```js
module.exports = {
    plugins: [
        ['@vssue/vuepress-plugin-vssue', {
            platform: 'github',
            owner: 'cnguu',
            repo: 'blog-vssue',
            clientId: '',
            clientSecret: ''
        }]
    ]
}
```

### Valine

```js
module.exports = {
    themeConfig: {
        valine: {
            appId: '',
            appKey: '',
            placeholder: '在这里写下你的留言丨支持 MarkDown 语法',
            notify: false,
            verify: true,
            avatar: 'mp',
            pageSize: 8,
            recordIP: true,
            lang: 'zh-cn'
        }
    }
}
```

## 小图标

1. 注册 [阿里巴巴矢量图标库](https://www.iconfont.cn/)
2. 新建项目，并添加自己喜欢的图标
3. 引入 Symbol 的 CDN 链接（也可以下载到本地使用）

```js
module.exports = {
    head: [
        ['script', {src: '//at.alicdn.com/t/font_xxx.js'}]
    ]
}
```

4. 在 MarkDown 中使用

```markdown
<Icon name="github" />

<Icon name="man" color="#39c5bb" />

<Icon name="woman" size="2em" />
```

| 参数 | 说明 |
| :-: | :-: |
| name | 图标名称 |
| color | 图标颜色 |
| size | 图标大小（建议使用单位：em） |

## 百度

```js
module.exports = {
    themeConfig: {
        baiDu: {
            tongJi: '',
            autoPush: true
        }
    }
}
```

| 参数 | 说明 |
| :-: | :-: |
| tongJi | 百度统计<br>`https://hm.baidu.com/hm.js?tongJi` |
| autoPush | 百度自动推送 |

## 多语言

```js
module.exports = {
    themeConfig: {
        en: {
            locales: {},
            navs: [],
            nameplate: {},
            buttons: [],
            footer: {},
        },
        'zh-CN': {}
    }
}
```

## 主题样式

新建文件：`/docs/.vuepress/styles/variable.less`

```less
@primary-color: #9a69ec;
@link-color: #9a69ec;
@tip-color: #3c67bd;
@success-color: #52c41a;
@warning-color: #faad14;
@error-color: #f5222d;

@codeLang: bash, c, css, cpp, cmake, coffeescript, coffee, d, dart, docker, dockerfile, ejs, erlang, git, go, graphql, html, http, ini, java, javascript, jq, js, json, jsonp, json5, jsx, kotlin, latex, tex, context, less, lua, makefile, markdown, md, matlab, nginx, objectivec, perl, php, phpdoc, plsql, powershell, pug, python, py, q, r, regex, ruby, rb, rust, sass, scss, scala, shell, smarty, sql, stylus, svg, swift, toml, ts, tsx, twig, typescript, vim, visual-basic, vb, wiki, xml, yaml, yml;
```

| 参数 | 说明 |
| :-: | :-: |
| @primary-color | 主题色 |
| @link-color | 链接色 |
| @tip-color | 提示色 |
| @success-color | 成功色 |
| @warning-color | 警告色 |
| @error-color | 错误色 |
| @codeLang | 代码块语言 |

> 代码块支持的语言：[PrismJs](https://prismjs.com/#supported-languages)

## 升级

```bash
$ yarn upgrade vuepress-theme-yur@1.4.3

// 或者
$ yarn upgrade-interactive --latest
```

## 订阅

::: tip
新版本发布后，将会有邮件通知您！
:::

![vuepress-theme-yur订阅](/20200208/wvl4IBbWuZQAk1S5.png)
