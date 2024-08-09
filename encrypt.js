import crypto from "crypto";

// type in your answer in the update function

let encrypted_answer= crypto.createHash('sha256').update('Sint Maarten').digest('hex');
//                                                       ^

console.log(encrypted_answer)
