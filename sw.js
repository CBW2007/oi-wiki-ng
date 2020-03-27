/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "d2d3612af1df181302e193fa8c922dd4"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "885296f794bc4c06d05f9cb1f0a23695"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "0460a02d9b371b57cb102bdb17e8724a"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "126d716b796f538fa98418be809b1714"
  },
  {
    "url": "page-data/math/page-data.json",
    "revision": "0e8a06ca321efe096dbc3e280b24e188"
  },
  {
    "url": "page-data/math/poly/div-mod/page-data.json",
    "revision": "9d2e1ecf9da35d21cc3071496941eb91"
  },
  {
    "url": "page-data/math/poly/fft/page-data.json",
    "revision": "979c3286499f1441ee4ead39b8fc3910"
  },
  {
    "url": "page-data/math/poly/fwt/page-data.json",
    "revision": "f960105459ff7230763b3d3872101775"
  },
  {
    "url": "page-data/math/poly/intro/page-data.json",
    "revision": "a574adfcf7f3cd2bf99cd202d9fd4373"
  },
  {
    "url": "page-data/math/poly/inv-tri-func/page-data.json",
    "revision": "2d31f7ba0fe70ddab2900780a256bf57"
  },
  {
    "url": "page-data/math/poly/inv/page-data.json",
    "revision": "a16ec841e8e4c97cf780b9b7c88e7739"
  },
  {
    "url": "page-data/math/poly/lagrange/page-data.json",
    "revision": "c8e545d16720825390be1593fe9e4e1d"
  },
  {
    "url": "page-data/math/poly/ln-exp/page-data.json",
    "revision": "bb51b70e5a73d604c7b4c815107b757c"
  },
  {
    "url": "page-data/math/poly/multipoint-eval-interpolation/page-data.json",
    "revision": "48aa64f21bc7df1808cba51d7a42c52b"
  },
  {
    "url": "page-data/math/poly/newton/page-data.json",
    "revision": "56a6fb506e5930dc05f08affa8d60338"
  },
  {
    "url": "page-data/math/poly/ntt/page-data.json",
    "revision": "891ca8389f267859db1b6a6190c7cec6"
  },
  {
    "url": "page-data/math/poly/sqrt/page-data.json",
    "revision": "a8929bbeb53a9b5ae7fbc5784e4226fe"
  },
  {
    "url": "page-data/math/poly/tri-func/page-data.json",
    "revision": "c2314dfea42718a447682094c11aff8a"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/pages/page-data.json",
    "revision": "409185b4b48ba133266454fe3e277a4a"
  },
  {
    "url": "page-data/tags/animals/page-data.json",
    "revision": "c5174fae8be6c6231409c4c7bfdc03fa"
  },
  {
    "url": "page-data/tags/chicago/page-data.json",
    "revision": "3d0c07ac2a40f7e34efb2b262c411b6a"
  },
  {
    "url": "page-data/tags/math/page-data.json",
    "revision": "be3a4764af2feec3ac03588908c0dcf3"
  },
  {
    "url": "page-data/tags/page-data.json",
    "revision": "becd73fa324bfa3709f421c539fc4679"
  },
  {
    "url": "page-data/tags/polynomial/page-data.json",
    "revision": "2c560cc9f86a1d37be80bb3225cccc1b"
  },
  {
    "url": "page-data/tags/zoos/page-data.json",
    "revision": "fd3b2b8fc9c78c0f712f2b88a0acd67e"
  },
  {
    "url": "page-data/tags/中文/page-data.json",
    "revision": "0cdc4458160bc5f8cd9c7fe47d975ef3"
  },
  {
    "url": "page-data/test/page-data.json",
    "revision": "8c3abc3dc0278dda44489a0c9aecd99e"
  },
  {
    "url": "page-data/theme-guide/customization/page-data.json",
    "revision": "216ded3d05ca83fdd0c742a1f09ff995"
  },
  {
    "url": "page-data/theme-guide/mdx-components/page-data.json",
    "revision": "215b53aed6e7a2c3e116ef8366b83333"
  },
  {
    "url": "page-data/theme-guide/navigation/page-data.json",
    "revision": "22622f204469817a3f62f423a029c447"
  },
  {
    "url": "page-data/theme-guide/page-data.json",
    "revision": "bdfd52a4c21067956158d992a349ecc3"
  },
  {
    "url": "13-82646a8e06d51a09f15c.js"
  },
  {
    "url": "14-922a4087f86bb77b5690.js"
  },
  {
    "url": "252f366e-2b5ebf1b5efd41c49e97.js"
  },
  {
    "url": "5db4768070ad89555ab684338e9a5a771fd6772a-e4545f69cda17a16efcb.js"
  },
  {
    "url": "app-1eabf69aa3cb665df61d.js"
  },
  {
    "url": "bab4896a-9833e6ea167471f0ba53.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-cb3a455b7fc422f24abe.js"
  },
  {
    "url": "component---src-pages-404-js-c5c568415d69a653d4bb.js"
  },
  {
    "url": "component---src-pages-pages-js-37f89a550d8f12848367.js"
  },
  {
    "url": "component---src-pages-tags-js-47644f05a1dd81073d4c.js"
  },
  {
    "url": "component---src-templates-doc-js-4c9346bbd59b2c505848.js"
  },
  {
    "url": "component---src-templates-tags-js-cffd792ebe4b943002c6.js"
  },
  {
    "url": "extra.js"
  },
  {
    "url": "framework-32aebc101bb81b56d976.js"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "styles-85a04149be4e142495ba.js"
  },
  {
    "url": "webpack-runtime-1d7e89d264e7c835b477.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "02565fdd755791a12be2efc3cddc478d"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "a64367b2f20302a9d6f214569017f012"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(json)$/, new workbox.strategies.NetworkFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(woff|woff2)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff)$/, new workbox.strategies.NetworkOnly(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-1eabf69aa3cb665df61d.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
