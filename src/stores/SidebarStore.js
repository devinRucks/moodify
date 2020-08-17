import { observable, action, decorate } from 'mobx'
import { createContext } from 'react'

class SidebarStore {
     tabs = ['Mood', 'Weather']
     activeTab = 'Mood'

     handleTabClick(tabName) {
          this.activeTab = tabName;
          console.log(tabName)
     }

}

decorate(SidebarStore, {
     tabs: observable,
     activeTab: observable,
     handleTabClick: action
})

export const SidebarStoreContext = createContext(new SidebarStore());