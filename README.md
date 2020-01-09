# Ant Design Plugin for Graze
This package is a plugin for [Graze](https://github.com/elis/graze) that integrates [Ant Design](https://ant.design/) with a support for a custom theme.

## Server-side Rendering Support

The plugin will automatically generate your theme's CSS on the server. CSS is optimized for the generated markup using [dropcss](https://github.com/leeoniya/dropcss) CSS cleaner. 

## Usage

Install the plugin using `yarn`:

```bash
$ yarn add graze-plugin-antd
```

or using `npm`:

```bash
$ npm install --save graze-plugin-antd
```


In `graze.config.js`:

```js
export const plugins = [
  require('graze-plugin-antd')({})
]
```

### With custom theme

Pass a `theme` property to the plugin options that `require`s your `less` theme file in `graze.config.js`:
```js
export const plugins = [
  require('graze-plugin-antd')({
    theme: () => require('./src/my-theme.less')
  })
]
```

You'll need to add support for `less` files - install `razzle-plugin-less`:

```bash
$ yarn add razzle-plugin-less
```

Add `less` plugin to `razzle.config.js`:
```js
module.exports = {
  plugins: [
    {
      name: 'less',
      options: {
        less: {
          javascriptEnabled: true,
        }
      }
    }
  ]
}
```

Now make sure to `@import` the `antd.less` file and override any of the [default variables](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less) in `src/my-theme.less`:

```less
@import "~antd/dist/antd.less"; // Load antd default styles

@primary-color: #6b48ff; // primary color for all components
@link-color: #6b48ff; // link color
@success-color: #e21134; // success state color
@warning-color: #faad14; // warning state color
@error-color: #ff501b; // error state color
```
