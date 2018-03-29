# Installation
> `npm install --save @zhishinet-types/react-onsenui`

# Summary
This package contains type definitions for React OnSenui (react-onsenui) (https://onsen.io/v2/docs/guide/react/).

Match react-onsenui@1.10.0 and onsenui@2.9.2

# Details
Files were exported from https://www.github.com/snipking/react-onsenui-types-hotfix

Extends from `@types/react-onsenui@2.1.2` which files were exported from https://www.github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-onsenui

Add:
 - All components add HtmlProps support
 - `ActionSheet` and `ActionSheetButton` component
 - `List.renderRow` function support `row` and `index` parameter
 - `Navigator.renderPage` function support `route` and `navigator` parameter
 - `Toast` component
 - `PullHook` component
 - `SpeedDial` Component
 - `SpeedDialItem` Component
 - `Checkbox` Component
 - `Modal` `Page` `Popover`... add `onDeviceBackButton` function
 - `Segment` Component
 - `ListTitle` Component
 - Fix component event handle function parameter loss
 - Fix some type error
 - Fix component onChange event error
 - Fix navigator methods option parameters

# How to use

Change `tsconfig.json` and set `react-onsenui` module reference `node_modules/@zhishinet-types/react-onsenui` in path like

```
{
    "compilerOptions": {
        ...
        "baseUrl": ".",
        "paths": {
            "*": ["node_modules/@zhishinet-types/*"]
        }
    }
}
```

[Reference for TypeScript module resolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html)
[TypeScript 2: custom typings for untyped npm module](https://stackoverflow.com/questions/40222162/typescript-2-custom-typings-for-untyped-npm-module)

# Credits
These definitions were written by Ozytis <https://ozytis.fr>. Hotfix by Derek.Chia <snipking@gmail.com>
