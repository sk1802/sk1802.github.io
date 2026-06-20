# Software Civilization Atlas

An interactive prototype for exploring GitHub repositories as a **technical map**. Instead of traditional search and discovery, navigate a galaxy of software projects organized by **technical DNA**—semantic similarity, dependencies, and structure—rather than popularity metrics.

## Live Demo
[Software Civilization Atlas](https://sk1802.github.io/software_civilisation_atlas/)

## Features

- **Full-screen interactive canvas map** with pan, zoom, hover, and click interactions
- **Civilization filters** to explore repositories by their development pattern (Sigma, Autobots, Decepticons, Quintessons, Drifters)
- **Repository inspector** showing craftsmanship, machine influence, stability, velocity metrics
- **Technical neighborhoods** powered by semantic clustering—find related projects by what they do, not how many stars they have
- **Search and drill-down** to locate specific repositories and explore their technical ecosystem
- **Overlay controls** for cluster nebulae and nearest neighbor connections

## How It Works

1. **Repositories are positioned** in 2D space based on their technical similarity (semantic vectors, dependency profiles, code structure)
2. **Clusters represent neighborhoods**—regions of related technical work (Kernel Systems, Cloud Native, Machine Learning, Web Frameworks, etc.)
3. **Civilizations categorize evolution patterns**—how projects move through development cycles (ancient systems, fast movers, factory-generated, etc.)
4. **Metrics measure characteristics**:
   - **Craftsmanship**: Code quality, documentation depth, review patterns
   - **Machine Influence**: Generated templates, automation density, repetition
   - **Stability**: Maintenance continuity and release consistency
   - **Velocity**: Commit activity and feature movement

## Dataset Scope

The current atlas visualizes repositories with **5,000+ GitHub stars**.

This threshold was chosen to keep the atlas explorable in a browser while still capturing major software ecosystems. Loading millions of repositories simultaneously would significantly reduce usability and rendering performance.

The atlas is intended as a high-signal map of influential open-source projects rather than a complete mirror of GitHub.

## Getting Started

### Run Locally

Serve over HTTP so the browser can load JSON data:

```bash
# Python 3
python -m http.server 8000

# Or with npm/Node
npx http-server
```

Then open: `http://localhost:8000/software_civilisation_atlas/`

### Data Loading

The app loads data in this priority order:

1. **Sharded index** (`data/atlas_index.json` + `data/atlas_shards/`)—for large datasets
2. **Single static file** (`data/atlas_nodes.json`)—smaller, easier to manage
3. **Built-in demo data**—hardcoded sample repositories

> **Note**: Direct file:// URLs won't work due to browser CORS restrictions on fetch(). Always serve over HTTP.

## Interaction Guide

| Action | Result |
|--------|--------|
| **Click** a repository | Select and inspect it; see related projects |
| **Search** by name | Find and center on a project |
| **Drag** the map | Pan around the galaxy |
| **Scroll/Wheel** | Zoom in and out |
| **Toggle filters** | Show/hide civilization types |
| **Toggle overlays** | Display cluster nebulae or neighbor links |

## Understanding the Metrics

### Craftsmanship (%)
Reflects code maturity and maintainability. High scores indicate:
- Comprehensive documentation
- Active code review processes
- Long-term stability signals

### Machine Influence (%)
Measures automation and generation patterns. High scores suggest:
- Template-heavy code
- Auto-generated or scaffolded structures
- High consistency from repeated patterns

### Stability (%)
Indicates maintenance cadence and project continuity:
- Regular release cycles
- Consistent commit activity
- Predictable governance

### Velocity (%)
Shows activity and feature movement speed:
- Commit frequency
- Release rate
- Feature addition pace

## Civilization Types

- **Vector Sigma** – Ancient craftsmanship. Slow, deliberate systems with long institutional memory.
- **Autobots** – Humans augmented by automation. High craft with visible acceleration.
- **Decepticons** – Fast-moving frontier projects where velocity outpaces refinement.
- **Quintessons** – Factory worlds and generated surfaces. Highly automated, highly repeatable.
- **Drifters** – Unclassified frontier projects with incomplete signal.

## Building Your Own Atlas

To use your own repository data:

```bash
# Fetch repository metadata (requires GITHUB_TOKEN)
export GITHUB_TOKEN="your_token_here"
python scripts/fetch_repositories.py --limit 1000 --output data/repositories.jsonl

# Build static atlas data for GitHub Pages
python scripts/build_static_atlas.py \
  --input data/repositories.jsonl \
  --index-output data/atlas_index.json \
  --shard-dir data/atlas_shards \
  --shard-size 5000
```

## About This Project

This is an **atlas**, not a leaderboard. It's designed to explore how software ecosystems evolve and organize around technical patterns—not to rank projects or developers. It answers questions like:

- Where do similar projects cluster in technical space?
- What distinguishes maintenance patterns across ecosystems?
- How do different technical neighborhoods relate to each other?

## Technology

- **Frontend**: Vanilla JavaScript, Canvas rendering
- **Data format**: JSON (static, GitHub Pages compatible)
- **No external dependencies** for the frontend—pure vanilla JS

## Data Sources & Attribution

Repository metadata was derived from the Kaggle dataset:

https://www.kaggle.com/datasets/pelmers/github-repository-metadata-with-5-stars

While the source dataset contains repositories across a wide range of popularity levels, the current Software Civilization Atlas focuses on repositories with **5,000+ GitHub stars**. This threshold was chosen to maintain an explorable browser-scale visualization while capturing major software ecosystems and influential open-source projects.

This project was inspired by the concept behind the Map of GitHub visualization and reimagines repository discovery as a technical civilization atlas focused on software ecosystems, development patterns, and technical neighborhoods.

## License

The Software Civilization Atlas source code, visualization components, and atlas-generation pipeline are licensed under the MIT License.

Repository metadata was derived from a dataset distributed under the Creative Commons Attribution 4.0 International (CC BY 4.0) license:

https://creativecommons.org/licenses/by/4.0/

The MIT License applies to this project's code and visualization assets. The underlying repository metadata remains subject to its original CC BY 4.0 license.


## Disclaimer

Craftsmanship, Machine Influence, Stability, and Velocity are heuristic visualization metrics intended for exploration and comparison.

They are not objective measures of software quality and should not be interpreted as rankings.
---
## Project Status

Experimental visualization project.

Current atlas coverage includes repositories with 5,000+ GitHub stars and is intended as an exploration of software ecosystems rather than a complete map of GitHub.

**Explore the map.** Find your corner of the technical universe.

## Author

Created by Sumit Kumar.

Portfolio: https://sk1802.github.io/portfolio