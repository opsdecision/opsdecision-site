const D = document.body.dataset;
const Q = new URLSearchParams(location.search);
const test = Q.get('test') === '1';
function src() {
  return Q.get('utm_source') || document.referrer || 'direct';
}
function emit(name, params) {
  if (test) return;
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  } else {
    window.dataLayer.push({event: name, ...params});
  }
}
if (D.assetId) emit('asset_view', {
  asset_id: D.assetId, asset_type: D.assetType,
  landing_asset: location.pathname, traffic_source: src()
});
document.querySelectorAll('[data-vendor-cta]').forEach(a => {
  a.addEventListener('click', () => emit('vendor_cta_click', {
    asset_id: D.assetId, asset_type: D.assetType,
    vendor_id: a.dataset.vendorCta, cta_position: a.dataset.ctaPosition,
    traffic_source: src()
  }));
});
