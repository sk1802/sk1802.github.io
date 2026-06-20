const civilizations = {
  sigma: {
    name: "Vector Sigma",
    color: "#b8c5d8",
    lore: "Ancient craftsmanship. Slow, deliberate systems with long institutional memory.",
  },
  autobots: {
    name: "Autobots",
    color: "#a7b9aa",
    lore: "Humans augmented by automation. High craft with visible acceleration.",
  },
  decepticons: {
    name: "Decepticons",
    color: "#b98f8f",
    lore: "Fast-moving frontier projects where velocity outpaces refinement.",
  },
  quintessons: {
    name: "Quintessons",
    color: "#aaa3bf",
    lore: "Factory worlds and generated surfaces. Highly automated, highly repeatable.",
  },
  drifters: {
    name: "Drifters",
    color: "#c0ad82",
    lore: "Unclassified frontier projects with incomplete signal.",
  },
};

let clusters = [
  {
    id: "systems",
    name: "Kernel Systems",
    x: -620,
    y: -210,
    radius: 340,
    color: "rgba(90,150,255,0.28)"
  },

  {
    id: "cloud",
    name: "Cloud Native",
    x: 120,
    y: -270,
    radius: 380,
    color: "rgba(90,255,170,0.28)"
  },

  {
    id: "ml",
    name: "Machine Learning",
    x: 590,
    y: 180,
    radius: 360,
    color: "rgba(190,120,255,0.28)"
  },

  {
    id: "web",
    name: "Web Frameworks",
    x: -220,
    y: 285,
    radius: 320,
    color: "rgba(255,180,90,0.28)"
  },

  {
    id: "security",
    name: "Security",
    x: -650,
    y: 230,
    radius: 280,
    color: "rgba(255,90,90,0.28)"
  },

  {
    id: "data",
    name: "Databases",
    x: 120,
    y: 185,
    radius: 310,
    color: "rgba(255,230,80,0.28)"
  },

  {
    id: "knowledge",
    name: "Knowledge Vaults",
    x: 350,
    y: -40,
    radius: 290,
    color:  "rgba(210,210,220,0.24)"
  }
];

let repositories = [
  repo("torvalds/linux", "systems", "sigma", -560, -235, 98, 18, 91, 42, "The Linux kernel, a gravitational center for operating-system engineering.", ["C", "Kernel", "Drivers"]),
  repo("rust-lang/rust", "systems", "autobots", -365, -260, 94, 36, 88, 74, "A language ecosystem built around safety, compilers, and tooling.", ["Rust", "Compiler", "Toolchain"]),
  repo("systemd/systemd", "systems", "sigma", -500, -90, 86, 23, 82, 58, "Linux system and service manager with deep platform integration.", ["C", "Linux", "Init"]),
  repo("kubernetes/kubernetes", "cloud", "autobots", 120, -310, 89, 44, 84, 82, "Container orchestration platform for cloud-native infrastructure.", ["Go", "Containers", "Orchestration"]),
  repo("prometheus/prometheus", "cloud", "autobots", 255, -245, 82, 39, 86, 68, "Monitoring system and time-series database for infrastructure telemetry.", ["Go", "Observability", "Metrics"]),
  repo("hashicorp/terraform", "cloud", "autobots", 35, -150, 84, 47, 81, 72, "Infrastructure as code for composing and changing cloud resources.", ["Go", "IaC", "Cloud"]),
  repo("pytorch/pytorch", "ml", "autobots", 410, 60, 87, 52, 78, 86, "Tensor computation and deep-learning framework with a broad research surface.", ["Python", "C++", "CUDA"]),
  repo("huggingface/transformers", "ml", "quintessons", 520, 165, 76, 77, 73, 91, "Model library connecting research architectures to production pipelines.", ["Python", "NLP", "Models"]),
  repo("langchain-ai/langchain", "ml", "decepticons", 355, 260, 56, 81, 52, 96, "Composable framework for LLM applications and agent workflows.", ["Python", "LLM", "Agents"]),
  repo("facebook/react", "web", "sigma", -215, 185, 91, 34, 86, 73, "Declarative UI library that shaped modern frontend architecture.", ["JavaScript", "UI", "Components"]),
  repo("vercel/next.js", "web", "autobots", -50, 275, 82, 55, 80, 88, "Full-stack React framework for routing, rendering, and deployment.", ["TypeScript", "React", "SSR"]),
  repo("vuejs/core", "web", "sigma", -320, 295, 88, 31, 83, 69, "Progressive frontend framework with a compact reactive core.", ["TypeScript", "UI", "Reactivity"]),
  repo("postgres/postgres", "data", "sigma", 20, 85, 97, 16, 92, 46, "Relational database with decades of careful systems engineering.", ["C", "SQL", "Storage"]),
  repo("redis/redis", "data", "sigma", 125, 170, 89, 22, 84, 61, "In-memory data structure server for cache, stream, and messaging workloads.", ["C", "Cache", "Data"]),
  repo("elastic/elasticsearch", "data", "autobots", 225, 85, 77, 48, 70, 66, "Distributed search and analytics engine for operational data.", ["Java", "Search", "Analytics"]),
  repo("moby/moby", "cloud", "sigma", -5, -350, 83, 31, 76, 57, "Container runtime components and Docker engine foundations.", ["Go", "Containers", "Runtime"]),
  repo("grafana/grafana", "cloud", "autobots", 250, -90, 78, 51, 78, 84, "Visualization and operations dashboard platform.", ["TypeScript", "Go", "Dashboards"]),
  repo("openssl/openssl", "security", "sigma", -620, 155, 92, 19, 83, 38, "Cryptography and TLS toolkit embedded across software infrastructure.", ["C", "Crypto", "TLS"]),
  repo("OWASP/Amass", "security", "autobots", -480, 260, 70, 45, 62, 67, "Attack-surface mapping and network reconnaissance toolkit.", ["Go", "Security", "Recon"]),
  repo("metasploit/metasploit-framework", "security", "decepticons", -650, 315, 68, 57, 66, 74, "Penetration testing framework and exploit development environment.", ["Ruby", "Security", "Exploit"]),
  repo("microsoft/vscode", "tools", "autobots", -110, -15, 84, 49, 82, 90, "Extensible developer environment with a massive plugin ecosystem.", ["TypeScript", "Editor", "Tools"]),
  repo("git/git", "tools", "sigma", -255, -60, 96, 17, 90, 45, "Distributed version control system at the center of open-source collaboration.", ["C", "VCS", "CLI"]),
  repo("denoland/deno", "tools", "autobots", -80, 90, 78, 46, 74, 80, "Modern JavaScript and TypeScript runtime with secure defaults.", ["Rust", "Runtime", "TypeScript"]),
  repo("openai/openai-cookbook", "ml", "quintessons", 610, 260, 58, 84, 64, 92, "Practical examples and patterns for building with AI APIs.", ["Python", "AI", "Examples"]),
];

const ATLAS_WORLD_SCALE = 2.7;
const MAP_WIDTH = 12400;
const MAP_CONTENT_LEFT = -3400;
const MAP_CONTENT_RIGHT = 3400;
const MAP_VERTICAL_LIMIT = 1700;
const WRAP_PADDING = 120;

// API configuration
const API_BASE = "./";
const USE_API = false;
const STATIC_INDEX_URL = "./data/atlas_index.json";
const STATIC_DATA_URL = "./data/atlas_nodes.json";

function repo(name, cluster, civilization, x, y, craft, machine, stability, velocity, description, tags) {
  return {
    id: name,
    owner: name.split("/")[0],
    name: name.split("/")[1],
    fullName: name,
    cluster,
    civilization,
    x,
    y,
    craft,
    machine,
    stability,
    velocity,
    description,
    tags,
    stars: Math.round((craft * 850 + velocity * 530 + stability * 420) / 1000) * 1000,
  };
}

const canvas = document.querySelector("#atlasCanvas");
const ctx = canvas.getContext("2d");
const inspector = document.querySelector("#inspector");
const tooltip = document.querySelector("#tooltip");
const searchInput = document.querySelector("#searchInput");
const zoomRange = document.querySelector("#zoomRange");
const showClusters = document.querySelector("#showClusters");
const showLinks = document.querySelector("#showLinks");
const filters = document.querySelector("#civilizationFilters");

let dpr = window.devicePixelRatio || 1;
let width = 0;
let height = 0;
let camera = { x: 0, y: 0, zoom: 0.42 };
let pointer = { x: 0, y: 0, down: false, moved: false };
let selected = repositories[0];
let hovered = null;
let activeCivilizations = new Set(Object.keys(civilizations));
let searchTerm = "";
let animationTime = 0;
let nodeFullData = {}; // Cache for full node data

async function loadRepositoriesFromStaticData() {
  const loadedFromIndex = await loadRepositoriesFromStaticIndex();
  if (loadedFromIndex) return true;

  try {
    const response = await fetch(STATIC_DATA_URL);
    if (!response.ok) throw new Error("static atlas data not available");
    const payload = await response.json();
    const nodes = Array.isArray(payload) ? payload : payload.nodes;
    if (Array.isArray(nodes) && nodes.length > 0) {
      if (Array.isArray(payload.clusters) && payload.clusters.length > 0) {
        clusters = payload.clusters.map(normalizeCluster);
      }
      repositories = nodes.map(normalizeRepository);
      selected = repositories[0];
      return true;
    }
  } catch (error) {
    console.warn(`Static atlas data not available (${error.message}). Using demo repositories.`);
  }
  return false;
}

async function loadRepositoriesFromStaticIndex() {
  try {
    const response = await fetch(STATIC_INDEX_URL);
    if (!response.ok) throw new Error("static atlas index not available");
    const payload = await response.json();
    if (!Array.isArray(payload.shards) || payload.shards.length === 0) return false;
    if (Array.isArray(payload.clusters) && payload.clusters.length > 0) {
      clusters = payload.clusters.map(normalizeCluster);
    }
    const shardNodes = await Promise.all(
      payload.shards.map(async (shard) => {
        const shardUrl = new URL(shard.path, new URL(STATIC_INDEX_URL, window.location.href));
        const shardResponse = await fetch(shardUrl);
        if (!shardResponse.ok) throw new Error(`could not load ${shard.path}`);
        return shardResponse.json();
      })
    );
    repositories = shardNodes.flat().map(normalizeRepository);
    if (repositories.length > 0) {
      selected = repositories[0];
      return true;
    }
  } catch (error) {
    console.warn(`Static atlas index not available (${error.message}). Trying single static file.`);
  }
  return false;
}

function normalizeCluster(item) {
  return {
    id: item.id,
    name: item.name || item.id,
    sector: item.sector || "Cybertron Frontier",
    x: Number(item.x || 0) * ATLAS_WORLD_SCALE,
    y: Number(item.y || 0) * ATLAS_WORLD_SCALE,
    radius: Number(item.radius || 190) * ATLAS_WORLD_SCALE * 0.95,
    color: item.color || "rgba(152, 164, 184, 0.06)",
  };
}

// Load repositories from API if available
async function loadRepositoriesFromAPI() {
  if (!USE_API) return false;
  
  try {
    const response = await fetch(`${API_BASE}/nodes`);
    if (!response.ok) throw new Error("API not available");
    
    const data = await response.json();
    if (data.nodes && data.nodes.length > 0) {
      repositories = data.nodes.map(normalizeRepository);
      selected = repositories[0];
      return true;
    }
  } catch (e) {
    console.warn(`API not available (${e.message}). Using hardcoded repositories.`);
  }
  return false;
}

function normalizeRepository(item) {
  const fullName = item.fullName || item.full_name || item.nameWithOwner || item.id || "";
  const tags = item.tags || item.topics || [];
  return {
    ...item,
    id: item.id || fullName,
    owner: item.owner || fullName.split("/")[0] || "",
    name: item.name || fullName.split("/")[1] || fullName,
    fullName,
    tags: tags.map((tag) => (typeof tag === "string" ? tag : tag.name)).filter(Boolean),
    stars: Number(item.stars || 0),
    craft: Number(item.craft || 45),
    machine: Number(item.machine || 35),
    stability: Number(item.stability || 45),
    velocity: Number(item.velocity || 35),
    cluster: item.cluster || "tools",
    civilization: item.civilization || "drifters",
    description: item.description || "",
    x: Number(item.x || 0) * ATLAS_WORLD_SCALE,
    y: Number(item.y || 0) * ATLAS_WORLD_SCALE,
  };
}

// Fetch full data for a node
async function fetchNodeFullData(nodeId) {
  if (nodeFullData[nodeId]) return nodeFullData[nodeId];
  
  try {
    const response = await fetch(`${API_BASE}/nodes/${encodeURIComponent(nodeId)}`);
    if (response.ok) {
      const data = await response.json();
      nodeFullData[nodeId] = data;
      return data;
    }
  } catch (e) {
    console.error(`Failed to fetch data for ${nodeId}:`, e);
  }
  return null;
}
function fitToAtlas() {
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;

  clusters.forEach(cluster => {
    minX = Math.min(minX, cluster.x - cluster.radius);
    maxX = Math.max(maxX, cluster.x + cluster.radius);

    minY = Math.min(minY, cluster.y - cluster.radius);
    maxY = Math.max(maxY, cluster.y + cluster.radius);
  });

  const padding = 300;

  const atlasWidth = maxX - minX + padding;
  const atlasHeight = maxY - minY + padding;

  const zoomX = width / atlasWidth;
  const zoomY = height / atlasHeight;

  camera.zoom = Math.min(zoomX, zoomY);

  camera.x = -(minX + maxX) / 2;
  camera.y = -(minY + maxY) / 2;

  zoomRange.value = camera.zoom;
}

async function init() {
  const loadedStaticData = await loadRepositoriesFromStaticData();
//   fitToAtlas();
  if (!loadedStaticData) await loadRepositoriesFromAPI();
  
  renderFilters();
  updateInspector();
  resize();
  bindEvents();
  requestAnimationFrame(draw);
}

function renderFilters() {
  filters.innerHTML = Object.entries(civilizations)
    .map(([key, civ]) => {
      const count = repositories.filter((item) => item.civilization === key).length;
      return `
        <button class="filter-button active" data-civilization="${key}" type="button">
          <span class="swatch" style="color:${civ.color}; background:${civ.color}"></span>
          <span>${civ.name}</span>
          <span class="count">${count}</span>
        </button>
      `;
    })
    .join("");
}

function bindEvents() {
  window.addEventListener("resize", resize);
  canvas.addEventListener("pointerdown", onPointerDown);
  canvas.addEventListener("pointermove", onPointerMove);
  window.addEventListener("pointerup", onPointerUp);
  canvas.addEventListener("wheel", onWheel, { passive: false });
  canvas.addEventListener("click", onCanvasClick);
  searchInput.addEventListener("input", onSearch);
  zoomRange.addEventListener("input", () => {
    camera.zoom = Number(zoomRange.value);
  });
  showClusters.addEventListener("change", () => {});
  showLinks.addEventListener("change", () => {});
  filters.addEventListener("click", (event) => {
    const button = event.target.closest(".filter-button");
    if (!button) return;
    const key = button.dataset.civilization;
    if (activeCivilizations.has(key)) {
      activeCivilizations.delete(key);
      button.classList.remove("active");
    } else {
      activeCivilizations.add(key);
      button.classList.add("active");
    }
  });
}

function resize() {
  dpr = window.devicePixelRatio || 1;
  width = canvas.clientWidth;
  height = canvas.clientHeight;
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  zoomRange.value = String(camera.zoom);
}

function onPointerDown(event) {
  pointer = { x: event.clientX, y: event.clientY, down: true, moved: false };
  canvas.classList.add("dragging");
}

function onPointerMove(event) {
  const world = screenToWorld(event.clientX, event.clientY);
  hovered = nearestRepository(world.x, world.y, 12 / camera.zoom);
  if (pointer.down) {
    const dx = event.clientX - pointer.x;
    const dy = event.clientY - pointer.y;
    if (Math.abs(dx) + Math.abs(dy) > 3) pointer.moved = true;
    camera.x += dx / camera.zoom;
    camera.y += dy / camera.zoom;
    constrainCamera();
    pointer.x = event.clientX;
    pointer.y = event.clientY;
  }
  updateTooltip(event);
}

function onPointerUp() {
  pointer.down = false;
  canvas.classList.remove("dragging");
}

function onWheel(event) {
  event.preventDefault();
  const before = screenToWorld(event.clientX, event.clientY);
  const nextZoom = clamp(camera.zoom * Math.exp(-event.deltaY * 0.001), 0.55, 3.2);
  camera.zoom = nextZoom;
  zoomRange.value = String(nextZoom);
  const after = screenToWorld(event.clientX, event.clientY);
  camera.x += after.x - before.x;
  camera.y += after.y - before.y;
  constrainCamera();
}

function onCanvasClick() {
  if (pointer.moved || !hovered) return;
  selected = hovered;
  // Fetch full data if API is available
  if (USE_API && selected.id) {
    fetchNodeFullData(selected.id).then(data => {
      if (data) {
        Object.assign(selected, data);
        updateInspector();
      }
    });
  } else {
    updateInspector();
  }
}

function onSearch(event) {
  searchTerm = event.target.value.trim().toLowerCase();
  const match = repositories.find((item) => item.fullName.toLowerCase().includes(searchTerm));
  if (searchTerm && match) {
    selected = match;
    centerOnRepository(match);
    camera.y += (-match.y - camera.y) * 0.75;
    constrainCamera();
    // Fetch full data if API is available
    if (USE_API && selected.id) {
      fetchNodeFullData(selected.id).then(data => {
        if (data) {
          Object.assign(selected, data);
          updateInspector();
        }
      });
    } else {
      updateInspector();
    }
  }
}

function draw(time) {
  animationTime = time * 0.001;
  ctx.clearRect(0, 0, width, height);
  drawStarfield();
  withWorld(() => {
    if (showClusters.checked) drawClusters();
    if (showLinks.checked) drawNeighborLinks();
    drawRepositories();
  });
  requestAnimationFrame(draw);
}

function drawStarfield() {
  ctx.save();
  ctx.fillStyle = "#02040a";
  ctx.fillRect(0, 0, width, height);
  const dust = ctx.createRadialGradient(width * 0.5, height * 0.46, 40, width * 0.5, height * 0.46, Math.max(width, height) * 0.74);
  dust.addColorStop(0, "rgba(108, 118, 135, 0.08)");
  dust.addColorStop(0.54, "rgba(85, 88, 96, 0.035)");
  dust.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = dust;
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < 260; i += 1) {
    const x = (i * 137.5 + Math.sin(i * 1.9) * 54) % width;
    const y = (i * 89.3 + Math.cos(i * 2.1) * 72) % height;
    const alpha = 0.12 + ((i % 11) / 11) * 0.32;
    const size = i % 17 === 0 ? 1.45 : 0.85;
    ctx.fillStyle = `rgba(226, 231, 238, ${alpha})`;
    ctx.fillRect(x, y, size, size);
  }
  ctx.restore();
}


function drawClusters() {
  const offsets = visibleWrapOffsets();

  clusters.forEach((cluster) => {
    offsets.forEach((offset) => {
      const x = cluster.x + offset;

        const gradient = ctx.createRadialGradient(
        x,
        cluster.y,
        0,
        x,
        cluster.y,
        cluster.radius
        );

        gradient.addColorStop(0.0, cluster.color);
        gradient.addColorStop(0.45, cluster.color);
        gradient.addColorStop(0.85, cluster.color.replace(
        /0\.\d+\)/,
        "0.04)"
        ));
        gradient.addColorStop(1.0, "rgba(0,0,0,0)");
    

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, cluster.y, cluster.radius, 0, Math.PI * 2);
      ctx.fill();
      

// ctx.lineWidth = 3 / camera.zoom;

// ctx.beginPath();
// ctx.arc(
//   x,
//   cluster.y,
//   cluster.radius,
//   0,
//   Math.PI * 2
// );

// ctx.stroke();

      // Cluster label
      const fontSize = Math.max(
        12,
        Math.min(24, 14 / Math.sqrt(camera.zoom))
      );

    //   ctx.fillStyle = "rgba(211,218,228,0.7)";
    ctx.fillStyle = cluster.color.replace(
  /0\.\d+\)/,
  "0.9)"
);
      ctx.font = `600 ${fontSize}px Inter, sans-serif`;
      ctx.textAlign = "center";

      ctx.fillText(
        cluster.name.toUpperCase(),
        x,
        cluster.y - cluster.radius * 0.55
      );

      ctx.textAlign = "left";
    });
  });
}
// function drawClusters() {
//   const offsets = visibleWrapOffsets();
//   clusters.forEach((cluster) => {
//     offsets.forEach((offset) => {
//       const x = cluster.x + offset;
//       const gradient = ctx.createRadialGradient(
//     x,
//     cluster.y,
//     10,
//     x,
//     cluster.y,
//     cluster.radius
// );

// gradient.addColorStop(0, cluster.color);
// gradient.addColorStop(0.68, "rgba(128,136,150,0.026)");
// gradient.addColorStop(1, "rgba(0,0,0,0)");

// ctx.fillStyle = gradient;
// ctx.beginPath();
// ctx.arc(x, cluster.y, cluster.radius, 0, Math.PI * 2);
// ctx.fill();
//     });
//   });
// }

function drawNeighborLinks() {
  if (!selected) return;
  const neighbors = getNeighbors(selected, 4);
  const offsets = visibleWrapOffsets();
  ctx.save();
  offsets.forEach((offset) => {
    const selectedX = selected.x + offset;
    neighbors.forEach((neighbor, index) => {
      const neighborX = nearestWrappedX(neighbor.x, selectedX);
      ctx.strokeStyle = `rgba(177, 188, 203, ${0.26 - index * 0.035})`;
      ctx.lineWidth = 0.9 / camera.zoom;
      ctx.beginPath();
      ctx.moveTo(selectedX, selected.y);
      ctx.lineTo(neighborX, neighbor.y);
      ctx.stroke();
    });
  });
  ctx.restore();
}

function drawRepositories() {
  const offsets = visibleWrapOffsets();
  const densityScale = repositories.length > 50000 ? 0.68 : repositories.length > 10000 ? 0.78 : 0.9;
  repositories.forEach((item) => {
    const visible = activeCivilizations.has(item.civilization);
    const isSelected = item === selected;
    const isHovered = item === hovered;
    const isMatch = searchTerm && item.fullName.toLowerCase().includes(searchTerm);
    if (!visible && !isSelected) return;
    const civ = civilizations[item.civilization];
    const radius = nodeRadius(item, isSelected || isHovered || isMatch) * densityScale / Math.sqrt(Math.max(camera.zoom, 0.34));
    const pulse = isSelected ? 1 + Math.sin(animationTime * 4) * 0.16 : 1;
    offsets.forEach((offset) => {
      const x = item.x + offset;
      ctx.save();
      ctx.globalAlpha = visible ? nodeAlpha(item, isSelected || isHovered || isMatch) : 0.12;
      ctx.shadowColor = "rgba(230, 235, 242, 0.65)";
      ctx.shadowBlur = isSelected || isHovered || isMatch ? 8 : 0;
      ctx.fillStyle = civ.color;
      ctx.beginPath();
      ctx.arc(x, item.y, radius * pulse, 0, Math.PI * 2);
      ctx.fill();
      if (isSelected || isHovered || isMatch) {
        ctx.strokeStyle = "rgba(232, 237, 244, 0.7)";
        ctx.lineWidth = 1 / camera.zoom;
        ctx.beginPath();
        ctx.arc(x, item.y, radius * 2.6 * pulse, 0, Math.PI * 2);
        ctx.stroke();
        ctx.strokeStyle = "rgba(158, 170, 188, 0.32)";
        ctx.beginPath();
        ctx.arc(x, item.y, radius * 4.2, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();
    });
  });
}

function nodeRadius(item, isActive) {
  if (isActive) return 3.2;
  const starWeight = Math.log10(Math.max(Number(item.stars || 0), 1) + 10);
  return clamp(0.45 + starWeight * 0.18, 0.7, 1.75);
}

function nodeAlpha(item, isActive) {
  if (isActive) return 1;
  if (repositories.length > 50000) return 0.46;
  if (repositories.length > 10000) return 0.56;
  return 0.72;
}

function updateInspector() {
  if (!selected) {
    inspector.className = "inspector empty";
    inspector.textContent = "Select a repository star to inspect its civilization metrics.";
    return;
  }
  const civ = civilizations[selected.civilization];
  const cluster = clusters.find((item) => item.id === selected.cluster);
  const neighbors = getNeighbors(selected, 5);
  const insights = getTechnicalInsights(selected);
  inspector.className = "inspector";
  inspector.innerHTML = `
    <div class="repo-title">
      <h2>${selected.fullName}</h2>
      <span class="pill" style="background:${civ.color}">${civ.name}</span>
    </div>
    <p class="description">${selected.description}</p>
    <div class="metric-grid">
      ${metric("Craftsmanship", selected.craft)}
      ${metric("Machine Influence", selected.machine)}
      ${metric("Stability", selected.stability)}
      ${metric("Velocity", selected.velocity)}
    </div>
    <p class="section-title">Technical Neighborhood</p>
    <p class="description">${cluster ? `${cluster.name} / ${cluster.sector || "Cybertron Frontier"}` : "Developer Tools"} cluster. ${selected.technicalSummary || civ.lore}</p>
    <div class="confidence-row">
      <span>Cluster confidence</span>
      <strong>${insights.clusterConfidence}%</strong>
    </div>
    <p class="section-title">Technical DNA</p>
    <div class="dna-list">
      ${dnaItem("Semantic", 50, insights.semantic)}
      ${dnaItem("Dependencies", 30, insights.dependencies)}
      ${dnaItem("Structure", 20, insights.structure)}
    </div>
    <p class="section-title">Repository Signals</p>
    <div class="insight-grid">
      ${insightCard("Primary role", insights.role)}
      ${insightCard("Runtime surface", insights.runtime)}
      ${insightCard("Architecture hints", insights.architecture)}
      ${insightCard("Maturity pattern", insights.maturity)}
    </div>
    <p class="section-title">Civilization Evidence</p>
    <ul class="evidence-list">
      ${insights.evidence.map((item) => `<li>${item}</li>`).join("")}
    </ul>
    <p class="section-title">Signals</p>
    <div class="tag-list">${(selected.tags || []).map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
    ${selected.dream ? `<p class="section-title">Dreaming Layer</p><p class="description">${selected.dream}</p>` : ""}
    <p class="section-title">Nearest Neighbors</p>
    ${neighbors
      .map(
        (neighbor) => `
        <div class="neighbor">
          <span>${neighbor.fullName}</span>
          <strong>${Math.round(100 - distance(selected, neighbor) / 8)}%</strong>
        </div>
      `
      )
      .join("")}
    <p class="method-note">Similarity is a weighted technical vector, not shared stars. Machine influence is an interpretive heuristic, not authorship detection.</p>
  `;
}

function metric(label, value) {
  return `<div class="metric"><span>${label}</span><strong>${value}</strong></div>`;
}

function dnaItem(label, weight, text) {
  return `
    <div class="dna-item">
      <div>
        <span>${label}</span>
        <strong>${weight}%</strong>
      </div>
      <p>${text}</p>
    </div>
  `;
}

function insightCard(label, text) {
  return `
    <div class="insight-card">
      <span>${label}</span>
      <strong>${text}</strong>
    </div>
  `;
}

function getTechnicalInsights(item) {
  const tagText = (item.tags || []).join(", ");
  const clusterLabels = {
    systems: {
      role: "Platform foundation",
      runtime: "Low-level runtime / host OS",
      architecture: "Hardware, process, service, or compiler boundary",
      semantic: `README/topics indicate ${tagText.toLowerCase()} system behavior.`,
      dependencies: "System APIs and toolchains dominate over application packages.",
      structure: "Large core tree, tests/tooling split, platform-specific directories.",
    },
    cloud: {
      role: "Infrastructure control plane",
      runtime: "Distributed services",
      architecture: "Controllers, operators, telemetry, APIs, and deployment manifests",
      semantic: `Docs and topics point to ${tagText.toLowerCase()} infrastructure.`,
      dependencies: "Go/cloud-native libraries and service integrations drive similarity.",
      structure: "CLI, API, integration, deployment, and CI surfaces are strong signals.",
    },
    ml: {
      role: "Model or AI application layer",
      runtime: "Python/CUDA/model pipeline",
      architecture: "Training, inference, adapters, datasets, and examples",
      semantic: `Repository language clusters around ${tagText.toLowerCase()} concepts.`,
      dependencies: "Torch, transformers, CUDA, tokenizer, or API packages dominate.",
      structure: "Examples, model modules, benchmarks, and docs shape the placement.",
    },
    web: {
      role: "Application framework",
      runtime: "Browser / Node.js",
      architecture: "Components, routing, rendering, state, build tooling",
      semantic: `Description and topics emphasize ${tagText.toLowerCase()} concerns.`,
      dependencies: "Frontend packages, bundlers, and rendering libraries are strongest.",
      structure: "Packages, examples, docs, tests, and build config define the region.",
    },
    data: {
      role: "Data engine",
      runtime: "Storage / query service",
      architecture: "Query, indexing, replication, cache, or persistence layers",
      semantic: `Technical text centers on ${tagText.toLowerCase()} workloads.`,
      dependencies: "Storage engines, query libraries, and protocol integrations matter most.",
      structure: "Core engine, client, test, benchmark, and extension directories matter.",
    },
    security: {
      role: "Security tooling",
      runtime: "CLI / service / library",
      architecture: "Scanning, cryptography, reconnaissance, protocol, or exploit modules",
      semantic: `Repository intent is anchored in ${tagText.toLowerCase()} signals.`,
      dependencies: "Crypto, network, parser, and protocol dependencies shape similarity.",
      structure: "Rule sets, modules, payloads, test cases, and docs are strong indicators.",
    },
    tools: {
      role: "Developer tool",
      runtime: "Editor / CLI / language runtime",
      architecture: "Command surface, plugin model, language server, or runtime core",
      semantic: `Topics suggest ${tagText.toLowerCase()} developer workflows.`,
      dependencies: "Compiler, editor, terminal, parser, and packaging libraries matter.",
      structure: "CLI, extension, package, docs, and integration-test layout is important.",
    },
    knowledge: {
      role: "Knowledge system",
      runtime: "Documentation / curriculum",
      architecture: "Curated references, examples, guides, and learning paths",
      semantic: `Topics suggest ${tagText.toLowerCase()} knowledge organization.`,
      dependencies: "Language and framework terms act as taxonomy signals.",
      structure: "Markdown, examples, and categorized references shape the placement.",
    },
  };
  const base = clusterLabels[item.cluster] || genericClusterInsight(item);
  const evidence = item.evidence && item.evidence.length ? item.evidence : [
    item.craft >= 85
      ? "High craftsmanship score suggests long-lived maintainership, documentation, and review depth."
      : "Moderate craftsmanship score suggests faster iteration or less mature maintenance signal.",
    item.machine >= 70
      ? "High machine-influence signal comes from repeated templates, example density, or bursty generation-like patterns."
      : "Machine-influence signal is limited; the repository appears more hand-curated by current heuristics.",
    item.velocity >= 80
      ? "High velocity indicates active commits, releases, or feature movement."
      : "Velocity is comparatively stable or slow-moving.",
    item.stability >= 80
      ? "Stability signal suggests consistent maintenance cadence and project continuity."
      : "Stability signal is mixed and should be validated with issue/release history.",
  ];

  return {
    ...base,
    clusterConfidence: clamp(Math.round((item.craft * 0.25 + item.stability * 0.25 + (100 - Math.abs(item.velocity - 70)) * 0.2 + 72 * 0.3)), 45, 96),
    maturity: item.stability >= 82 ? "Established" : item.velocity >= 85 ? "Fast moving" : "Evolving",
    evidence,
  };
}

function genericClusterInsight(item) {
  const cluster = clusters.find((entry) => entry.id === item.cluster);
  const clusterName = cluster ? cluster.name : item.cluster || "Technical region";
  const sectorName = cluster ? cluster.sector : item.cybertronSector || "Cybertron Frontier";
  return {
    role: clusterName,
    runtime: item.primaryLanguage || "Mixed runtime",
    architecture: `${sectorName} technical region`,
    semantic: item.technicalSummary || "Topics, language profile, and repository metadata define this placement.",
    dependencies: "Dependency hints are inferred from topics and language ecosystem signals in the static dataset.",
    structure: "Repository shape is inferred from activity, language count, size, and metadata signals.",
  };
}

function updateTooltip(event) {
  if (!hovered) {
    tooltip.style.display = "none";
    return;
  }
  const civ = civilizations[hovered.civilization];
  tooltip.style.display = "block";
  tooltip.style.left = `${event.clientX}px`;
  tooltip.style.top = `${event.clientY}px`;
  tooltip.innerHTML = `<strong>${hovered.fullName}</strong><span>${civ.name} &middot; ${(hovered.tags || []).join(", ")}</span>`;
}

function withWorld(callback) {
  ctx.save();
  ctx.translate(width / 2, height / 2);
  ctx.scale(camera.zoom, camera.zoom);
  ctx.translate(camera.x, camera.y);
  callback();
  ctx.restore();
}

function screenToWorld(x, y) {
  return {
    x: (x - width / 2) / camera.zoom - camera.x,
    y: (y - height / 2) / camera.zoom - camera.y,
  };
}

function nearestRepository(x, y, threshold) {
  let nearest = null;
  let best = Infinity;
  repositories.forEach((item) => {
    if (!activeCivilizations.has(item.civilization) && item !== selected) return;
    const dx = wrappedDelta(item.x, x);
    const dy = item.y - y;
    const current = Math.sqrt(dx * dx + dy * dy);
    if (current < best) {
      best = current;
      nearest = item;
    }
  });
  return best <= threshold ? nearest : null;
}

function getNeighbors(item, limit) {
  return repositories
    .filter((candidate) => candidate !== item)
    .map((candidate) => ({ ...candidate, score: distance(item, candidate) }))
    .sort((a, b) => a.score - b.score)
    .slice(0, limit);
}

function distance(a, b) {
  const dx = wrappedDelta(a.x, b.x);
  const dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function centerOnRepository(item) {
  const currentCenter = -camera.x;
  const targetX = nearestWrappedX(item.x, currentCenter);
  camera.x += (-targetX - camera.x) * 0.75;
}

function constrainCamera() {
  camera.y = clamp(camera.y, -MAP_VERTICAL_LIMIT, MAP_VERTICAL_LIMIT);
}

function visibleWrapOffsets() {
  const left = -camera.x - width / (2 * camera.zoom) - WRAP_PADDING;
  const right = -camera.x + width / (2 * camera.zoom) + WRAP_PADDING;
  const start = Math.floor((left - MAP_CONTENT_RIGHT) / MAP_WIDTH);
  const end = Math.ceil((right - MAP_CONTENT_LEFT) / MAP_WIDTH);
  const offsets = [];
  for (let index = start; index <= end; index += 1) {
    const offset = index * MAP_WIDTH;
    const contentLeft = MAP_CONTENT_LEFT + offset;
    const contentRight = MAP_CONTENT_RIGHT + offset;
    if (contentRight >= left && contentLeft <= right) {
      offsets.push(offset);
    }
  }
  return offsets;
}

function wrappedDelta(a, b) {
  let delta = a - b;
  delta -= Math.round(delta / MAP_WIDTH) * MAP_WIDTH;
  return delta;
}

function nearestWrappedX(x, referenceX) {
  return x - Math.round((x - referenceX) / MAP_WIDTH) * MAP_WIDTH;
}

init();
