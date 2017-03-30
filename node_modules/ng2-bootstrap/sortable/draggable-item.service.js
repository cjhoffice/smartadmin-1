"use strict";
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
var DraggableItemService = (function () {
    function DraggableItemService() {
        this.onCapture = new Subject_1.Subject();
    }
    DraggableItemService.prototype.dragStart = function (item) {
        this.draggableItem = item;
    };
    DraggableItemService.prototype.getItem = function () {
        return this.draggableItem;
    };
    DraggableItemService.prototype.captureItem = function (overZoneIndex, newIndex) {
        if (this.draggableItem.overZoneIndex !== overZoneIndex) {
            this.draggableItem.lastZoneIndex = this.draggableItem.overZoneIndex;
            this.draggableItem.overZoneIndex = overZoneIndex;
            this.onCapture.next(this.draggableItem);
            this.draggableItem = Object.assign({}, this.draggableItem, { overZoneIndex: overZoneIndex, i: newIndex });
        }
        return this.draggableItem;
    };
    DraggableItemService.prototype.onCaptureItem = function () {
        return this.onCapture;
    };
    DraggableItemService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    DraggableItemService.ctorParameters = function () { return []; };
    return DraggableItemService;
}());
exports.DraggableItemService = DraggableItemService;
