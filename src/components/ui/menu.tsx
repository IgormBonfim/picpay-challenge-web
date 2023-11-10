"use client"
import { ButtonOrLink, Props as ButtonOrLinkProps } from '@ui/buttonOrLink';
import { Menu as HeadlesssMenu, Transition  } from '@headlessui/react'
import Link from 'next/link';
import { ComponentProps, Fragment, ReactNode } from 'react';

type ButtonProps = ComponentProps<"button">;

interface MenuProps{
    children: ReactNode;
}  

export default function Menu({ children }: MenuProps) {
    return (
        <HeadlesssMenu as="div" className="relative">
            {children}
        </HeadlesssMenu>
    );
}

interface MenuButtonProps extends ButtonProps {};

export function MenuButton({ children, className }: MenuButtonProps) {
    return (
        <HeadlesssMenu.Button className={className}>
            {children}
        </HeadlesssMenu.Button>
    );
}

export function MenuItems({ children }: MenuProps) {
    return (
        <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        >
            <HeadlesssMenu.Items className="flex flex-col p-2 z-20 origin-top-right absolute right-0 mt-2 w-56 rounded-lg shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
                {children}
            </HeadlesssMenu.Items>
        </Transition>
    );
}

export interface MenuItemProps extends ButtonOrLinkProps {
    activeClass?: string
}

export function MenuItem({ children, activeClass, ...props}: MenuItemProps) {
    return (
        <HeadlesssMenu.Item>
            {({ active }) => (
                <ButtonOrLink className={`${active && activeClass} p-2 rounded w-full text-sm flex items-center justify-center`} {...props}>
                    {children}
                </ButtonOrLink>
            )}
        </HeadlesssMenu.Item>
    );
}