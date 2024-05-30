// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"dist/assets/data/markers/sitios.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sitios = void 0;
var sitios = exports.sitios = [{
  name: 'El Médano',
  lat: -26.89785,
  lon: -66.748783
}, {
  name: 'Vivientes',
  lat: -26.922617,
  lon: -66.755875
}, {
  name: 'Vaca Vizcana',
  lat: -26.928972,
  lon: -66.745083
}, {
  name: 'Puestos Eloy',
  lat: -26.938472,
  lon: -66.788861
}, {
  name: 'Aleros Vaca Vizcana',
  lat: -26.92325,
  lon: -66.765944
}, {
  name: 'Los Llampa',
  lat: -26.881833,
  lon: -66.733983
}, {
  name: 'Barranco Don Silvestre',
  lat: -26.887169,
  lon: -66.740213
}, {
  name: 'Alto Juan Pablo',
  lat: -26.880368,
  lon: -66.726692
}, {
  name: 'La Mesada',
  lat: -26.886300,
  lon: -66.723567
}, {
  name: 'Morro Relincho',
  lat: -26.890383,
  lon: -66.721033
}, {
  name: 'Monolitos',
  lat: -26.897424,
  lon: -66.739596
}, {
  name: 'El Overito',
  lat: -26.939675,
  lon: -66.720067
}, {
  name: 'Yerba Buena',
  lat: -26.940556,
  lon: -66.703889
}, {
  name: 'El Alto El Bolsón',
  lat: -26.919817,
  lon: -66.688833
}, {
  name: 'Guasa Rodeo',
  lat: -26.914550,
  lon: -66.701950
}, {
  name: 'Mal Paso',
  lat: -26.909550,
  lon: -66.708067
}, {
  name: 'Rodeo',
  lat: -26.899583,
  lon: -66.709900
}, {
  name: 'Cerro Pabellón',
  lat: -26.942561,
  lon: -66.719039
}, {
  name: 'El Mollecito',
  lat: -26.944556,
  lon: -66.713167
}, {
  name: 'Vega Barro Negro',
  lat: -26.859928,
  lon: -66.671989
}, {
  name: 'Vega Relincho',
  lat: -26.897883,
  lon: -66.691464
}, {
  name: 'Vega Las Cuevas',
  lat: -26.882442,
  lon: -66.679592
}, {
  name: 'Cueva Pintada',
  lat: -26.989967,
  lon: -66.703850
}, {
  name: 'El Duraznito',
  lat: -26.979367,
  lon: -66.711467
}, {
  name: 'Barranca Larga',
  lat: -26.984819,
  lon: -66.741794
}, {
  name: 'El Abra',
  lat: -26.984217,
  lon: -66.686661
}, {
  name: 'Loma del Ojito',
  lat: -26.976550,
  lon: -66.699086
}, {
  name: 'Las Piedritas Negras',
  lat: -26.982061,
  lon: -66.744881
}, {
  name: 'Mesada de los Sauces',
  lat: -26.959731,
  lon: -66.732908
}, {
  name: 'Chan',
  lat: -26.991028,
  lon: -66.740472
}, {
  name: 'Faldeo W',
  lat: -27.041667,
  lon: -66.798889
}, {
  name: 'La Angostura Morros',
  lat: -27.020738,
  lon: -66.775291
}, {
  name: 'La Angostura',
  lat: -27.028183,
  lon: -66.783069
}, {
  name: 'El Antigal Alto',
  lat: -27.018556,
  lon: -66.786839
}, {
  name: 'Mesada Negra',
  lat: -27.017083,
  lon: -66.793542
}, {
  name: 'Puesto Grande I',
  lat: -27.028353,
  lon: -66.812281
}, {
  name: 'Puesto Grande II',
  lat: -27.030061,
  lon: -66.808658
}, {
  name: 'Los Viscos',
  lat: -27.020067,
  lon: -66.74430
}, {
  name: 'Cueva Cirilo',
  lat: -27.020178,
  lon: -66.744680
}, {
  name: 'Cueva de las Máscaras',
  lat: -27.020333,
  lon: -66.744357
}, {
  name: 'Apacheta de los Bolsonistas',
  lat: -27.021042,
  lon: -66.720717
}, {
  name: 'Filo de la Mina',
  lat: -27.016900,
  lon: -66.715833
}, {
  name: 'Agua del Pajarito',
  lat: -27.007308,
  lon: -66.720422
}, {
  name: 'Filo de la Pata del Suri',
  lat: -26.965556,
  lon: -66.663697
}, {
  name: 'Los Morteritos',
  lat: -26.941261,
  lon: -66.639633
}, {
  name: 'Filo con Rastros',
  lat: -26.929597,
  lon: -66.657056
}, {
  name: 'Cienaguita',
  lat: -26.926390,
  lon: -66.646113
}, {
  name: 'Piedra Centinela',
  lat: -26.938725,
  lon: -66.630936
}, {
  name: 'Piedra con Flor',
  lat: -26.965800,
  lon: -66.655283
}, {
  name: 'El Antigal',
  lat: -26.932022,
  lon: -66.643300
}, {
  name: 'El Antigal II',
  lat: -26.928186,
  lon: -66.635978
}, {
  name: 'La Cueva',
  lat: -27.039382,
  lon: -66.669104
}, {
  name: 'Antigal del Sorochal',
  lat: -27.038622,
  lon: -66.687053
}, {
  name: 'Puestos Cura Quebrada',
  lat: -26.973056,
  lon: -66.756389
}, {
  name: 'Los Chorritos',
  lat: -27.010972,
  lon: -66.865000
}, {
  name: 'Tras el Filito',
  lat: -27.009278,
  lon: -66.866028
}, {
  name: 'Herradura del Cerro',
  lat: -27.010000,
  lon: -66.867750
}, {
  name: 'Estancia Abelardo',
  lat: -27.010806,
  lon: -66.857611
}, {
  name: 'La Curva',
  lat: -27.012611,
  lon: -66.854400
}, {
  name: 'Puesto Segovia',
  lat: -27.016847,
  lon: -66.857747
}, {
  name: 'Piedras Negras I',
  lat: -26.986917,
  lon: -66.852861
}, {
  name: 'Piedras Negras II',
  lat: -26.987167,
  lon: -66.853639
}, {
  name: 'Sixto Gutiérrez',
  lat: -26.993119,
  lon: -66.861942
}, {
  name: 'Piedras Negras IV',
  lat: -26.987556,
  lon: -66.852389
}, {
  name: 'Alero Medanitos',
  lat: -26.972306,
  lon: -66.836056
}, {
  name: 'Reparo I',
  lat: -26.966417,
  lon: -66.815000
}, {
  name: 'Reparo II',
  lat: -26.968056,
  lon: -66.815639
}, {
  name: 'Reparo III',
  lat: -26.968750,
  lon: -66.814750
}, {
  name: 'Puesto El Abrita',
  lat: -27.021125,
  lon: -66.858619
}, {
  name: 'El Manantial',
  lat: -27.024767,
  lon: -66.858228
}, {
  name: 'El Parador',
  lat: -27.028439,
  lon: -66.853156
}, {
  name: 'El Bajo',
  lat: -27.038917,
  lon: -66.855689
}, {
  name: 'La Palca',
  lat: -27.022873,
  lon: -66.843853
}];
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "37541" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","dist/assets/data/markers/sitios.js"], null)
//# sourceMappingURL=/sitios.bd77a9a0.js.map