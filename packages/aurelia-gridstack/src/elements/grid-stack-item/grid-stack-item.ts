import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import { PLATFORM } from 'aurelia-pal';
import { customElement, useView } from 'aurelia-templating';
import { bindable } from 'aurelia-typed-observable-plugin';
import { GridItemHTMLElement } from 'gridstack';

@inject(Element)
@customElement('grid-stack-item')
@useView(PLATFORM.moduleName('./grid-stack-item.html'))
export class GridStackItem {
  constructor(public root: IGridStackItemElement) { }

  @bindable.number({ defaultBindingMode: bindingMode.twoWay })
  x?: number;
  xChanged() {
    if (this.x !== undefined) {
      this.root.setAttribute('gs-x', this.x.toString());
    } else {
      this.root.removeAttribute('gs-x');
    }
  }

  @bindable.number({ defaultBindingMode: bindingMode.twoWay })
  y?: number;
  yChanged() {
    if (this.y !== undefined) {
      this.root.setAttribute('gs-y', this.y.toString());
    } else {
      this.root.removeAttribute('gs-y');
    }
  }

  @bindable.number({ defaultBindingMode: bindingMode.twoWay })
  w?: number;
  wChanged() {
    if (this.w !== undefined) {
      this.root.setAttribute('gs-w', this.w.toString());
    } else {
      this.root.removeAttribute('gs-w');
    }
  }

  @bindable.number({ defaultBindingMode: bindingMode.twoWay })
  h?: number;
  hChanged() {
    if (this.h !== undefined) {
      this.root.setAttribute('gs-h', this.h.toString());
    } else {
      this.root.removeAttribute('gs-h');
    }
  }

  @bindable.booleanAttr
  noMove: boolean;
  noMoveChanged() {
    if (this.noMove) {
      this.root.setAttribute('gs-no-move', 'true');
    } else {
      this.root.removeAttribute('gs-no-move');
    }
  }

  @bindable.booleanAttr
  noResize: boolean;
  noResizeChanged() {
    if (this.noResize) {
      this.root.setAttribute('gs-no-resize', 'true');
    } else {
      this.root.removeAttribute('gs-no-resize');
    }
  }

  @bindable.booleanAttr
  locked: boolean;
  lockedChanged() {
    if (this.locked) {
      this.root.setAttribute('gs-locked', 'true');
    } else {
      this.root.removeAttribute('gs-locked');
    }
  }
}

export interface IGridStackItemElement extends GridItemHTMLElement {
  au: {
    controller: {
      viewModel: GridStackItem;
    };
  };
}
