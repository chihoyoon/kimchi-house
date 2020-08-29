# Web development of small restaurant (Kimchi House)

< project document >

1.  Project Name: Web development of small restaurant (Kimchi House)

2.  Purpose
    To help the store that are taking a serious blow to their operations due to the COVID. This store is located in downtown, but a lot of office are closed and the floating population has declined due to the Corona crisis.
    To produce a store's website to maximize its promotional effect.
    From a personal perspective, It will help me to increase experience and learning about web production and operation through the project process.

3.  Client's Needs
    Publicity for his store.
    Menus and prices to be implemented on the website.
    To enter and modify important information on the website by himself.

4.  Approximate appearance of the website to be implemented
    Implement restaurant menus and prices in the form of tables.
    Implement menus and prices as a database and configure the administrator screen to facilitate entry, modification, and deletion.
    Map the location of the restaurant.
    Implement the administrator blog screen.

5.  Schedule
    Outline rough - Week 5 of July
    Coding in HTML format - Week 5 of July
    Modifying coding to Node.js format - Week 4 of August
    Checking and correcting coding - Week 2 of September
    Secure servers and a domain address - Week 4 of September
    Building and publishing a server - Week 1 of October

6.  Database Tree (MySQL)

    Kimchihouse (database)

        Menu_class (table)
            class_id
            class_Name

        Menu (table)
            id
            class_ID
            menu
            price
            comment
            image

        Blog(table)
            id
            tittle
            author
            date
            description

        Delivery_service
            id
            Service
            website
