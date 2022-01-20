"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvitationScroller = void 0;
const skip_limit_scroller_1 = require("./skip-limit-scroller");
class InvitationScroller extends skip_limit_scroller_1.SkipLimitScroller {
    constructor({ fetchInvitations, skip = 0, limit = 100 }) {
        super({ skip, limit });
        this.fetchInvitations = fetchInvitations;
    }
    async fetch() {
        return this.fetchInvitations({ skip: this.skip, limit: this.limit });
    }
}
exports.InvitationScroller = InvitationScroller;
//# sourceMappingURL=invitation.scroller.js.map