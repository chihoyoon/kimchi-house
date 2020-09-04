# Web development of small restaurant (Kimchi House)

< project document>

1.  Project Name: Web development of small restaurant (Kimchi House)

2.  Purpose

    (1) To help the store that is taking a serious blow to their operations due to the COVID-19.
    This store is located downtown, but a lot of offices are closed and the floating population has declined due to the Corona crisis.

    (2) To produce a store's website to maximize its promotional effect.

    (3) From a personal perspective,
    It will help me to increase my experience and learning about web production and operation through the project process.

3.  Client's Needs

    (1) Publicity for his store.

    (2) Menus and prices to be implemented on the website.

    (3) To enter and modify important information on the website by himself.

4.  The approximate appearance of the website to be implemented

    (1) Implement restaurant menus and prices in the form of tables.

    (2) Implement menus and prices as a database.

    (3) configure the administrator screen to facilitate entry, modification, and deletion.

    (4) Map the location of the restaurant.

    (5) Implement the administrator blog screen.

5.  Schedule

    (1) Outline rough - Week 5 of July

    (2) Coding in HTML format - Week 5 of July

    (3) Modifying coding to Node.js format - Week 4 of August

    (4) Checking and correcting coding - Week 2 of September

    (5) Secure servers and a domain address - Week 4 of September

    (6) Building and publishing a server - Week 1 of October

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
