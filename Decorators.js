// Decorators in typescript
// it is a special kind of feature / decalartion that can be attachde to classes ,methods, property to modify their  behavior.
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
// Decorators are a powerful TypeScript feature that allow you to add metadata and modify classes and their members at design time.
// Four main types:
// Class decorator: Marks or transforms an entire class.
// Method decorator: Wraps/enhances instance methods.
// Property decorator: Augments field behaviors.
// Parameter decorator: Attaches logic to argument positions.
function classLogger(constructor) {
    console.log(constructor.name);
}
function keyDetails(target, key) {
    console.log(key);
}
var CustomMath = function () {
    var _classDecorators = [classLogger];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _value1_decorators;
    var _value1_initializers = [];
    var _value1_extraInitializers = [];
    var CustomMath = _classThis = /** @class */ (function () {
        function CustomMath_1(x, y) {
            this.value1 = __runInitializers(this, _value1_initializers, void 0);
            this.value2 = __runInitializers(this, _value1_extraInitializers);
            this.value1 = x;
            this.value2 = y;
        }
        return CustomMath_1;
    }());
    __setFunctionName(_classThis, "CustomMath");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _value1_decorators = [keyDetails];
        __esDecorate(null, null, _value1_decorators, { kind: "field", name: "value1", static: false, private: false, access: { has: function (obj) { return "value1" in obj; }, get: function (obj) { return obj.value1; }, set: function (obj, value) { obj.value1 = value; } }, metadata: _metadata }, _value1_initializers, _value1_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CustomMath = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CustomMath = _classThis;
}();
var cm1 = new CustomMath(10, 20);
// override function  with the decorator in typescript
function updatedSum(target, key, descriptior) {
    descriptior.value = function sum(x, y) {
        var output = x + y;
        return "the value of the sum is :" + output;
    };
}
var CustomMath2 = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _sum_decorators;
    return _a = /** @class */ (function () {
            function CustomMath2() {
                __runInitializers(this, _instanceExtraInitializers);
            }
            CustomMath2.prototype.sum = function (x, y) {
                return x + y;
            };
            return CustomMath2;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _sum_decorators = [updatedSum];
            __esDecorate(_a, null, _sum_decorators, { kind: "method", name: "sum", static: false, private: false, access: { has: function (obj) { return "sum" in obj; }, get: function (obj) { return obj.sum; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var cm2 = new CustomMath2();
console.log(cm2.sum(10, 20));
