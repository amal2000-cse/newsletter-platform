import { sideBarActiveItem } from '@/app/configs/constants'
import { useAtom } from 'jotai'
import React from 'react'

const useRouteChange = () => {

    const [activeRoute, setActiveRoute] = useAtom(sideBarActiveItem)
    return { activeRoute, setActiveRoute };

}

export default useRouteChange