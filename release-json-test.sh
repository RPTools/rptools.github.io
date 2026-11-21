#!/bin/bash

set -x

RELEASE_JSON=$(cat 'maptool-releases.json')

read -r -d '' release_organizer <<'EOF'
{
  "version": .tag_name,
  "release-page": .html_url,
  "release-date": .published_at,
  "assets": .assets | [ .[] | .browser_download_url ] | {
    "windows": {
      "exe": map(select(test("\\.exe$"))) | first,
      "msi": map(select(test("\\.msi$"))) | first,
      "zip": map(select(test("win.*\\.zip$"))) | first
    },
    "mac": {
      "dmg": map(select(test("\\.dmg$"))) | first,
      "pkg": map(select(test("\\.pkg$"))) | first,
      "zip": map(select(test("mac.*\\.zip$"))) | first
    },
    "linux": {
      "deb": map(select(test("\\.deb$"))) | first,
      "rpm": map(select(test("\\.rpm$"))) | first,
      "arch": map(select(test("\\.pkg.tar.zst$"))) | first,
      "zip": map(select(test("linux.*\\.zip$"))) | first
    }
  }
}
EOF

echo "$RELEASE_JSON" | jq "${release_organizer}"
