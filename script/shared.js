const sidebarMenuItems = document.querySelectorAll('.sidebar__menu-item')
// const sidebarSubmenuLinks = document.querySelectorAll('.sidebar__submenu-link')

sidebarMenuItems.forEach(sidebarMenuItem =>{
    sidebarMenuItem.addEventListener('click', ()=>{
        const sidebarMenuItemActive = document.querySelector('.active-menu')
        const sidebarMenuItemIconActive = document.querySelector('.active-icon')
        sidebarMenuItemIconActive.classList.remove('active-icon')
        sidebarMenuItemActive.classList.remove('active-menu')
        sidebarMenuItem.classList.add('active-menu')
        sidebarMenuItem.firstElementChild.classList.add('active-icon')

        const sidebarSubmenuActive = document.querySelector('.active-submenu')
        sidebarSubmenuActive.classList.remove('active-submenu')
        const sidebarSubmenu = document.querySelector(`#${sidebarMenuItem.dataset.menu}`)
        sidebarSubmenu.classList.add('active-submenu')
    })
})
