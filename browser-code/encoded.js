// ==UserScript==
// @name         🔒 Secure Loader
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Loads remote source
// @author       You
// @match        *://*/*
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==


// Obfuscated code here :
const encodedURL="aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2RhdjU3MC90YW1wZXJtb25rZXktc2NyaXB0LW9zYXMvcmVmcy9oZWFkcy9tYWluL3JlbW90ZS1jb2RlL2luZGV4Lmpz";const CACHE_KEY="remote_script_code";var remoteURL,cachedCode;(function(){function jso$ft$giden$GM_95setValue(){return GM_setValue}function jso$ft$giden$CACHE_95KEY(){return CACHE_KEY}function jso$ft$boe$_33_61_61(a,b){return a!== b}function jso$ft$giden$console(){return console};remoteURL= atob(encodedURL);;cachedCode= GM_getValue(CACHE_KEY,null);if(cachedCode){try{Function(cachedCode)()}catch(err){console.error("Error running cached code:",err)}};fetch(remoteURL).then((res)=>{return res.text()}).then((latestCode)=>{if(jso$ft$boe$_33_61_61(latestCode,cachedCode)){jso$ft$giden$GM_95setValue()(jso$ft$giden$CACHE_95KEY(),latestCode);jso$ft$giden$console().log("\ud83c\udd95 Updated script from remote.")}else {jso$ft$giden$console().log("\u2705 Remote script is up-to-date.")}}).catch((err)=>{jso$ft$giden$console().warn("\u26a0\ufe0f Could not fetch remote script:",err)})})()

// DO NOT COPY BELOW INTO CLIENT SOURCE!! (CLIENT SSCRIPT OR EDITOR)

/*

OBFUSCATION INSTRUCTION

WEBSITE (Obfuscation Tool):
https://javascriptobfuscator.com/Javascript-Obfuscator.aspx

OPTIONS USED:
✅ Code Transpositon
✅ Dead Code Insertion
✅ Move Members
✅ Flat Transform

VARIABLE EXCLUSION LIST:
GM_getValue,GM_setValue,GM_info,console

*/
