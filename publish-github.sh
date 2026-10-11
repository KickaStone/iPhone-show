#!/usr/bin/env bash
set -euo pipefail

project_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
cd "$project_dir"
repo="KickaStone/iPhone-show"
remote_url="https://github.com/${repo}.git"

command -v gh >/dev/null || { echo 'Please install GitHub CLI (gh) first.' >&2; exit 1; }
gh api user --jq .login >/dev/null
gh auth setup-git
node --check dist/media.js
node --check dist/app.js

if [ ! -e .git ]; then
  git init -b main
fi

existing_remote="$(git remote get-url origin 2>/dev/null || true)"
if [ -z "$existing_remote" ]; then
  git remote add origin "$remote_url"
elif [ "$existing_remote" != "$remote_url" ] && [ "$existing_remote" != "git@github.com:${repo}.git" ]; then
  echo "The existing origin points to a different repository: $existing_remote" >&2
  exit 1
fi

current_branch="$(git branch --show-current)"
if [ "$current_branch" != main ]; then
  echo 'Please switch to the main branch before running this script.' >&2
  exit 1
fi

if ! git diff --cached --quiet; then
  echo 'There are already staged changes. Commit or unstage them before running this script.' >&2
  exit 1
fi

git add .gitignore README.md package.json dist/index.html dist/style.css dist/app.js dist/media.js publish-github.sh
if ! git diff --cached --quiet; then
  git commit -m "Publish iPhone history website with product photos and launch videos"
fi

git push -u origin main
local_commit="$(git rev-parse HEAD)"
remote_commit="$(gh api "repos/${repo}/git/ref/heads/main" --jq .object.sha)"
if [ "$local_commit" != "$remote_commit" ]; then
  echo 'The remote branch changed. Please check the repository before retrying.' >&2
  exit 1
fi
printf '\nUploaded and verified: https://github.com/%s\n' "$repo"
