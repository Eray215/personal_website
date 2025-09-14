// ===== helpers =====
const $  = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));

// footer year (optional)
const y = $("#year");
if (y) y.textContent = new Date().getFullYear();

// target render root
const root = document.getElementById("categories");

// small inline note helper (diagnostics)
function note(msg){
  if (!root) return;
  const p = document.createElement("p");
  p.className = "muted";
  p.style.marginTop = "8px";
  p.textContent = msg;
  root.parentElement.insertBefore(p, root);
}

// data from works.js
const cats = (window.WORKS && Array.isArray(window.WORKS.categories))
  ? window.WORKS.categories
  : null;

if (!root) note("Error: #categories container not found in index.html.");
if (!cats) note('works.js not loaded. Ensure <script src="works.js"> comes before app.js, and paths are correct.');

// ---------- UI builders ----------
function subtitleRow(catKey, sub) {
  // SAME-TAB NAVIGATION: no target="_blank" so Back button works
  const url = `list.html?cat=${encodeURIComponent(catKey)}&sub=${encodeURIComponent(sub.key)}`;
  return `
    <div class="subtitle">
      <a href="${url}" rel="noopener">${sub.title}</a>
      <a class="btn" href="${url}" rel="noopener">Open</a>
    </div>
  `;
}

function categoryItem(cat){
  const subs = (cat.subtitles || []).map(s => subtitleRow(cat.key, s)).join("");
  return `
    <div class="acc-item" data-key="${cat.key}">
      <div class="acc-head">
        <h3>${cat.title}</h3>
        <span>▾</span>
      </div>
      <div class="acc-body" style="display:none">
        <div class="acc-body-inner">
          ${subs || '<p class="muted">No subtitles yet.</p>'}
        </div>
      </div>
    </div>
  `;
}

// ---------- render & interactions ----------
function render(){
  if (!root || !cats) return;
  root.innerHTML = cats.map(categoryItem).join("");

  // accordion toggle: only one open at a time
  root.addEventListener("click", (e)=>{
    const head = e.target.closest(".acc-head");
    if (!head) return;
    const body = head.parentElement.querySelector(".acc-body");
    const open = body.style.display === "block";
    $$(".acc-body").forEach(b => b.style.display = "none");
    body.style.display = open ? "none" : "block";
  });
}

render();

// (Optional) console breadcrumb for debugging
console.log("[app.js] WORKS loaded:", !!cats, cats);
