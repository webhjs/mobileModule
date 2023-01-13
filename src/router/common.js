// import Login from "@/views/login";
// import Layout from "@/libs/layout/Layout";

let routerFile = ''
const hash = /.*?#.*?/.test(window.location.href)
if (hash) {
    routerFile = window.location.hash.match(/#\/([\w-]*)\/?/)[1]
} else {
    routerFile = window.location.pathname.match(/\/([\w-]*)\/?/)[1]
}
export const nameSpace = routerFile;

export const constantCommonRouterMap = [
]
export const asyncCommonRouterMap = [
]