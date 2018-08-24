import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const router = new Router({
	mode: 'history',
	base: '',
	routes: [
		{
			path: '/',
      redirect: 'system/enterpriseInfo',
			component: () =>
				import('./views/layout-dashboard.vue'),
			children: [

        //  企业信息
        {
          path: 'system/enterpriseInfo',
          component: () =>
            import('./views/system/enterpriseInfo.vue'),
        },
        // 门店信息
        {
          path: 'system/shopInfo',
          component: () =>
            import('./views/system/shopInfo.vue'),
        },
        // 车辆品牌
        {
          path: 'system/carBrand',
          component: () =>
            import('./views/system/carBrand.vue'),
        },

        // ========== 订单中心 ==========
        {
          path: '/order',
          redirect: '/order/detail',
          component: () =>
            import('./views/order/layout.vue'),
          children:[
            {
              path: 'confirm-order',
              component: () =>
                import('./views/order/confirm-order.vue'),
            },
            {
              path: 'wait-pay',
              component: () =>
                import('./views/order/wait-pay.vue'),
            },
            {
              path: 'wait-send',
              component: () =>
                import('./views/order/wait-send.vue'),
            },
            {
              path: 'detail',
              component: () =>
                import('./views/order/detail.vue'),
            },
            {
              path: 'refund-money',
              component: () =>
                import('./views/order/refund-money.vue'),
            },
            {
              path: 'refund-good-money',
              component: () =>
                import('./views/order/refund-good-money.vue'),
            },
          ],
          // meta:{
          //   auth:true
          // }
        },
        // ========== 设置 ==========
        {
          path: '/setting',
          // redirect: '/setting/search-accessories',
          component: () =>
            import('./views/setting/layout.vue'),
          children:[
            // ========== 搜索配件 ==========
            {
              path: 'search-accessories',
              component: () =>
                import('./views/setting/price-setting/search-accessories')
            },
            // ========== 价格修改 ==========
            {
              path: 'modify-price',
              component: () =>
                import('./views/setting/price-setting/modify-price'),
            },
            // ========== 客户账户审核 ==========
            {
              path: 'check-account',
              component: () =>
                import('./views/setting/check-account/check-account'),
            },
            // ========== 挂账白名单设置 ==========
            {
              path: 'white-list-setting',
              component: () =>
                import('./views/setting/white-list-setting/white-list-setting'),
            },
            // ========== 牛咖斯账户设置 ==========
            {
              path: 'company-setting',
              component: () =>
                import('./views/setting/company-setting/company-setting'),
            },
          ],
          // meta:{
          //   auth:true
          // }
        },
        /*采购*/
        {
          path: '/purchase',
          component: () =>
            import('./views/setting/layout.vue'),
          children: [
            {
              path: 'initiate-inquiry',
              component: () =>
                import('./views/purchase/initiate-inquiry')
            }
          ]
        }
      ]
		},
    // ========== 权限管理 ==========
    {
      path: '/permission',
      redirect: '/permission/userAccount',
      component: ()=>
        import('./views/layout-dashboard.vue'),
      children:[
        //  用户账号
        {
          path: '/permission/userAccount',
          component: () =>
            import('./views/permission/userAccount.vue'),
        },
        // 用户角色
        {
          path: '/permission/character',
          component: () =>
            import('./views/permission/character.vue'),
        }
      ]
    },
    // 客户信息
    {
      path: '/customerInfo',
      redirect:'/customerInfo/customerInfo',
      component: () =>
        import('./views/layout-dashboard.vue'),
      children: [
        {
          path: '/customerInfo/customerInfo',
          component: () =>
            import('./views/customerInfo/customerInfo.vue'),
        }
      ]
    },
    // 车辆信息
    {
      path: '/carInfo',
      redirect:'/carInfo/carInfo',
      component: () =>
        import('./views/layout-dashboard.vue'),
      children: [
        {
          path: '/carInfo/carInfo',
          component: () =>
            import('./views/carInfo/carInfo.vue'),
        }
      ]
    },
    // 销售订单
    {
      path: '/sellOrder',
      redirect:'/sellOrder/sellOrder',
      component: () =>
        import('./views/layout-dashboard.vue'),
      children: [
        {
          path: '/sellOrder/sellOrder',
          component: () =>
            import('./views/sellOrder/sellOrder.vue'),
        }
      ]
    },
    // 消费码
    {
      path: '/consumerCode',
      redirect:'/consumerCode/consumerCode',
      component: () =>
        import('./views/layout-dashboard.vue'),
      children: [
        {
          path: '/consumerCode/consumerCode',
          component: () =>
            import('./views/consumerCode/consumerCode.vue'),
        }
      ]
    },
    // 快喷工单
    {
      path: '/workOrder',
      redirect:'/workOrder/workOrder',
      component: () =>
        import('./views/layout-dashboard.vue'),
      children: [
        {
          path: '/workOrder/workOrder',
          component: () =>
            import('./views/workOrder/workOrder.vue'),
        }
      ]
    },
    // 取送车订单
    {
      path: '/connectCarOrder',
      redirect:'/connectCarOrder/connectCarOrder',
      component: () =>
        import('./views/layout-dashboard.vue'),
      children: [
        {
          path: '/connectCarOrder/connectCarOrder',
          component: () =>
            import('./views/connectCarOrder/connectCarOrder.vue'),
        }
      ]
    },
    // 数据统计
    {
      path: '/dataStatistics',
      redirect:'/dataStatistics/dataStatistics',
      component: () =>
        import('./views/layout-dashboard.vue'),
      children: [
        {
          path: '/dataStatistics/dataStatistics',
          component: () =>
            import('./views/dataStatistics/dataStatistics.vue'),
        }
      ]
    },
    // 门店新增
    {
      path: '/newShopInfo',
      redirect:'/system/newShopInfo',
      name: 'newShopInfo',
      component: () =>
        import('./views/layout-dashboard.vue'),
      children: [
        {
          path: '/system/newShopInfo',
          component: () =>
            import('./views/system/newShopInfo.vue'),
        }
      ]
    },
    // 查看销售订单
    {
      path: '/orderInfo',
      redirect:'/sellOrder/orderInfo',
      name: 'orderInfo',
      component: () =>
        import('./views/layout-dashboard.vue'),
      children: [
        {
          path: '/sellOrder/orderInfo',
          component: () =>
            import('./views/sellOrder/orderInfo.vue'),
        }
      ]
    },

  ],
})

export default router
