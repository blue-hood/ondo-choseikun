"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queries = {
    location: (obj, { id }, context, info) => {
        return {
            latitude: Number(id),
            longitude: 1.5
        };
    }
};
