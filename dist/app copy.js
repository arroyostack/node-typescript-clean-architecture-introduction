"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
let outputMessage = '';
const base = 6;
const headerMessage = `
===========================
Tabla del ${base}
===========================
`;
for (let i = 0; i <= 10; i++) {
    outputMessage += `${base} x ${i} = ${base * i} \n`;
}
outputMessage = headerMessage + outputMessage;
// The fs function will make a new folder called outputs.
const outputPath = `outputs`;
fs_1.default.mkdirSync(outputPath, { recursive: true });
// File system will write a tableX.txt in outputs, if outputs folder not found will use the function above.
fs_1.default.writeFileSync(`outputs/table-${base}.txt`, outputMessage);
console.log(outputMessage);
