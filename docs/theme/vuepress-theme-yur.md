---
title: vuepress-theme-yur
description: vuepress theme yur document
sidebar: auto
---

## Preview

[Demo](https://www.gleehub.com/)

## Install

```bash
$ yarn add vuepress-theme-yur
```

Use theme

```js
module.exports = {
    theme: 'yur'
}
```

## Basic Information

```js
module.exports = {
    themeConfig: {
        lang: 'zh-CN',
        logo: '/logo.png',
        author: 'cnguu',
        authorLink: 'https://github.com/cnguu/',
        locales: {
            title: 'Stars so bright',
            description: 'Writing life with you'
        }
    }
}
```

| Parameter | Description |
| :-: | :-: |
| lang | Default language<br>Optional: `en` `zh-CN` |
| logo | Website logo link |
| author | Webmaster name |
| authorLink | Webmaster name off-site jump link |
| locales | Language localization<br>See details: [Multilingual file](https://cdn.jsdelivr.net/gh/cnguu/vuepress-theme-yur@master/yur/plugins/Translation/locales/zh-CN.js) |

## Navigate

### New category

create a new file: `/docs/programe/index.md`

```markdown
---

title: Program

meta:
  - name: description
    content: Program
  - name: keywords
    content: programming,technology

---
```

Change config

```js
module.exports = {
    themeConfig: {
        navs: [
            {text: 'Program', link: '/program/'}
        ]
    }
}
```

| Parameter | Description |
| :-: | :-: |
| text | Category Name |
| link | Categories |

### Open timeline

Create a new file：`/docs/timeline.md`

```markdown
---

title: Timeline

meta:
  - name: description
    content: timeline
  - name: keywords
    content: timeline

---
```

Change config

```js
module.exports = {
    themeConfig: {
        timeline: true
    }
}
```

### Add links

Create a new file: `/docs/links.md`

```markdown
---

title: Links

meta:
  - name: description
    content: links
  - name: keywords
    content: links

---
```

Change config

```js
module.exports = {
    themeConfig: {
        links: [
            {
                name: 'Blog',
                lists: [
                    {
                        title: 'Stars so bright',
                        subtitle: 'Writing life with you',
                        link: 'https://www.gleehub.com/',
                        logo: 'https://static.xmt.cn/cc50c217cbe342ce951324583f2c6139.png',
                        color: '#9a69ec'
                    }
                ]
            }
        ]
    }
}
```

| Parameter | Description |
| :-: | :-: |
| name | Classification name |
| lists | Lists |
| lists.title | Site name |
| lists.subtitle | Site description |
| lists.link | Site url |
| lists.logo | Site logo link |
| lists.color | Site theme |

### Add about page

Create a new file: `/docs/about.md`

```markdown
---

title: About

meta:
  - name: description
    content: about
  - name: keywords
    content: about

---

---

## Self introduction

Ten thousand words are omitted here ...

---
```

Change config

```js
module.exports = {
    themeConfig: {
        about: true,
        avatar: 'https://static.xmt.cn/cc50c217cbe342ce951324583f2c6139.png'
    }
}
```

| Parameter | Description |
| :-: | :-: |
| avatar | Profile picture link |

Add social

```js
module.exports = {
    themeConfig: {
        social: {
            github: 'https://github.com/cnguu/',
            facebook: 'https://www.facebook.com/profile.php?id=100031941487870',
            twitter: 'https://twitter.com/cnguu_cn'
        }
    }
}
```

> Type as icon name: [Icon](https://www.antdv.com/components/icon-cn/)

## Footer

```js
module.exports = {
    themeConfig: {
        footer: {
            icon: '/footer.jpg',
            one: [
                {
                    title: 'Yur',
                    subtitle: 'VuePress Theme',
                    link: 'https://github.com/cnguu/vuepress-theme-yur'
                }
            ],
            two: [
                {
                    title: 'Hosted On GitHub',
                    link: 'https://www.github.com/',
                    type: 'cloud',
                    theme: 'filled'
                }
            ],
            three: [
                {
                    title: 'Gitter',
                    link: 'https://gitter.im/vuepress-theme/yur?utm_source=share-link&utm_medium=link&utm_campaign=share-link',
                    type: 'message',
                    theme: 'outlined'
                }
            ]
        }
    }
}
```

| Parameter | Description |
| :-: | :-: |
| icon | Icon |
| one | First column |
| one.title | Title |
| one.subtitle | Description |
| one.link | Off-site jump link |
| two | The second column |
| two.title | Title |
| two.link | Off-site jump link |
| two.type | Icon name |
| two.theme | Icon type<br>Default: `outlined`<br>Optional: `filled` `twoTone` |
| three | Third column<br>Parameters are the same as in the second column |

## Homepage

### Cover picture

1:1 images are recommended, at least 500x500 pixels

```js
module.exports = {
    themeConfig: {
        banner: '/banner.png'
    }
}
```

### Button group

```js
module.exports = {
    themeConfig: {
        buttons: [
            {text: 'Read', link: '/posts/', type: 'primary'},
            {text: 'About', link: '/about.html', type: 'default'}
        ]
    }
}
```

| Parameter | Description |
| :-: | :-: |
| text | Text |
| link | Jump link within the station |
| type | Button type<br>Optional: `default` `primary` `dashed` `danger` `link` |

### Site description effects

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

| Parameter | Description |
| :-: | :-: |
| typeSpeed | Normal speed |
| backSpeed | Reverse speed |
| startDelay | Start delay (ms) |
| backDelay | Reverse delay (ms) |
| loop | Loop |
| showCursor | Show pointer |
| placeholder | Placeholder |
| disableBackTyping | Disable reverse input |
| cursorChar | Pointer character |

### Number of tags

```js
module.exports = {
    themeConfig: {
        tagSize: 100 // Default: 100
    }
}
```

## Article Information

### Random cover

Theme comes with 49 images

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

### Pagination

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

| Parameter | Description |
| :-: | :-: |
| pageSize | Articles per page<br>Default: 12 |
| pageSizeOptions | Paging filters<br>Default: ['12', '24', '48', '96'] |

### Front Matter

```markdown
---

title: Welcome to my blog

meta:
  - name: description
    content: Welcome to my blog
  - name: keywords
    content: Welcome,visit,blog

created: 2020/02/08

updated: 2020/02/08

tags:
  - Blog
  - VuePress

banner: /banner.jpg

password: true

discuss: false

copyright: Reprinting is allowed, the original link must be retained, and the copyright belongs to the blogger

---

## title

48,000 words omitted from the text ...
```

| Parameter | Description |
| :-: | :-: |
| title | Article title |
| meta | Increase SEO<br>description: page description<br>keywords: page keywords |
| created | Article creation time<br>Required |
| updated | Article update time |
| tags | Article tags<br>The first one is the main tag |
| banner | Article cover<br>Default: random |
| password | Article access password<br>Default password: 52yur |
| discuss | Comment switch |
| copyright | Copyright statement |

### Reward

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

## Nameplate

```js
module.exports = {
    themeConfig: {
        nameplate: {
            title: 'Yur',
            width: '42px',
            height: '32px',
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

## First load page

```js
module.exports = {
    themeConfig: {
        curtain: {
            tip: 'Loading...',
            textShadow: '#e91e63'
        }
    }
}
```

| Parameter | Description |
| :-: | :-: |
| tip | Prompt text |
| textShadow | Text shadow color |

## Customer chat

### crisp

Register account, add site, get assigned ID: [Crisp](https://crisp.chat/en/)

```js
module.exports = {
    themeConfig: {
        crisp: 'xxx'
    }
}
```

## 添加评论

Supported comments:

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
First make the relevant configuration according to the official document of the review
:::

### Vssue

Install the plugin

```bash
$ yarn add @vssue/vuepress-plugin-vssue
$ yarn add @vssue/api-github-v3
```

Change config

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
            placeholder: 'Write your message here 丨 Support MarkDown syntax',
            notify: false,
            verify: true,
            avatar: 'mp',
            pageSize: 8,
            recordIP: true,
            lang: 'en'
        }
    }
}
```

## Icons

1. Register [IconFont](https://www.iconfont.cn/)
2. Create a new project and add your favorite icons
3. Introduced Symbol's CDN link (can also be downloaded for local use)

```js
module.exports = {
    head: [
        ['script', {src: '//at.alicdn.com/t/font_xxx.js'}]
    ]
}
```

4. Use in MarkDown

```markdown
<Icon name="github" />

<Icon name="man" color="#39c5bb" />

<Icon name="woman" size="2em" />
```

| Parameter | Description |
| :-: | :-: |
| name | Icon name |
| color | Icon color |
| size | Icon size (recommended unit: em) |

## Languages

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

## Theme style

create a new file: `/docs/.vuepress/styles/variable.less`

```less
@primary-color: #9a69ec;
@link-color: #9a69ec;
@tip-color: #3c67bd;
@success-color: #52c41a;
@warning-color: #faad14;
@error-color: #f5222d;

@codeLang: bash, c, css, cpp, cmake, coffeescript, coffee, d, dart, docker, dockerfile, ejs, erlang, git, go, graphql, html, http, ini, java, javascript, jq, js, json, jsonp, json5, jsx, kotlin, latex, tex, context, less, lua, makefile, markdown, md, matlab, nginx, objectivec, perl, php, phpdoc, plsql, powershell, pug, python, py, q, r, regex, ruby, rb, rust, sass, scss, scala, shell, smarty, sql, stylus, svg, swift, toml, ts, tsx, twig, typescript, vim, visual-basic, vb, wiki, xml, yaml, yml;
```

| Parameter | Description |
| :-: | :-: |
| @primary-color | Theme color |
| @link-color | Link color |
| @tip-color | Hint color |
| @success-color | Success color |
| @warning-color | Warning color |
| @error-color | Wrong color |
| @codeLang | Code language |

> Languages supported: [PrismJs](https://prismjs.com/#supported-languages)

## Upgrade

```bash
$ yarn upgrade vuepress-theme-yur@1.4.3

// OR
$ yarn upgrade-interactive --latest
```

## Subscribe

::: tip
When the new version is released, you will be notified by email!
:::

![subscribe vuepress-theme-yur](/20200208/wvl4IBbWuZQAk1S5.png)
