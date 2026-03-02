import React from 'react';


type MenuItem = {
    title: string;
    href: string;
};

type MenuProps = {
    menuItems: MenuItem[];
};

export const NewMenu: React.FC<MenuProps> = ({ menuItems }: MenuProps) => {
    return (
        <ul>
            {menuItems.map((item) => (
                <li key={item.href}>
                    <a href={`#${item.href}`}>{item.title}</a>
                </li>
            ))}
        </ul>
    );
};
