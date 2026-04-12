// Simple hash-based SPA router
const routes = {};

export function on(path, handler) {
  routes[path] = handler;
}

export function navigate(path) {
  window.location.hash = path;
}

export function resolve() {
  const hash = window.location.hash.slice(1) || '/';
  const [base, ...rest] = hash.split('?');
  const params = Object.fromEntries(new URLSearchParams(rest.join('?')));

  if (routes[base]) {
    routes[base](params);
    return;
  }

  // Try dynamic match
  for (const [pattern, handler] of Object.entries(routes)) {
    if (pattern.includes(':')) {
      const regex = new RegExp('^' + pattern.replace(/:([^/]+)/g, '([^/]+)') + '$');
      const match = base.match(regex);
      if (match) {
        const keys = [...pattern.matchAll(/:([^/]+)/g)].map(m => m[1]);
        const dynamicParams = Object.fromEntries(keys.map((k, i) => [k, match[i + 1]]));
        handler({ ...params, ...dynamicParams });
        return;
      }
    }
  }

  // 404 fallback → home
  if (routes['/']) routes['/']({});
}

export function init() {
  window.addEventListener('hashchange', resolve);
  resolve();
}
