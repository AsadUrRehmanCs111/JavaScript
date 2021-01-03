const banner = document.querySelector('#page-banner')
console.log(banner.nodeName)
console.log(banner.nodeType)
console.log(banner.hasChildNodes())

var clonedBanner = banner.cloneNode(true) //Banner will be cloned (copied)
console.log(clonedBanner) // clonNode(false) will give only the parent node