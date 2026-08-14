# Development dependencies

You'll need a ruby 3.x installation, including bundler and headers for native extension building. E.g., on Ubuntu-based systems:
```sh
apt install ruby ruby-bundler ruby-dev
```

Then, install this project's dependencies from the Gemfile:
```sh
bundle install
```

Finally, run the server for testing the website:
```sh
bundle exec jekyll serve --open-url
```

# GitHub Personal Access Token

Jekyll has features that can directly query the GitHub API for information. While we don't currently make use of such features, they may be put to use in the future. To make sure your system is ready for such an eventuality without being rate limited, create a Personal Access Token (PAT) on GitHub, then set `JEKYLL_GITHUB_TOKEN` accordingly. E.g., in your `~/.bash_profile`:
```bash
export JEKYLL_GITHUB_TOKEN='github_pat_…'
```
