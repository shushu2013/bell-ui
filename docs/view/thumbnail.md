> 基础用法

```js
export default {
  template: `
    <Thumbnail
      url="https://avatars0.githubusercontent.com/u/17703135?s=140"
      width="60"
      height="60"
    />
  `,
}
```

> 图片裁剪

```js
export default {
  template: `
    <Thumbnail
      url="https://avatars0.githubusercontent.com/u/17703135?s=140"
      width="60"
      height="60"
      formatUrl="{{formatUrl}}"
    />
  `,
  data() {
    return {
      formatUrl(data) {
        console.log('formatUrl', data)
        return 'https://avatars.githubusercontent.com/u/2732303?v=4'
      }
    }
  }
}
```

> 支持四种操作

四种操作依次为 `放大(zoom)`、`上传(upload)`、`下载(download)`、`删除(delete)`。

每种操作对应一个事件，如下：

```js
export default {
  template: `
    <Thumbnail
      url="https://avatars0.githubusercontent.com/u/17703135?s=140"
      width="140"
      height="140"
      showZoom
      showUpload
      showDownload
      showDelete
      on-zoom="zoomImage()"
      on-upload="uploadImage()"
      on-download="downloadImage()"
      on-delete="deleteImage()"
      beforeUpload="{{beforeUpload}}"
    />
  `,
  data() {
    return {
      beforeUpload(data) {
        data.callback(data.fileList)
      }
    }
  },
  methods: {
    zoomImage() {
      console.log('zoom')
    },
    uploadImage(_, data) {
      console.log('upload', data)
    },
    downloadImage() {
      window.open('https://avatars0.githubusercontent.com/u/17703135')
    },
    deleteImage() {
      console.log('delete')
    }
  }
}
```

> 占位图

当还没有缩略图时，可显示占位图。

```js
export default {
  template: `
    <Thumbnail
      width="140"
      height="140"
    >
      <template slot="placeholder">
        随便显示啥
      </template>
    </Thumbnail>
  `
}
```

> 加载中

```js
export default {
  template: `
    <Thumbnail
      width="140"
      height="140"
      loading
    >
      <template slot="placeholder">
        随便显示啥
      </template>
    </Thumbnail>
  `
}
```

```js
export default {
  template: `
    <Thumbnail
      width="140"
      height="140"
      url="https://avatars0.githubusercontent.com/u/17703135?s=140"
      loading
    />
  `,
}
```

> 简洁风格

```js
export default {
  template: `
    <Thumbnail
      width="140"
      height="140"
      url="https://avatars0.githubusercontent.com/u/17703135?s=140"
      simple
    />
  `
}
```


#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
url | 图片地址 | string | - | -
width | 显示宽度 | numeric | - | -
height | 显示宽度 | numeric | - | -
alt | 原生 `alt` 属性 | string | - | -
simple | 是否为简洁风格 | boolean | - | -
loading | 是否加载中 | boolean | - | -
showZoom | 是否显示放大图标 | boolean | - | -
showUpload | 是否显示上传图标 | boolean | - | -
showDownload | 是否显示下载图标 | boolean | - | -
showDelete | 是否显示删除图标 | boolean | - | -
formatUrl | 图片裁剪函数 | function | - | -
beforeUpload | 上传前执行的函数 | function | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Slots

名称 | 说明
---|---
placeholder | 自定义占位图

> Events

名称 | 说明
---|---
error | 图片加载失败时触发
zoom | 点击放大图标时触发
upload | 点击下载图标时触发
download | 点击下载图标时触发
delete | 点击删除图标时触发