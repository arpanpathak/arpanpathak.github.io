# Arpan Pathak · Portfolio

Personal portfolio & GitHub Pages site: [arpanpathak.github.io](https://arpanpathak.github.io)

Built with plain HTML / CSS / JS. No frameworks, no build step: just fast, static, and easy to maintain.

## Sections

- **About**: 8+ years as a systems software engineer (Amazon → Oracle → Microsoft)
- **CivicSense**: flagship edge-AI road-safety project
- **openBatarangs**: local-first agentic coding CLI + demo video
- **Experience**: timeline with quantified impact
- **Projects**: top GitHub repos, sorted by stars (data from live GitHub API)
- **Skills**: languages, ML inference, GPU/CUDA, systems, networking, cloud, data
- **Education**: B.Tech CSE, RCC Institute of Information Technology
- **Contact**: email + socials + books

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Update projects

Project cards are rendered from `js/main.js` → `projects` array. Refresh the data with:

```bash
gh api "users/arpanpathak/repos?per_page=100&sort=updated" --jq '.[] | {name, description, language, stargazers_count, forks_count, homepage}'
```

## License

Content © Arpan Pathak. Code MIT.
