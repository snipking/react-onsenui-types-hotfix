// Type definitions for React OnSenui (react-onsenui) 1.4.0
// Project: https://onsen.io/v2/api/react/
// Definitions by: Ozytis <https://ozytis.fr>
// Extends by: Derek.Chia <snipking@gmail.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Component, HTMLProps } from 'react';

export interface Modifiers_string {
    default?: string;
    material?: string;
}

export interface Modifiers_number {
    default?: number;
    material?: number;
}

export interface AnimationOptions {
    duration?: number;
    delay?: number;
    timing?: string;
}

/*** splitter ***/
export class SplitterSide extends Component<{
    side?: "left" | "right",
    collapse?: "portrait" | "landscape" | boolean,
    isOpen?: boolean,
    onOpen?(e?: Event): void,
    onPreOpen?(e?: Event): void,
    onPreClose?(e?: Event): void,
    onModeChange?(e?: Event): void,
    onClose?(e?: Event): void,
    isSwipeable?: boolean,
    swipeTargetWidth?: number,
    width?: number,
    animation?: "overlay" | "default"
    animationOptions?: AnimationOptions,
    openThreshold?: number,
    mode?: "collapse" | "split"
} & HTMLProps<any>, any> { }

export class SplitterContent extends Component<{} & HTMLProps<any>> { }

export class Splitter extends Component<{} & HTMLProps<any>> { }

/*** toolbar ***/

export class Toolbar extends Component<{} & HTMLProps<any>> {}

export class BottomToolbar extends Component<{
    modifier?: string
} & HTMLProps<any>, any> {}

export class ToolbarButton extends Component<{
    modifier?: string,
    disabled?: boolean,
    onClick?(e?: Event): void
} & HTMLProps<any>, any> {}

/*** icon ***/
export class Icon extends Component<{
    modifier?: string,
    icon?: string | Modifiers_string,
    size?: number | Modifiers_number,
    rotate?: 90 | 180 | 270,
    fixedWidth?: boolean,
    spin?: boolean
} & HTMLProps<any>, any> {}

/*** page ***/

export class Page extends Component<{
    contentStyle?: any,
    modifier?: string,
    renderModal?(): void,
    renderToolbar?(): void,
    renderBottomToolbar?(): void,
    renderFixed?(): void,
    onInit?(): void,
    onShow?(): void,
    onHide?(): void
} & HTMLProps<any>, any> {}

/*** Grid ***/
export class Col extends Component<{
    verticalAlign?: "top" | "bottom" | "center",
    width?: string
} & HTMLProps<any>, any> {}

export class Row extends Component<{
    verticalAlign?: "top" | "bottom" | "center",
} & HTMLProps<any>, any> {}

/*** Navigation ***/
export class BackButton extends Component<{
    modifier?: string,
    onClick?(navigator: Navigator): void
} & HTMLProps<any>, any> {}

export class Navigator extends Component<{
    renderPage(route?: any, navigator?: Navigator): any,
    initialRouteStack?: string[],
    initialRoute?: any,
    onPrePush?(): void,
    onPostPush?(): void,
    onPrePop?(): void,
    onPostPop?(): void,
    animation?: "slide" | "lift" | "fade" | "none" | string,
    animationOptions?: AnimationOptions
} & HTMLProps<any>, any> {
    resetPage(route: any, options: any): void;
    resetPageStack(route: any, options: any): void;
    pushPage(route: any, options: any): void;
    popPage(route: any, options: any): void;
}

/*** Carousel ***/
export class Carousel extends Component<{
    direction?: "horizontal" | "vertical",
    fullscreen?: boolean,
    overscrollable?: boolean,
    centered?: boolean,
    itemWidth?: number,
    itemHeight?: number,
    autoScroll?: boolean,
    autoScrollRatio?: number,
    swipeable?: boolean,
    disabled?: boolean,
    index?: number,
    autoRefresh?: boolean,
    onPostChange?(): void,
    onRefresh?(): void,
    onOverscroll?(): void
    animationOptions?: AnimationOptions
} & HTMLProps<any>, any> {}

export class CarouselItem extends Component<{
    modifier: string
} & HTMLProps<any>, any> {}

/*** AlertDialog ***/
export class AlertDialog extends Component<{
    onCancel?(): void,
    isOpen?: boolean,
    isCancelable?: boolean,
    isDisabled?: boolean,
    animation?: "none" | "default",
    modifier?: string,
    maskColor?: string,
    animationOptions?: AnimationOptions,
    onPreShow?(): void,
    onPostShow?(): void,
    onPreHide?(): void,
    onPostHide?(): void,
} & HTMLProps<any>, any> {}

export class Dialog extends Component<{
    onCancel?(): void,
    isOpen?: boolean,
    isCancelable?: boolean,
    isDisabled?: boolean,
    animation?: "none" | "default",
    modifier?: string,
    maskColor?: string,
    animationOptions?: AnimationOptions,
    onPreShow?(): void,
    onPostShow?(): void,
    onPreHide?(): void,
    onPostHide?(): void,
} & HTMLProps<any>, any> {}

export class Modal extends Component<{
    animation?: "fade" | "none",
    animationOptions?: AnimationOptions
    onShow?(): void,
    onHide?(): void,
    isOpen?: boolean
} & HTMLProps<any>, any> {}

export class Popover extends Component<{
    getTarget?(): Component<any> | HTMLElement,
    onCancel?(): void,
    isOpen?: boolean,
    isCancelable?: boolean,
    isDisabled?: boolean,
    animation?: "none" | "default",
    modifier?: string,
    maskColor?: string,
    animationOptions?: AnimationOptions,
    onPreShow?(): void,
    onPostShow?(): void,
    onPreHide?(): void,
    onPostHide?(): void,
} & HTMLProps<any>, any> {}

export class Toast extends Component<{
    isOpen: boolean,
    animation?: string,
    modifier?: string,
    animationOptions?: AnimationOptions,
    onPreShow?(): void,
    onPostShow?(): void,
    onPreHids?(): void,
    onPostHide?(): void,
    onDeviceBackButton?(): void
} & HTMLProps<any>, any> {}

export class ProgressBar extends Component<{
    modifier?: string,
    value?: number,
    secondaryValue?: boolean,
    intermediate?: boolean,
} & HTMLProps<any>, any> {}

export class ProgressCircular extends Component<{
    modifier?: string,
    value?: number,
    secondaryValue?: boolean,
    intermediate?: boolean,
} & HTMLProps<any>, any> {}

export class Ripple extends Component<{
    color?: string,
    background?: string,
    disabled?: boolean,
} & HTMLProps<any>, any> {}

/*** Forms ***/
export class Fab extends Component<{
    modifier?: string,
    ripple?: boolean,
    position?: string,
    disabled?: boolean,
    onClick?(): void,
} & HTMLProps<any>, any> {}

export class Button extends Component<{
    modifier?: string,
    disabled?: boolean,
    ripple?: boolean,
    onClick?(e?: Event): void
} & HTMLProps<any>, any> {}

export class Input extends Component<{
    modifier?: string,
    disabled?: boolean,
    onChange?(e: Event): void,
    value?: string,
    checked?: boolean,
    placeholder?: string,
    type?: string,
    inputId?: string,
    float?: boolean,
} & HTMLProps<any>, any> {}

export class Range extends Component<{
    modifier?: string,
    onChange?(e: Event): void,
    value?: number,
    disabled?: boolean,
} & HTMLProps<any>, any> {}

export class Switch extends Component<{
    onChange?(e: Event): void,
    checked?: boolean,
    disabled?: boolean,
    inputId?: string
} & HTMLProps<any>, any> {}

export class Radio extends Component<{
    modifier?: string,
    disabled?: string,
    onChange?(event: Event): void,
    value?: string,
    checked?: boolean,
    inputId?: string
} & HTMLProps<any>, any> {}

export class SearchInput extends Component<{
    modifier?: string,
    disabled?: boolean,
    onChange?(event: Event): void,
    value?: string,
    inputId?: string
} & HTMLProps<any>, any> {}

export class Select extends Component<{
    modifier?: string,
    disabled?: boolean,
    onChange?(event: Event): void,
    value?: string,
    multiple?: boolean,
    autofocus?: boolean,
    required?: boolean,
    form?: string,
    size?: string
} & HTMLProps<any>, any> {}

/**
 * Tabs
 */

export class Tab extends Component<{} & HTMLProps<any>> { }

export class TabActive extends Component<{} & HTMLProps<any>> { }

export class TabInactive extends Component<{} & HTMLProps<any>> { }

export interface TabbarEvent extends Event {
    index: number
}

export class Tabbar extends Component<{
    index?: number,
    renderTabs?(): any,
    position?: "bottom" | "top" | "auto",
    animation?: "none" | "slide" | "fade",
    animationOptions?: AnimationOptions,
    onPreChange?(event: TabbarEvent): void,
    onPostChange?(event: TabbarEvent): void,
    onReactive?(): void,
} & HTMLProps<any>, any> { }

/**
 * Lists
 */

export class LazyList extends Component<{
    modifier?: string,
    length?: number,
    renderRow(rowIndex: number): any,
    calculateItemHeight(rowIndex: number): any,
} & HTMLProps<any>, any> { }

export class List extends Component<{
    modifier?: string,
    dataSource?: string[],
    renderRow?(row?: any, index?: number): void,
    renderHeader?(): void,
    renderFooter?(): void,
} & HTMLProps<any>, any> {}

export class ListHeader extends Component<{
    modifier?: string,
} & HTMLProps<any>, any> {}

export class ListItem extends Component<{
    modifier?: string,
    tappable?: boolean,
    tapBackgroundColor?: string,
    lockOnDrag?: boolean,
} & HTMLProps<any>, any> {}

/**
 * ActionSheet
 */

 export class ActionSheet extends Component<{
     onCancel?(): void,
     isOpen: boolean,
     isCancelable?: boolean,
     isDisabled?: boolean,
     animation?: string,
     modifier?: string,
     maskColor?: string,
     animationOptions?: AnimationOptions,
     onPreShow?(): void,
     onPostShow?(): void,
     onPreHide?(): void,
     onPostHide?(): void,
     onDeviceBackButton?(): void
 } & HTMLProps<any>, any> {}

 export class ActionSheetButton extends Component<{
     modifier?: string,
     icon?: string
 } & HTMLProps<any>, any> {}

 /**
  * Control
  */

  export class PullHook extends Component<{
      onChange?(event: Event): void,
      onLoad?(done: any): void,
      disabled?: boolean,
      height?: number,
      thresholdHeight?: number,
      fixedContent?: boolean

  } & HTMLProps<any>, any> {}

  export class SpeedDial extends Component<{
      modifier?: string,
      position?: string,
      direction?: string,
      disabled?: string
  } & HTMLProps<any>, any> {}

  export class SpeedDialItem extends Component<{
      modifier?: string,
      onClick?(...args: any[]): void
  } & HTMLProps<any>, any> {}
