const Menu = [
    {
        "id": "dashboard",
        "label": "Dashboard",
        "icon": "home",
        "path": "/dashboard"
    },
    {
        "id": "users",
        "label": "Users",
        "icon": "users",
        "children": [
            {
                "id": "users-list",
                "label": "User List",
                "path": "/users"
            },
            {
                "id": "users-create",
                "label": "Create User",
                "path": "/users/create"
            },
            {
                "id": "users-roles",
                "label": "Roles & Permissions",
                "children": [
                    {
                        "id": "roles",
                        "label": "Roles",
                        "path": "/users/roles"
                    },
                    {
                        "id": "permissions",
                        "label": "Permissions",
                        "path": "/users/permissions"
                    }
                ]
            }
        ]
    },
    {
        "id": "reports",
        "label": "Reports",
        "icon": "bar-chart",
        "children": [
            {
                "id": "sales-report",
                "label": "Sales",
                "path": "/reports/sales"
            },
            {
                "id": "user-report",
                "label": "User Activity",
                "path": "/reports/users"
            }
        ]
    },
    {
        "id": "settings",
        "label": "Settings",
        "icon": "settings",
        "children": [
            {
                "id": "profile",
                "label": "Profile",
                "path": "/settings/profile"
            },
            {
                "id": "security",
                "label": "Security",
                "path": "/settings/security"
            }
        ]
    }
];


export default Menu;