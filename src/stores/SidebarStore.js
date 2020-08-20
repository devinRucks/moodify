import { observable, action, decorate } from 'mobx'
import { createContext } from 'react'

class SidebarStore {
     activeTab = 'Mood'

     handleTabClick(tabName) {
          this.activeTab = tabName;
          console.log(tabName)
     }

}

decorate(SidebarStore, {
     activeTab: observable,
     handleTabClick: action
})

export const SidebarStoreContext = createContext(new SidebarStore());