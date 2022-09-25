import React, { lazy } from 'react'
import { useRoutes, RouteObject } from 'react-router-dom'

import { groupBy, map, cloneDeep } from 'lodash'

import Layout from '@/component/layout/index'
import Mdx from '@/component/mdx'
import NotFound from '@/component/status/404'
import { mdxFiles } from '@/service/mdx-service'

// 路由懒加载
const Home = lazy(() => import('@/page/home'))
const Site = lazy(() => import('@/page/site'))
const About = lazy(() => import('../page/about/index.mdx'))
const Log = lazy(() => import('../page/log/index.mdx'))
const Resume = lazy(() => import('../page/resume/index.mdx'))
const MyResume = lazy(() => import('../page/resume/resume.mdx'))
const routeConfig: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  },
  {
    path: '/site',
    element: <Site />
  },
  {
    path: '/md',
    element: <Layout isMd />,
    children: [
      {
        path: '/md/about',
        element: <About />
      },
      {
        path: '/md/log',
        element: <Log />
      },
      {
        path: '/md/resume',
        element: (
          <Mdx>
            <Resume />
          </Mdx>
        )
      },
      {
        path: '/md/myresume',
        element: (
          <Mdx isResum>
            <MyResume />
          </Mdx>
        )
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]

// 动态生成md文件路由
const mdxRouters = () => {
  const groupRouters = groupBy(cloneDeep(mdxFiles), 'parentPath')
  return map(groupRouters, (mdxs, key) => {
    return {
      path: `/${key}`,
      element: <Layout type={key} />,
      children: map(mdxs, (mdx, n) => {
        if (n === 0) {
          mdx.index = true
          mdx.path = ''
        }
        const Element = lazy(mdx.element)
        return {
          ...mdx,
          element: (
            <div className="markdown-body">
              {/* 技术栈页面才显示知识图谱 */}
              <Mdx showMindMap={mdx.parentPath === 'tech'}>
                <Element />
              </Mdx>
            </div>
          )
        }
      })
    }
  })
}

const Router = () => {
  const appRouter = useRoutes(routeConfig.concat(mdxRouters()))
  return appRouter
}

export default Router
