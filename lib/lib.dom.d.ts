/** Provides special properties and methods (beyond those of the HTMLElement interface it also has available to it by inheritance) for manipulating the layout and presentation of inline frame elements. */
interface HTMLIFrameElement extends HTMLElement {
  /**
   * Sets or retrieves how the object is aligned with adjacent text.
   */
  /** @deprecated */
  align: string;
  allow: string;
  allowFullscreen: boolean;
  allowPaymentRequest: boolean;
  frameBorder: string;
  /**
   * Retrieves the document object of the page or frame.
   */
  readonly contentDocument: Document | null;
  /**
   * Retrieves the object of the specified.
   */
  readonly contentWindow: WindowProxy | null;
  /**
   * Sets or retrieves whether to display a border for the frame.
   */
  /** @deprecated */
  frameBorder: string;
  /**
   * Sets or retrieves the height of the object.
   */
  height: string;
  /**
   * Sets or retrieves a URI to a long description of the object.
   */
  /** @deprecated */
  longDesc: string;
  /**
   * Sets or retrieves the top and bottom margin heights before displaying the text in a frame.
   */
  /** @deprecated */
  marginHeight: string;
  /**
   * Sets or retrieves the left and right margin widths before displaying the text in a frame.
   */
  /** @deprecated */
  marginWidth: string;
  /**
   * Sets or retrieves the frame name.
   */
  name: string;
  referrerPolicy: ReferrerPolicy;
  readonly sandbox: DOMTokenList;
  /**
   * Sets or retrieves whether the frame can be scrolled.
   */
  /** @deprecated */
  scrolling: string;
  /**
   * Sets or retrieves a URL to be loaded by the object.
   */
  src: string;
  /**
   * Sets or retrives the content of the page that is to contain.
   */
  srcdoc: string;
  /**
   * Sets or retrieves the width of the object.
   */
  width: string;
  getSVGDocument(): Document | null;
  addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLIFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
  addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
  removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLIFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
  removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}