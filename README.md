# ShiftDecision MVP v1
Deployable static MVP. Before production: replace https://example.com with approved domain in canonicals/sitemap/robots; connect Analytics/Search Console; update Privacy for actual tracking; only add affiliate URLs after approved enrollment.

Data:
- data/vendors.json — vendor/decision/evidence
- data/assets.json — asset intent/dependencies
- data/field_asset_map.json — changed field -> affected assets
- data/change_candidates.json — update queue

Tracking dataLayer events:
- asset_view: asset_id, asset_type, landing_asset, traffic_source
- vendor_cta_click: asset_id, asset_type, vendor_id, cta_position, traffic_source

Use ?test=1 for QA without emitting events.
