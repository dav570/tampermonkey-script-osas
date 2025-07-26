(function() {
    'use strict';

    // Function to replace text within an element
    function replaceText(element, searchPattern, replacement) {
        if (element.nodeType === Node.TEXT_NODE) {
            element.textContent = element.textContent.replace(searchPattern, replacement);
        } else if (element.nodeType === Node.ELEMENT_NODE) {
            for (const childNode of element.childNodes) {
                replaceText(childNode, searchPattern, replacement);
            }
        }
    }

    // Define the regex pattern to match any IP address
    const ipAddressRegex = /\b(?:\d{1,3}\.){3}\d{1,3}\b/g;
    // Define the IP address to replace the matched IP addresses
    const replacementIpAddress = '200.32.246.130';

    // Define the location names to be replaced and the replacement location names
    const countryToReplace = 'Nigeria';
    const countryToReplace1 = 'United States';
    const replacementCountry = 'Belize';

    const statesToReplace = [
        'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue',
        'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'Gombe',
        'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos',
        'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto',
        'Taraba', 'Yobe', 'Zamfara', 'Federal Capital Territory', 'FCT'
    ];

    const citiesToReplace = [
        'Umuahia', 'Yola', 'Uyo', 'Awka', 'Bauchi', 'Yenagoa', 'Makurdi',
        'Maiduguri', 'Calabar', 'Asaba', 'Abakaliki', 'Benin City', 'Ado-Ekiti',
        'Enugu', 'Gombe', 'Owerri', 'Dutse', 'Kaduna', 'Kano', 'Katsina', 'Birnin Kebbi',
        'Lokoja', 'Ilorin', 'Ikeja', 'Lafia', 'Minna', 'Abeokuta', 'Akure', 'Osogbo',
        'Ibadan', 'Jos', 'Port Harcourt', 'Sokoto', 'Jalingo', 'Damaturu', 'Gusau',
        'Abuja',

        'Miami', 'Florida'
    ];

    // Generate a regex pattern to match Nigerian state and city names
    const stateNamesRegexPattern = `\\b(${statesToReplace.join('|')})\\b`;
    const citiesRegexPattern = `\\b(${citiesToReplace.join('|')})\\b`;

    // Define the regex pattern to match network names (case-insensitive)
    const networkRegex = /\bMTN(?: Networks Limited)?\b/gi;
    const networkRegex1 = /\bAirtel(?: Nigeria Limited)?\b/gi;
    const networkRegex2 = /\bCyberzone(?: )?\b/gi;

    // Define the replacement word for any word starting with "Airtel"
    const replacementNetwork = 'BTL';

    // Function to perform replacements on the target element
    function performReplacements(targetElement) {
        replaceText(targetElement, ipAddressRegex, replacementIpAddress);
        replaceText(targetElement, new RegExp(countryToReplace, 'g'), replacementCountry);
        replaceText(targetElement, new RegExp(countryToReplace1, 'g'), replacementCountry);
        replaceText(targetElement, networkRegex, replacementNetwork);
        replaceText(targetElement, networkRegex1, replacementNetwork);
        replaceText(targetElement, networkRegex2, replacementNetwork);

        // Generate regex patterns to match Nigerian state names and cities
        const stateNamesRegex = new RegExp(stateNamesRegexPattern, 'gi');
        const citiesRegex = new RegExp(citiesRegexPattern, 'gi');

        replaceText(targetElement, stateNamesRegex, 'Belize');
        replaceText(targetElement, citiesRegex, 'Belize City');
    }

    // Monitor the body for mutations using MutationObserver
    const observer = new MutationObserver((mutationsList, observer) => {
        for (const mutation of mutationsList) {
            // Check if the mutation involves added nodes
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                // Perform replacements on the added nodes
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        performReplacements(node);
                    }
                });
            }
        }
    });

    // Start observing the body for mutations
    observer.observe(document.body, { childList: true, subtree: true });

    // Perform initial replacements on the whole document
    performReplacements(document.body);

    // Change color of specific elements
    function styleSelectedElements() {
        const selectors = [
            '#container > div.pre-fold > div.masthead.masthead-dark > div > div > div > div.pure-u-1.pure-u-lg-3-5.pure-u-xl-4-5.u-c.nav-container > div.nav-menu > ul > li.u-hidden.u-visible-lg.username-link > span > a > svg > use',
            '#container > div.pre-fold > div.masthead.masthead-dark > div > div > div > div.pure-u-1.pure-u-lg-3-5.pure-u-xl-4-5.u-c.nav-container > div.nav-menu > ul > li.u-hidden.u-visible-lg.username-link > span > a'
        ];
        selectors.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
                element.style.color = 'white';
            }
        });
    }

    // Watch for late-loading elements and update their text
    const delayedReplacements = [
        {
            selector: '#container > div.pre-fold > div.main-content > div > div > div > div.pure-u-custom-speedtest > div.speedtest-view > div > div.main-view > div > div.result-area.result-area-connection > div.pure-g > div.pure-u-5-12.u-c.result-item-container-align-left > div > div > div > div.result-label > a',
            text: 'Digi'
        },
        {
            selector: '#container > div.pre-fold.mobile-test-complete > div.main-content > div > div > div > div.pure-u-custom-speedtest > div.speedtest-view > div > div.main-view > div > div.result-area.result-area-test > div > div > div.result-container-speed.result-container-speed-active > div:nth-child(4) > div > div > div.pure-u-1-2.u-c.eot-info-test > div:nth-child(2) > div.result-label > a',
            text: 'Digi'
        },
        {
            selector: '#container > div.pre-fold > div.main-content > div > div > div > div.pure-u-custom-speedtest > div.speedtest-view > div > div.main-view > div > div.result-area.result-area-connection > div.pure-g > div.pure-u-5-12.u-c.result-item-container-align-left > div > div > div > div:nth-child(3) > span',
            text: 'Belize City'
        },
        {
            selector: '#container > div.pre-fold.mobile-test-complete > div.main-content > div > div > div > div.pure-u-custom-speedtest > div.speedtest-view > div > div.main-view > div > div.result-area.result-area-test > div > div > div.result-container-speed.result-container-speed-active > div:nth-child(4) > div > div > div.pure-u-1-2.u-c.eot-info-test > div:nth-child(2) > div.result-data.js-sponsor-name',
            text: 'Belize City'
        }
    ];

    function updateDelayedElements(root) {
        delayedReplacements.forEach(({ selector, text }) => {
            const element = root.querySelector(selector);
            if (element && !element.dataset.processed) {
                element.textContent = text;
                element.dataset.processed = 'true';
            }
        });
    }

    // MutationObserver setup
    const pageObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    performReplacements(node);
                    updateDelayedElements(node);
                }
            });
        });
    });

    // Start observing
    pageObserver.observe(document.body, { childList: true, subtree: true });

    // Initial replacements and styling
    performReplacements(document.body);
    styleSelectedElements();
    updateDelayedElements(document.body);

    // === ADDITION: Remove unwanted elements and their content ===

    function removeTargetElements() {
        const removeSelectors = [
            'div.privacy-message',
            '.consent-banner',
            '#consent-popup',
            '.cc-banner',
            '#onetrust-banner-sdk',
            // Add any other selectors you want to remove here
            '#container > div.pre-fold.mobile-test-complete > div.main-content > div > div > div > div.pure-u-custom-speedtest > div.speedtest-view > div > div.main-view > div > div.result-area.result-area-test > div > div > div.test-meta > div > div > div.result-item.result-item-inline.result-item-align-center.result-item-id > div.result-label',
            '#container > div.pre-fold.mobile-test-complete > div.main-content > div > div > div > div.pure-u-custom-speedtest > div.speedtest-view > div > div.main-view > div > div.result-area.result-area-test > div > div > div.test-meta > div > div > div.result-item.result-item-inline.result-item-align-center.result-item-id > div.result-data > a'
        ];

        removeSelectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                el.remove();
            });
        });
    }

    // Observe DOM changes to continuously remove unwanted elements if they appear
    const removeObserver = new MutationObserver(() => {
        removeTargetElements();
    });

    removeObserver.observe(document.body, { childList: true, subtree: true });

    // Initial call to remove unwanted elements on page load
    removeTargetElements();

    // Only run the interval if we're on the correct site
    if (location.hostname === "www.speedtest.net") {
        let lastUrl = location.href;

        const intervalId = setInterval(() => {
            const currentUrl = location.href;

            if (currentUrl !== lastUrl) {
                lastUrl = currentUrl;

                if (/^\/result\/\d+$/.test(location.pathname)) {
                    const cleanedUrl = location.origin + "/result";
                    window.history.replaceState({}, '', cleanedUrl);

                    // Stop checking after cleaning the URL
                    clearInterval(intervalId);
                }
            }
        }, 500);
    }

})();
