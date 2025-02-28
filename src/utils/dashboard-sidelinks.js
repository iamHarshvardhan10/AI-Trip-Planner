import { VscAccount, VscDashboard, VscAdd, VscComment, VscLink, VscVariableGroup } from "react-icons/vsc"


export const siderbarlinks = [
    {
        id: 1,
        name: "My Profile",
        path: '/dashboard/my-profile',
        icon: VscAccount
    },
    {
        id: 2,
        name: "Dashboard",
        path: '/dashboard/admin',
        icon: VscDashboard,
        type: 'Admin'
    },
    {
        id: 3,
        name: "Add Trip",
        path: '/dashboard/add-trip',
        icon: VscAdd,
        type: 'Admin'
    },
    {
        id: 4,
        name: "Let's Chat",
        path: '/dashboard/chat',
        icon: VscComment,
        type: 'User'
    },
    {
        id: 5,
        name: "Connect",
        path: '/dashboard/connect',
        icon: VscLink,
        type: 'User'
    },
    {
        id: 6,
        name: "Community",
        path: '/dashboard/community',
        icon: VscVariableGroup,
        type: 'User'
    }
]