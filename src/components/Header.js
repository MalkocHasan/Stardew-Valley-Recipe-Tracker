import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Menu } from '@headlessui/react'

const links = [
    { href: '/account-settings', label: 'Account settings' },
    { href: '/support', label: 'Support' },
    { href: '/license', label: 'License' },
    { href: '/sign-out', label: 'Sign out' },
  ]

export default function Header(props) {

    return (
        <>
            <div className='bg-gray-200 py-8'>

            </div>
        </>
    );


}