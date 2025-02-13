import { execSync } from "child_process";
import { stringToDates } from "./util.js";

console.log("\n\n");
const dates = stringToDates(2025, "HIRE ME");
console.log(dates);

for (const date of dates) {
    const dateString = date.toString().split("(")[0];
    const command = `git commit --date="${dateString}" -m "${date.toDateString()}" --allow-empty`;
    execSync(command);
}
