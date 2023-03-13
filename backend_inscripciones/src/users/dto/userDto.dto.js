"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var UserDto = /** @class */ (function () {
    function UserDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ description: 'Password del Usuario' }),
        (0, class_validator_1.IsOptional)()
    ], UserDto.prototype, "dni");
    __decorate([
        (0, swagger_1.ApiProperty)({ description: 'Email' }),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsEmail)()
    ], UserDto.prototype, "email");
    __decorate([
        (0, swagger_1.ApiProperty)({ description: 'Nombres del usuario' }),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)()
    ], UserDto.prototype, "firstName");
    __decorate([
        (0, swagger_1.ApiProperty)({ description: 'Nombres del usuario' }),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)()
    ], UserDto.prototype, "lastName");
    __decorate([
        (0, swagger_1.ApiProperty)({ description: 'Nombres del usuario' }),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)()
    ], UserDto.prototype, "cuil");
    __decorate([
        (0, swagger_1.ApiProperty)({ description: 'Nombres del usuario' }),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)()
    ], UserDto.prototype, "situacion");
    __decorate([
        (0, swagger_1.ApiProperty)({ description: 'Nombres del usuario' }),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)()
    ], UserDto.prototype, "nivel");
    __decorate([
        (0, swagger_1.ApiProperty)({ required: true, description: 'PROVINCIA' }),
        (0, class_validator_1.IsOptional)()
    ], UserDto.prototype, "nacimiento");
    return UserDto;
}());
exports.UserDto = UserDto;
