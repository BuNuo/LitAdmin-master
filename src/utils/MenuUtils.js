
import lazyLoading from './lazyLoading'
export default (routers,data) => {
  generaMenu(routers,data)
}
function generaMenu(routers,data){
  data.forEach((item)=>{
    let menu = Object.assign({},item)
    menu.component = lazyLoading(menu.component)
    if(item.children && item.children.length === 1) {
      menu.children = []
      generaMenu(menu.children,item.children)
    }else
    if(!item.leaf){
      menu.children = []
      generaMenu(menu.children,item.children)
    }
    /*if(item.leaf && item.redirect){
      menu.children = []
      generaMenu(menu.children,item.children)
    }*/
    routers.push(menu)
  })
}