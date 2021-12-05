import Router from 'vue-router'
import Home from '@/components/Home'
import Acc from '@/components/BTNs/Acc'
import Contacts from '@/components/BTNs/Contacts'
import Forum from '@/components/BTNs/Forum'
import Help from '@/components/BTNs/Help'
import Bays from '@/components/BTNs/Bays'
import News from '@/components/BTNs/News'
import User from '@/components/BTNs/User'
import Reg from '@/components/BTNs/Reg'


export default new Router({

    routes: [

        {
            path:"",
            name:"home",
            component: Home
        },
        {
            path:"/Acc",
            name:"Acc",
            component:Acc
        },
        {
            path:"/Contacts",
            name:"Contacts",
            component: Contacts
        },
        {
            path:"/Forum",
            name:"Forum",
            component: Forum
        },
        {
            path:"/Help",
            name:"Help",
            component: Help
        },
        {
            path:"/Bays",
            name: "Bays",
            component: Bays
        },
        {
            path: "/News",
            name: "News",
            component: News
        },
        {
            path: "/User",
            name: "User",
            component: User
        },
        {
            path: "/Reg",
            name: "Reg",
            component: Reg
        }
    ],

    mode: 'history'

})