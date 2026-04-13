// Simple query-based SPA router
const routes = {};

export function on(path, handler) {
  routes[path] = handler;
}

export function navigate(path) {
  // path is usually something like '/' or '/?play=10'
  // When parsing we treat the pathname part as the virtual route path
  history.pushState(null, '', path);
  resolve();
}

export function resolve() {
  const params = new URLSearchParams(window.location.search);
  
  if (params.has('play')) {
    // Expected format: ?play=10-impossible-tic-tac-toe
    const playParam = params.get('play');
    const id = playParam.split('-')[0];
    if (routes['/play']) routes['/play']({ id });
  } else {
    // Normal Home
    if (routes['/']) routes['/']({});
  }
}

export function init() {
  window.addEventListener('popstate', resolve);
  resolve();
}
