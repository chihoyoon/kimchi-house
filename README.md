# Web development of small restaurant (Kimchi House)

## Application Information

1. Restaurant name : Kimchi House

2. Location : Calgary, AB

3. Website address : www.kimchihousecalgary.ca

---

## Project Document

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

        Delivery_service(table)
            id
            Service
            website

---

## Developer's Comments

My project is “web development of small restaurant.” This restaurant is "Kimchi House" which is located at china town in downtown. Because of COVID-19, sales at this restaurant have dropped sharply. They tried to improve sales, but it was difficult to recover the previous condition.

I wanted to help them through my project. So, I contacted them and offered web development. They opened a website about 2 years ago, but they have not been managing it at all. They have not even modified the price change. For this reason, I wanted to organize the admin pages as well as regular pages, so that they could update without the help of the developer. Additionally, I thought I could make my progress through this project.

First, I had a meeting with the restaurant owner to figure out what they needed and wanted. Next, I drew up project documents and simply sketched the site map. And, I arranged the layout of the website with Bootstrap.

I configured the server with Node.js, and used the database with MySQL. The reason for using MySQL was that there was not much data and I wanted to join database tables.

I used handlebars as an express template engine. Because I can use the HTML code that I made without modification. Of course, there was some discomfort because it was for static coding, but there was no problem with overall use.

This web doesn’t need user pages. So I didn’t use ‘bcrypt’ or ‘passport’ for sign up or sign in. But I used ‘express session’ to keep the admin page logged in.

I divided the admin pages into a separate router from the regular pages. And I made separate files of the extended code and used them like modules.

This is a working application. This is a simple app, but I hope it will actually help them.

I have committed about 80 times for this project in about a month. These show my questions and answers so far. I kept asking two questions. “Why isn't it working?”, and “why is it working?”
The process of completing this project was the process of finding the answers.
