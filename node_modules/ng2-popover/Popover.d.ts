import { ComponentRef, ViewContainerRef, ComponentFactoryResolver, OnChanges, SimpleChange, EventEmitter } from "@angular/core";
import { PopoverContent } from "./PopoverContent";
export declare class Popover implements OnChanges {
    protected viewContainerRef: ViewContainerRef;
    protected resolver: ComponentFactoryResolver;
    protected PopoverComponent: typeof PopoverContent;
    protected popover: ComponentRef<PopoverContent>;
    protected visible: boolean;
    constructor(viewContainerRef: ViewContainerRef, resolver: ComponentFactoryResolver);
    content: string | PopoverContent;
    popoverDisabled: boolean;
    popoverAnimation: boolean;
    popoverPlacement: "top" | "bottom" | "left" | "right" | "auto" | "auto top" | "auto bottom" | "auto left" | "auto right";
    popoverTitle: string;
    popoverOnHover: boolean;
    popoverCloseOnClickOutside: boolean;
    popoverCloseOnMouseOutside: boolean;
    popoverDismissTimeout: number;
    onShown: EventEmitter<Popover>;
    onHidden: EventEmitter<Popover>;
    showOrHideOnClick(): void;
    showOnHover(): void;
    hideOnHover(): void;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    toggle(): void;
    show(): void;
    hide(): void;
    getElement(): any;
}
