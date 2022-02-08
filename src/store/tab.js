export default {
    state: {
        isCollapse: false,
        // 存放面包屑的元素，默认有个首页
        tabsList: [
            {
                path: '/home',
                name: 'home',
                label: '首页',
                icon: 'home'
            }
        ],
        // 当前选中的菜单
        currentMenu: null
    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse;
        },
        selectMenu(state, val) {
            if (val !== 'home') {
                // 不是首页
                state.currentMenu = val;
                const result = state.tabsList.findIndex(item => item.name === val.name)
                if (result === -1) {
                    state.tabsList.push(val);
                }
            } else {
                // 重置标识
                state.currentMenu = null;
            }
        }
    }
}