// Matomo (tracking.emailchef.com, site 4). Mintlify loads every .js file in the content root on all pages.
var _paq = (window._paq = window._paq || []);
_paq.push(["setExcludedQueryParams", ["squeezetablet.com", "radicediunopercento.squeezetablet.com"]]);
_paq.push(["setExcludedReferrers", ["secure.avangate.com", "dashboard.serversmtp.com", "www.chrisco.eu", "com.google.android.gm", "aax.amazon-adsystem.com", "statics.teams.cdn.office.net", "euc-word-view.officeapps.live.com", "mail.google.com", "temp-mail.org", "tagassistant.google.com", "outlook.live.com", "smailpro.com", "teams.microsoft.com", "render.alipay.com"]]);
_paq.push(["trackPageView"]);
_paq.push(["enableLinkTracking"]);
(function () {
  var u = "https://tracking.emailchef.com/";
  _paq.push(["setTrackerUrl", u + "matomo.php"]);
  _paq.push(["setSiteId", "4"]);
  var g = document.createElement("script");
  g.async = true;
  g.src = u + "matomo.js";
  document.head.appendChild(g);
})();

// Client-side navigation does not reload the page, so track each route change.
var lastUrl = location.href;
window.addEventListener("mintlify:navigate", function () {
  if (location.href === lastUrl) return;
  _paq.push(["setReferrerUrl", lastUrl]);
  lastUrl = location.href;
  _paq.push(["setCustomUrl", lastUrl]);
  _paq.push(["setDocumentTitle", document.title]);
  _paq.push(["trackPageView"]);
  _paq.push(["enableLinkTracking"]);
});
