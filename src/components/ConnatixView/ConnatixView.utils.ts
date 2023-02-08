export class ConnatixViewUtils {
    private _eventType: string = "message";
    private _partialPlatformUrl = "elements";
    private readonly _handler;
    private _window: Window;
    private _defaultHandler = (event: MessageEvent): void => {
        this.isConnatixEmitter(event) && this._handler(event.data)
    };

    constructor(handler: EventListener, window: Window) {
        this._handler = handler;
        this._window = window;
    }

    public init(): void {
        // @ts-ignore
        this._window.addEventListener(this._eventType, this._defaultHandler, false);
    }

    public destroy(): void {
        // @ts-ignore
        this._window.removeEventListener(this._eventType, this._defaultHandler, false);
    }

    private isConnatixEmitter(event: MessageEvent): boolean {
        return event.origin.indexOf(this._partialPlatformUrl) > -1;
    }
}
